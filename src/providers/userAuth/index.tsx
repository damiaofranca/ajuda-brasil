import { toast } from "react-toastify";
import React, { ReactNode, useState } from "react";
import {
	User,
	signOut,
	deleteUser,
	signInWithPopup,
	onAuthStateChanged,
	sendPasswordResetEmail,
	createUserWithEmailAndPassword,
} from "firebase/auth";

import { auth, provider } from "../../config/firebase";
import { IUserAuthContext } from "./types";

interface UserAuthProps {
	children: ReactNode;
}

export const UserAuthContext = React.createContext<IUserAuthContext>(
	{} as IUserAuthContext,
);

export const UserAuth: React.FC<UserAuthProps> = ({ children }) => {
	const [loading, setLoading] = useState<boolean>(true);
	const [userLogged, setUserLogged] = React.useState<User | undefined>(
		undefined,
	);

	const onSignOut = async () => {
		await signOut(auth);
	};

	const onSignInWithGoogle = async () => {
		const user = await signInWithPopup(auth, provider);
		localStorage.setItem("user", JSON.stringify(user.user.providerData[0]));
		window.location.href = "/";
	};

	const onSignUp = async (values: { email: string; password: string }) => {
		const user = await createUserWithEmailAndPassword(
			auth,
			values.email,
			values.password,
		);
		localStorage.setItem("user", JSON.stringify(user.user.providerData[0]));
		window.location.href = "/";
	};

	const deleteAccount = async () => {
		if (userLogged) {
			try {
				await deleteUser(userLogged);
				toast.success("Conta deletada com sucesso.");
			} catch (error) {
				console.log(error);
			}
		}
	};

	const sendEmailUpdatePassword = async (email: string) => {
		try {
			await sendPasswordResetEmail(auth, email);
			toast.success("Email enviado com sucesso.");
		} catch (error) {
			console.log(error);
		}
	};

	React.useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setLoading(false);
			if (user) {
				setUserLogged(user);
			} else {
				setUserLogged(undefined);
			}
		});

		return () => {
			if (unsubscribe) unsubscribe();
		};
	}, []);
	return (
		<UserAuthContext.Provider
			value={{
				userLogged,

				onSignUp,
				onSignOut,
				deleteAccount,
				onSignInWithGoogle,
				sendEmailUpdatePassword,
			}}
		>
			{!loading && children}
		</UserAuthContext.Provider>
	);
};
