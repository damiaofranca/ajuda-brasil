import { useEffect, useState } from "react";

interface IUseDelayQuery {
	query: string;
	delay: number;
}

export const useDelayQuery = ({ query, delay }: IUseDelayQuery): string => {
	const [searchByName, setSearchByName] = useState<string>("");

	useEffect(() => {
		const handler = setTimeout(() => {
			setSearchByName(query);
		}, delay);

		return () => {
			clearTimeout(handler);
		};
	}, [delay, query]);

	return searchByName;
};
