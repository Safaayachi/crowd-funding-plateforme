import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

export function useUsers() {
	const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_API}/projects`, fetcher, {
		revalidateIfStale: false,
		revalidateOnFocus: false,
		revalidateOnReconnect: false,
	});
	return {
		data: data,
		isLoading: !error && !data,
		isError: error,
	};
}
