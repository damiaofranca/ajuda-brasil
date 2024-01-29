import { collection, onSnapshot, query } from "firebase/firestore";
import { dbFireStore } from "../config/firebase";
import { IAlertResponse } from "../interfacers/response/alert";
import { useEffect, useState } from "react";

interface IUseGetStores {
	alerts: IAlertResponse[];
}

export const useFetchAlerts = (): IUseGetStores => {
	const [alerts, setAlerts] = useState<IAlertResponse[]>([]);

	useEffect(() => {
		const unsub = onSnapshot(
			query(collection(dbFireStore, "alerts")),
			(collection) => {
				!collection.empty &&
					setAlerts(() =>
						collection.docs.map((store) => store.data() as IAlertResponse),
					);
			},
		);

		return () => unsub();
	}, []);

	return {
		alerts,
	};
};
