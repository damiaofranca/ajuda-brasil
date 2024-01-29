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

	@media screen and (max-width: 560px) {
		margin-bottom: 26px;
		flex-direction: column;
		align-items: flex-start;

		& > h1 {
			margin: 0 0 6px 0;
		}
		& > button {
			margin: 0;
		}
	}
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
	padding: 20px 18px;
	border-radius: 10px;
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
