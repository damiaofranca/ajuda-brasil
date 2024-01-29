import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	min-height: 100vh;
	flex-direction: column;
`;

export const ContainerMain = styled.div`
	width: 100%;
	display: flex;
`;

export const Main = styled.div`
	width: 100%;
	padding: 32px;
	overflow-y: auto;
	position: relative;
	min-height: calc(100vh - 72px);

	@media screen and (max-width: 1080px) {
		padding: 24px;
	}

	@media screen and (max-width: 600px) {
		padding: 16px;
	}
`;
