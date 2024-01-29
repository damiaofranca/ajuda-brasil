import { ILocation } from "../../common/location";

export interface IAlertRequest extends ILocation {
	name: string;
	description: string;
}
