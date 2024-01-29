import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
	display: flex;
`;

export const LinkAction = styled(NavLink)`
	height: fit-content;
	border: none;
	display: flex;
	padding: 0 14px;
	width: fit-content;
	align-items: center;
	background-color: transparent;

	font-size: 14px;
	font-weight: 400;
	line-height: 21px;
	text-decoration: none;
	font-family: "Open Sans";

	& span {
		opacity: 0.8;
		word-break: keep-all;

		&:hover {
			opacity: 0.6;
		}
	}

	&.active {
		& span {
			opacity: 1;
			font-weight: 600;
		}
	}
`;
