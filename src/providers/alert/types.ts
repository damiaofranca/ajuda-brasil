import { DocumentData } from "firebase/firestore";
import { IAlertRequest } from "../../interfacers/request/alert";

export interface IAlertContext {
	onSetAlert: (alert: IAlertRequest) => Promise<void>;
	fetchAlertByDistance: (
		distance: number,
	) => Promise<DocumentData[] | undefined>;
}
