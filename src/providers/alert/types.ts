import { IAlertRequest } from "../../interfacers/request/alert";
import { IAlertResponse } from "../../interfacers/response/alert";

export interface IAlertContext {
	matchSearch: IAlertResponse[];
	onSetAlert: (alert: IAlertRequest) => Promise<void>;
	fetchAlertByDistance: (distance: number) => Promise<void>;
}
