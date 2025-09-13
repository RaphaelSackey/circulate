import { TaddItmes, TgetItems } from "@/types/S_types";
import { prisma } from "@/services/server/S_postgress";
import { Prisma } from "@/generated/prisma";

export async function addItem(data: TaddItmes): Promise<boolean> {
	console.log(data)
	try {
		const newItem = await prisma.item.create({
			data: {
				name: data.name,
				description: data.description,
				imageUrl: data.imageUrl,
				category: data.category,
				latitude: data.latitude,
				longitude: data.longitude,
				owner: {
					connect: {
						uid: data.ownerId,
					},
				},
			},
		});

		console.log(newItem);
		return true;
	} catch (e) {
		console.log(e);
		throw e;
	}
}

export async function getItems({
	longitude,
	latitude,
	batch,
	searchQuery,
}: TgetItems) {
	const MILES = 2;
	const METERS = MILES * 1609.34;
	const limit = 10;
	const offset = (Number(batch) - 1) * limit;

	const hasSearch = !!searchQuery?.trim();

	try {
		const items = await prisma.$queryRaw<
			Array<{
				id: number;
				name: string;
				imageUrl: string[];
				description: string;
				distance: number;
				category: string[];
				status: string
			}>
		>(Prisma.sql`
			SELECT 
				id,
				name,
				"imageUrl",
				description,
				ST_DistanceSphere(
					ST_MakePoint(${longitude}::double precision, ${latitude}::double precision),
					ST_MakePoint(longitude, latitude)
				) AS distance,
				category,
				status
			FROM "Item"
			WHERE
				ST_DistanceSphere(
					ST_MakePoint(${longitude}::double precision, ${latitude}::double precision),
					ST_MakePoint(longitude, latitude)
				) <= ${METERS}
				AND status = 'AVAILABLE'
				${
					hasSearch
						? Prisma.sql`AND name ILIKE ${"%" + searchQuery + "%"}`
						: Prisma.empty
				}
			ORDER BY distance ASC
			LIMIT ${limit}
			OFFSET ${offset};
		`);

		return {
			success: true,
			itemsNearby: items,
			nextt: items.length === limit ? batch + 1 : null,
		};
	} catch (e) {
		throw e;
	}
}

export async function requestItem(itemId: number, borrowerId: string): Promise<boolean> {
	try {
		// Step 1: Find the item
		const item = await prisma.item.findUnique({
			where: { id: itemId },
		});

		if (!item) {
			throw new Error("Item not found");
		}

		if (item.status !== "AVAILABLE") {
			throw new Error("Item is not available");
		}

		// Step 2: Create a borrow record
		await prisma.borrow.create({
			data: {
				itemId: itemId,
				borrowerId: borrowerId,
				ownerId: item.ownerId, // owner of the item
				status: "REQUESTED",
			},
		});

		// Step 3: Update the item status to PENDING
		const here = await prisma.item.update({
			where: { id: itemId },
			data: { status: "PENDING" },
		});

		console.log(here)
		return true;
	} catch (e) {
		console.error(e);
		return false;
	}
}
