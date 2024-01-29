import { ModalContent as ModalContentRoot } from "@nextui-org/react";
import styled from "styled-components";

export const FormItem = styled.div`
	margin: 4px 0;
`;

export const ModalContent = styled(ModalContentRoot)`
	@media screen and (max-widtth: 380px) {
		max-width: 80% !important;
	}
`;
