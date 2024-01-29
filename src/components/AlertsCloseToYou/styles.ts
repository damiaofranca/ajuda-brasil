import { Input as InputRoot } from "@nextui-org/react";
import styled from "styled-components";

export const Container = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
`;

export const TitleAlert = styled.h2`
	color: #454545;
	font-size: 26px;
	font-weight: 700;
`;

export const Input = styled(InputRoot)`
	margin: 12px 0 6px 0;
`;

export const UnitLetters = styled.span`
	color: #fff;
	cursor: default;
	font-size: 12px;
	padding: 2px 6px;
	border-radius: 6px;
`;

export const ListAlerts = styled.div`
	display: flex;
	overflow: auto;
	flex-direction: column;
`;

export const ListItem = styled.div`
	width: 100%;
	margin: 6px 0;
	min-height: 90px;
	padding: 4px 10px;
	border-radius: 6px;
`;

export const TitleList = styled.h4`
	color: #fff;
	font-size: 20px;
	font-weight: 300;
`;

export const ListHeader = styled.div`
	display: flex;
	align-items: center;
`;

export const ListContent = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ListDescription = styled.p`
	color: #fff;
	font-size: 13px;
	font-weight: 300;
	word-wrap: break-word;
`;

export const ListFooter = styled.div`
	display: flex;
	margin-bottom: 6px;
	align-items: center;
	justify-content: space-between;
`;
