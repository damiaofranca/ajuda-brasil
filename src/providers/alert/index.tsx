import { FC, ReactNode, createContext } from "react";
import { IAlertRequest } from "../../interfacers/request/alert";
import {
	collection,
	doc,
	endAt,
	getDocs,
	orderBy,
	query,
	setDoc,
	startAt,
} from "firebase/firestore";
import { dbFireStore } from "../../config/firebase";
import { IAlertContext } from "./types";
import { useLocation, useUserAuth } from "../../hooks";
import {
	distanceBetween,
	geohashForLocation,
	geohashQueryBounds,
} from "geofire-common";
import { toast } from "react-toastify";

interface Ialert {
	children: ReactNode;
}

export const AlertContext = createContext<IAlertContext>({} as IAlertContext);

export const AlertProvider: FC<Ialert> = ({ children }) => {
	const { position, error } = useLocation();

	const { userLogged } = useUserAuth();
	const onSetAlert = async (alert: IAlertRequest) => {
		if (userLogged) {
			await setDoc(doc(dbFireStore, "alerts", userLogged?.uid), {
				...alert,
				geohash: geohashForLocation([alert.lat, alert.lng]),
			});
		}
	};

	const fetchAlertByDistance = async (distance: number) => {
		if (error === "User denied Geolocation" && position) {
			const bounds = geohashQueryBounds(
				[position.lat, position.lng],
				distance * 1000,
			);
			const promises = [];
			for (const b of bounds) {
				const q = query(
					collection(dbFireStore, "cities"),
					orderBy("geohash"),
					startAt(b[0]),
					endAt(b[1]),
				);

				promises.push(getDocs(q));
			}
			const snapshots = await Promise.all(promises);

			const matchingDocs = [];
			for (const snap of snapshots) {
				for (const doc of snap.docs) {
					const lat = doc.get("lat");
					const lng = doc.get("lng");

					const distanceInKm = distanceBetween(
						[lat, lng],
						[position.lat, position.lng],
					);
					const distanceInM = distanceInKm * 1000;
					if (distanceInM <= distance * 1000) {
						matchingDocs.push(doc.data());
					}
				}
			}
			return matchingDocs;
		} else {
			toast.warn(
				"Para prosseguir, é necessário aceitar as condições de localização.",
			);
		}
	};

	return (
		<AlertContext.Provider value={{ onSetAlert, fetchAlertByDistance }}>
			{children}
		</AlertContext.Provider>
	);
};
