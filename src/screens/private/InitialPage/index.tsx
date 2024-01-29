import { FC, useState } from "react";

import {
	AlertsCloseToYou,
	CreateAlertModal,
	MapHelperLocations,
} from "../../../components";
import PlusIcon from "../../../assets/icons/plus.svg";

import {
	Title,
	Header,
	Content,
	AddAlert,
	Container,
	ContainerMap,
	ContainerAlerts,
} from "./styles";

interface IInitialPage {}

export const InitialPage: FC<IInitialPage> = () => {
	const [showModalAlert, setShowModalAlert] = useState<boolean>(false);
	const [selectedAlert, setSelectedAlert] = useState<{
		lat: number;
		lng: number;
	} | null>(null);

	const onShowModalRegister = () => setShowModalAlert(true);

	const onCloseModalRegister = () => setShowModalAlert(false);

	const onSelectAlert = (alert: { lat: number; lng: number }) =>
		setSelectedAlert(alert);

	return (
		<Container>
			<Header>
				<Title>Dashboard</Title>
				<AddAlert
					color="primary"
					variant="shadow"
					onClick={onShowModalRegister}
					startContent={<img src={PlusIcon} alt="Cadastrar alerta" />}
				>
					Cadastrar alerta
				</AddAlert>
			</Header>
			<Content>
				<ContainerMap>
					<MapHelperLocations alert={selectedAlert} />
				</ContainerMap>
				<ContainerAlerts className="bg-content3">
					<AlertsCloseToYou onSelectDetail={(e) => onSelectAlert(e)} />
				</ContainerAlerts>
			</Content>
			{showModalAlert ? (
				<CreateAlertModal onCloseFn={onCloseModalRegister} />
			) : (
				<></>
			)}
		</Container>
	);
};
