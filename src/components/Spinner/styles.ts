import styled, { keyframes } from "styled-components";

export const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SpinnerContainer = styled.div`
	margin: 0 6px;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const SpinnerElement = styled.div`
	width: 16px;
	height: 16px;
	border-radius: 50%;
	border: 3px solid #f3f3f3;
	border-top: 4px solid #2382a0;
	animation: ${spinAnimation} 1s linear infinite;
`;
