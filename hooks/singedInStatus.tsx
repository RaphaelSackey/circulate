import { checkSignin } from "@/actions/client/C_auth_actions";
import { useQuery } from "@tanstack/react-query";

export default function useSignedIn() {
	const { isPending, data, isSuccess} = useQuery({
		queryKey: ["uid"],
		queryFn: checkSignin,
		retry:false
	});

	return { data, isPending, isSuccess };
}
