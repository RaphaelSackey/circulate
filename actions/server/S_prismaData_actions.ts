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
				latitude: number;
				longitude: number;
				distance: number;
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
				) AS distance
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
