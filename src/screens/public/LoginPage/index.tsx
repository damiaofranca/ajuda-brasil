import React from "react";
import { Button } from "@nextui-org/react";

import { GoogleIcon } from "../../../components";
import LogoLargeIcon from "../../../assets/icons/logo-large.svg";
import { useUserAuth } from "../../../hooks/useUserAuth";

import {
	Container,
	ContainerCenter,
	ContainerForm,
	ContainerLogo,
	ContainerSubmit,
	Logo,
	LabelForm,
} from "./styles";

const LoginPage: React.FC = () => {
	const { onSignInWithGoogle } = useUserAuth();

	return (
		<Container className="bg-background">
			<ContainerCenter>
				<ContainerLogo>
					<Logo alt="Client Vysor" src={LogoLargeIcon} />
				</ContainerLogo>
				<ContainerForm>
					<LabelForm className="text-content2">
						Continue para criar noticações de emergência
					</LabelForm>
					<ContainerSubmit>
						<Button
							type="submit"
							color="primary"
							variant="bordered"
							className="w-full"
							endContent={<GoogleIcon />}
							onClick={onSignInWithGoogle}
						>
							Continue com
						</Button>
					</ContainerSubmit>
				</ContainerForm>
			</ContainerCenter>
		</Container>
	);
};

export default LoginPage;
