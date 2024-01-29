import { FC, useState } from "react";
import {
	Container,
	ContainerButton,
	ContainerForm,
	Subtitle,
	Title,
} from "./styles";
import { Button, Input } from "@nextui-org/react";
import { useUserAuth } from "../../../hooks";
import { useNavigate } from "react-router-dom";

interface IDeleteAccount {}

export const DeleteAccount: FC<IDeleteAccount> = () => {
	const navigate = useNavigate();
	const textVerify = "Desejo excluir minha conta";
	const [name, setName] = useState<string>("");
	const { deleteAccount } = useUserAuth();

	const onRemove = async () => {
		if (name === textVerify) {
			try {
				await deleteAccount();
				navigate("/login");
			} catch (error) {}
		}
	};

	return (
		<Container>
			<Title className="text-content2">Deletar Conta</Title>
			<Subtitle className="text-content2">
				Você está prestes a excluir permanentemente sua conta. Esta ação
				removerá todos os seus dados, histórico e configurações associadas à sua
				conta. Tem certeza de que deseja prosseguir?{" "}
			</Subtitle>
			<ContainerForm>
				<Input
					size="md"
					type="email"
					label={`Digite: ${textVerify}`}
					onChange={({ target }) => setName(target.value)}
				/>
			</ContainerForm>

			<ContainerButton>
				<Button
					color="danger"
					onClick={onRemove}
					disabled={!(name === textVerify)}
					className=" disabled:bg-[#cac9ca]  disabled:hover:bg-[#cac9ca] disabled:hover:opacity-100"
				>
					Deletar conta
				</Button>
			</ContainerButton>
		</Container>
	);
};
