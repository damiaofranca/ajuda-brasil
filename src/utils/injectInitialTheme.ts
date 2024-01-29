export const injectInitialTheme = () => {
	const getTheme = localStorage.getItem("theme");

	if (!getTheme) {
		localStorage.setItem("theme", "light");
	}
};
