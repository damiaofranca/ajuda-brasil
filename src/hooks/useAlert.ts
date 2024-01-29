import React from "react";
import { AlertContext } from "../providers/alert";

export const useAlert = (explode = true) => {
	const ctx = React.useContext(AlertContext);
	if (!ctx && explode) {
		throw new Error("Error, AlertContext not wrapped!");
	}
	return ctx;
};
