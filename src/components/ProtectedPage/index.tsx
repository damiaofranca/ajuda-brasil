import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUserAuth } from "../../hooks";

export type IProtectedPageProps = {
	redirectTo?: string;
	validatePage?: boolean;
	elementProps?: Record<string, any>;
	element?: React.ComponentType<any>;
};

export const ProtectedPage: React.FC<IProtectedPageProps> = ({
	elementProps,
	element: Element,
	validatePage = true,
	redirectTo = "/login",
}) => {
	const { userLogged } = useUserAuth();

	if (validatePage) {
		if (!userLogged) {
			return <Navigate to={redirectTo} />;
		}
	}

	if (Element) {
		return <Element {...(elementProps || {})} />;
	}

	return <Outlet />;
};
