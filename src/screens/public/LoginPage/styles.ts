import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	padding: 50px;
	min-height: 100vh;
	align-items: center;
	justify-content: center;

	@media screen and (max-width: 968px) {
		padding: 32px;
	}
`;

export const ContainerCenter = styled.div`
	width: 100%;
	display: flex;
	max-width: 370px;
	flex-direction: column;
`;

export const ContainerLogo = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

export const Logo = styled.img`
	height: 126px;
	width: fit-content;
	margin-bottom: 12px;
`;

export const ContainerForm = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export const LabelForm = styled.p`
	color: #c9c9c9;
	font-size: 13px;
	font-weight: 400;
	text-align: center;
	margin-bottom: 32px;
	font-family: "Open Sans";
`;

export const ContainerSubmit = styled.div`
	width: 100%;
	margin-bottom: 35px;

	&:last-child {
		margin: 0;
	}
`;
