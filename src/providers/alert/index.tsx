import { FC, ReactNode, createContext, useState } from "react";
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
import { IAlertResponse } from "../../interfacers/response/alert";
import { IAlertRequest } from "../../interfacers/request/alert";

interface IAlertProps {
	children: ReactNode;
}

export const AlertContext = createContext<IAlertContext>({} as IAlertContext);

export const AlertProvider: FC<IAlertProps> = ({ children }) => {
	const { position, error } = useLocation();
	const [matchSearch, setMatchSearch] = useState<IAlertResponse[]>([]);
	const { userLogged } = useUserAuth();

	const onSetAlert = async (alert: IAlertRequest) => {
		try {
			if (userLogged) {
				await setDoc(doc(dbFireStore, "alerts", userLogged?.uid), {
					...alert,
					madeBy: userLogged?.uid,
					geohash: geohashForLocation([alert.lat, alert.lng]),
				});
			}
		} catch (error) {
			console.error("Erro ao definir alerta:", error);
		}
	};

	const fetchAlertByDistance = async (distance: number) => {
		try {
			if (position && error !== "User denied Geolocation") {
				const bounds = geohashQueryBounds(
					[position.lat, position.lng],
					distance * 1000,
				);
				const promises = bounds.map((b) => {
					const q = query(
						collection(dbFireStore, "alerts"),
						orderBy("geohash"),
						startAt(b[0]),
						endAt(b[1]),
					);
					return getDocs(q);
				});

				const snapshots = await Promise.all(promises);

				const matchingDocs: IAlertResponse[] = [];

				snapshots.forEach((snap) => {
					snap.docs.forEach((doc) => {
						const { lat, lng } = doc.data();
						const distanceInKm = distanceBetween(
							[lat, lng],
							[position.lat, position.lng],
						);
						const distanceInM = distanceInKm * 1000;
						if (distanceInM <= distance * 1000) {
							matchingDocs.push(doc.data() as IAlertResponse);
						}
					});
				});

				setMatchSearch(matchingDocs);
			} else {
				toast.warn(
					"Para prosseguir, é necessário aceitar as condições de localização.",
				);
			}
		} catch (error) {
			console.error("Erro ao buscar alertas por distância:", error);
		}
	};

	return (
		<AlertContext.Provider
			value={{ onSetAlert, fetchAlertByDistance, matchSearch }}
		>
			{children}
		</AlertContext.Provider>
	);
};
