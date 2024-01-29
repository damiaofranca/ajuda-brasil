import { RouteObject } from "react-router-dom";
import { ProtectedPage } from "../../components";

import { Account } from "./Account";
import { DeleteAccount } from "./DeleteAccount";
import { InitialPage } from "./InitialPage";

export const ROUTES_PAGES: RouteObject[] = [
	{
		path: "/",
		element: <ProtectedPage element={InitialPage} validatePage={true} />,
	},
	{
		path: "/account",
		element: <ProtectedPage element={Account} validatePage={true} />,
		children: [
			{
				path: "delete-account",
				element: <DeleteAccount />,
			},
		],
	},
];
