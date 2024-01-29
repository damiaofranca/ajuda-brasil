import React from "react";
import { Button } from "@nextui-org/react";
import { Outlet, useNavigate } from "react-router-dom";

import { ArrowLeftIcon, TrashIcon } from "../../../components";
import {
	Title,
	Container,
	ContainerHeader,
	Wrapper,
	ListSettings,
	Content,
} from "./styles";
import { ListBox } from "../../../components/ListBox";

interface AccountProps {}

const listSettings = [
	{
		key: "delete account",
		name: "Deletar conta",
		url: "delete-account",
		startIcon: <TrashIcon />,
	},
];

export const Account: React.FC<AccountProps> = () => {
	const navigate = useNavigate();

	const onNavigateBack = () => {
		navigate(-1);
	};

	return (
		<>
			<Container>
				<ContainerHeader>
					<Button
						isIconOnly
						radius="full"
						color="primary"
						variant="light"
						className="mr-4"
						aria-label="Go back"
						onClick={onNavigateBack}
					>
						<ArrowLeftIcon />
					</Button>
					<Title className="text-content2">Conta</Title>
				</ContainerHeader>
				<Wrapper>
					<ListSettings>
						<ListBox ariaLabelBox="Settings of account" list={listSettings} />
					</ListSettings>
					<Content>
						<Outlet />
					</Content>
				</Wrapper>
			</Container>
		</>
	);
};
