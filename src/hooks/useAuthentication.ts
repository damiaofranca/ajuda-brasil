import React from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../config/firebase";

export function useAuthentication() {
	const [user, setUser] = React.useState<User>();

	React.useEffect(() => {
		const unsubscribeFromAuthStateChanged = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser(undefined);
			}
		});

		return unsubscribeFromAuthStateChanged;
	}, []);

	return {
		user,
	};
}
