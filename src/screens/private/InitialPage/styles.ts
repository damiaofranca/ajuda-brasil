import { Button } from "@nextui-org/react";
import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
`;

export const Header = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 16px;
	justify-content: space-between;
`;

export const Title = styled.h1`
	font-size: 26px;
	font-weight: 700;
	font-family: "Open Sans", sans-serif;
`;

export const AddAlert = styled(Button)`
	height: 42px;
	min-width: 180px;
	margin-left: 14px;
`;

export const ContainerMap = styled.div``;

export const ContainerAlerts = styled.div`
	background-color: blue;
`;

export const Content = styled.div`
	height: 100%;
	display: grid;
	column-gap: 10px;
	grid-template-columns: auto 400px;

	@media screen and (max-width: 1080px) {
		row-gap: 20px;
		column-gap: normal;
		grid-template-columns: auto;
	}
`;
