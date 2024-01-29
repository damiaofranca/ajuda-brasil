import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../hooks/useUserAuth";
import { getFirstNameFromEmail } from "../../utils/getFirstName";

import LogoIcon from "../../assets/icons/logo.svg";

import {
	Button,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
} from "@nextui-org/react";

import { Logo, NameUser, LeftSide, Container, RightSide } from "./styles";
import { MenuLinks } from "../MenuLinks";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
	const navigate = useNavigate();
	const { onSignOut, userLogged } = useUserAuth();

	const signOut = async () => {
		await onSignOut();
		navigate("/login");
	};

	const onNavigateToAccount = async () => {
		navigate("/account");
	};

	return (
		<Container className="bg-content4">
			<LeftSide>
				<Logo src={LogoIcon} alt="Ajuda emergêncial" />
				<MenuLinks />
			</LeftSide>

			<RightSide>
				<Dropdown backdrop="blur">
					<DropdownTrigger>
						<Button variant="light" className="py-2">
							<NameUser>
								{getFirstNameFromEmail(userLogged?.email || "")}
							</NameUser>
						</Button>
					</DropdownTrigger>
					<DropdownMenu aria-label="Ações">
						<DropdownItem key="profile" onClick={onNavigateToAccount}>
							Perfil
						</DropdownItem>
						<DropdownItem key="signOut" onClick={signOut}>
							Sair
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</RightSide>
		</Container>
	);
};
