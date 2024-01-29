import * as Yup from "yup";

export const RegisterAlertSchema = Yup.object().shape({
	name: Yup.string()
		.required("Campo obrigatório")
		.min(3, "Necessário ao menos 3 letras."),
	description: Yup.string()
		.required("Campo obrigatório")
		.min(5, "Necessário ao menos 5 letras.")
		.max(160, "Maximo limite atingido."),
});
