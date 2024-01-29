import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	max-width: 397px;
	flex-direction: column;
`;

export const Title = styled.h1`
	font-size: 18px;
	font-weight: 600;
	line-height: 36px;
	margin-bottom: 14px;
`;

export const Subtitle = styled.h5`
	font-size: 14px;
	font-weight: 300;
	margin-bottom: 12px;

	font-family: "Open Sans";
`;

export const ContainerForm = styled.div`
	margin: 1rem 0;
`;

export const ContainerButton = styled.div`
	width: 100%;
	display: flex;
	margin-top: 32px;
	justify-content: flex-end;
`;
