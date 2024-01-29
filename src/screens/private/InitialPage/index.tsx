import { FC, useState } from "react";
import {
	Title,
	Header,
	Content,
	AddAlert,
	Container,
	ContainerMap,
	ContainerAlerts,
} from "./styles";
import PlusIcon from "../../../assets/icons/plus.svg";
import { CreateAlertModal, MapHelperLocations } from "../../../components";

interface IInitialPage {}

export const InitialPage: FC<IInitialPage> = () => {
	const [showModalAlert, setShowModalAlert] = useState<boolean>(false);

	const onShowModalRegister = () => setShowModalAlert(true);

	const onCloseModalRegister = () => setShowModalAlert(false);

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
					<MapHelperLocations />
				</ContainerMap>
				<ContainerAlerts></ContainerAlerts>
			</Content>
			{showModalAlert ? (
				<CreateAlertModal onCloseFn={onCloseModalRegister} />
			) : (
				<></>
			)}
		</Container>
	);
};
