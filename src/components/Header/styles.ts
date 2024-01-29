import styled from "styled-components";

export const Container = styled.header`
	z-index: 1;
	width: 100%;
	display: flex;
	align-items: center;
	padding: 16px 40px 16px 29px;
`;

export const Logo = styled.img`
	width: auto;
	height: 32px;
	margin-right: 22px;

	@media screen and (max-width: 770px) {
		height: 20px;
		margin-right: 20px;
	}

	@media screen and (max-width: 480px) {
		display: none;
	}
`;

export const LeftSide = styled.div`
	flex: 1;
	height: 100%;
	display: flex;
	align-items: center;
`;

export const RightSide = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

export const NameUser = styled.h5`
	color: #ffffff;
	font-size: 16px;
	font-weight: 300;
	line-height: 24px;
	margin: 0 16px 0 0;
	font-family: "Open Sans";
`;

export const ContainerUserInfo = styled.div`
	display: flex;
	cursor: pointer;
	position: relative;
	align-items: center;
`;
