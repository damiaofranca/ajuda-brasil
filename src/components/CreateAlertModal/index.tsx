import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
	Input,
} from "@nextui-org/react";
import { FC, useEffect, useState } from "react";
import { useAlert, useLocation } from "../../hooks";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { RegisterAlertSchema } from "./schema";
import { FlexVertical } from "../FlexVertical";
import { FormItem } from "./styles";

interface ICreateAlertModal {
	onCloseFn: () => void;
}

interface IValuesFields {
	name: string;
	description: string;
}

const initialValues: IValuesFields = {
	name: "",
	description: "",
};

export const CreateAlertModal: FC<ICreateAlertModal> = ({ onCloseFn }) => {
	const { onSetAlert } = useAlert();
	const { position, error: errorLocation } = useLocation();
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const {
		values,
		errors,
		touched,
		isValid,
		handleBlur,
		handleChange,
		validateForm,
		handleSubmit,
	} = useFormik<IValuesFields>({
		initialValues,
		enableReinitialize: true,
		validationSchema: RegisterAlertSchema,
		onSubmit: (valuesSmt) => {
			onSubmitFn(valuesSmt);
		},
	});

	const onSubmitFn = async (values: IValuesFields) => {
		if (position) {
			setIsLoading(true);
			try {
				onSetAlert({
					...values,
					...position,
				});
				setIsLoading(false);
				toast.success("Alerta criado com sucesso.");
				onCloseFn();
			} catch (error) {
				setIsLoading(false);
			}
		}
	};

	useEffect(() => {
		if (errorLocation === "User denied Geolocation") {
			onCloseFn();
			toast.warn(
				"Para prosseguir, é necessário aceitar as condições de localização.",
				{ autoClose: 1200 },
			);
		}
	}, [position, errorLocation, onCloseFn]);

	useEffect(() => {
		validateForm();
	}, [validateForm]);
	return (
		<Modal isOpen={true} onClose={onCloseFn}>
			<ModalContent>
				{(onClose) => (
					<>
						<ModalHeader className="flex flex-col gap-1">
							Registrar alerta
						</ModalHeader>
						<ModalBody>
							<FlexVertical>
								<FormItem>
									<Input
										name="name"
										label="Nome"
										variant="bordered"
										onBlur={handleBlur}
										value={values.name}
										onChange={handleChange}
										errorMessage={errors.name}
										isInvalid={errors.name && touched.name ? true : false}
									/>
								</FormItem>
								<FormItem>
									<Input
										name="description"
										variant="bordered"
										onBlur={handleBlur}
										onChange={handleChange}
										value={values.description}
										label="Descrição (Opcional)"
										errorMessage={errors.description}
										isInvalid={
											errors.description && touched.description ? true : false
										}
									/>
								</FormItem>
								<FormItem>
									<Input
										isDisabled
										label="Latitude"
										variant="bordered"
										value={String(position?.lat || "")}
									/>
								</FormItem>
								<FormItem>
									<Input
										isDisabled
										label="Longitude"
										variant="bordered"
										value={String(position?.lng || "")}
									/>
								</FormItem>
							</FlexVertical>
						</ModalBody>
						<ModalFooter>
							<Button color="danger" variant="light" onClick={() => onClose()}>
								Fechar
							</Button>
							<Button
								color="primary"
								disabled={!isValid}
								isDisabled={!isValid}
								isLoading={isLoading}
								onClick={() => handleSubmit()}
							>
								Registrar
							</Button>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	);
};
