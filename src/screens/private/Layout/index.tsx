import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../../components";

import { Container, ContainerMain, Main } from "./styles";
import { AlertProvider } from "../../../providers/alert";

const Layout: React.FC = () => {
	return (
		<AlertProvider>
			<Container>
				<Header />
				<ContainerMain>
					<Main className="bg-content1">
						<Outlet />
					</Main>
				</ContainerMain>
			</Container>
		</AlertProvider>
	);
};

export default Layout;
