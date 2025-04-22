import { Terminal } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function PromptAlert({
	message,
	acceptfn,
	rejectfn,
}: {
	message: string;
	acceptfn?: () => void;
	rejectfn?: () => void;
}) {
	return (
		<Alert>
			<Terminal className='h-4 w-4' />
			<AlertDescription className="text-lg">
				{message}
			</AlertDescription>

			{acceptfn && (
				<div className="flex gap-2 pt-5">
					<button onClick={acceptfn} className="px-4 py-2 border rounded-lg hover:cursor-pointer hover:opacity-70">Accept</button>
					<button onClick={rejectfn} className="px-4 py-2 border rounded-lg hover:cursor-pointer hover:opacity-70">Reject</button>
				</div>
			)}
		</Alert>
	);
}
