import { FirebaseError } from "firebase/app";
import { toast } from "react-toastify";

export function handleFirebaseRequestError(error: FirebaseError): void {
	let errorCode = "";
	switch (error.code) {
		case "auth/wrong-email":
			errorCode = "Email ou senha inválido";
			break;
		case "auth/wrong-password":
			errorCode = "Email ou senha inválido";
			break;
		case "auth/user-disabled":
			errorCode = "Usuário desabilitado";
			break;
		case "auth/user-not-found":
			errorCode = "Usuário não encontrado";
			break;
		default:
			errorCode = "Erro desconhecido";
			break;
	}

	toast.error(errorCode, {
		theme: "light",
		autoClose: 2000,
		draggable: true,
		pauseOnHover: true,
		closeOnClick: true,
		progress: undefined,
		position: "top-right",
		hideProgressBar: false,
	});
}
