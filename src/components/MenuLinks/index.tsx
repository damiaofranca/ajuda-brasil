import React from "react";
import { StyleSheetManager } from "styled-components";

import { Container, LinkAction } from "./styles";

interface IRouterChildren {
	name: string;
	path: string;
}

interface IRouterLinkChildren extends IRouterChildren {}

const LinkChildren: React.FC<IRouterLinkChildren> = ({ path, name }) => {
	return (
		<LinkAction to={path}>
			<span style={{ color: "#ffff" }}>{name}</span>
		</LinkAction>
	);
};

export const MenuLinks: React.FC = () => {
	const ROUTES_CHILDREN: IRouterChildren[] = [
		{
			path: "/",
			name: "Página Inicial",
		},
	];

	return (
		<StyleSheetManager shouldForwardProp={(prop) => prop !== "expanded"}>
			<Container>
				{ROUTES_CHILDREN && (
					<>
						{ROUTES_CHILDREN.map((urlPage) => (
							<LinkChildren
								key={urlPage.name}
								name={urlPage.name}
								path={urlPage.path}
							/>
						))}
					</>
				)}
			</Container>
		</StyleSheetManager>
	);
};
