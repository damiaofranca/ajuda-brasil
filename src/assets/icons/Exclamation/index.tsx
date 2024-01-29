import { FC } from "react";

interface IExclamation extends React.SVGProps<SVGSVGElement> {}

export const Exclamation: FC<IExclamation> = (props) => {
	return (
		<svg
			width="25"
			height="25"
			viewBox="0 0 25 25"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path d="M11 7H13V15.25H11V7ZM13 17V19H11V17H13Z" fill="darkgrey" />
			<circle cx="12" cy="13" r="9.35" stroke="darkgrey" strokeWidth="1.3" />
		</svg>
	);
};
