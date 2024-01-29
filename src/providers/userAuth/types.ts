import { User } from "firebase/auth";

export interface IUserAuthSignIn {
	email: string;
	password: string;
}

export interface IUserAuthContext {
	userLogged: User | undefined;
	onSignOut: () => Promise<void>;

	deleteAccount: () => Promise<void>;
	onSignInWithGoogle: () => Promise<void>;
	sendEmailUpdatePassword: (email: string) => Promise<void>;
	onSignUp: (values: { email: string; password: string }) => Promise<void>;
}
