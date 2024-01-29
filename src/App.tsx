import HandlerPages from "./screens/handlerPages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NextUIProvider } from "@nextui-org/react";

const App = () => {
	return (
		<NextUIProvider>
			<HandlerPages />
			<ToastContainer />
		</NextUIProvider>
	);
};

export default App;
