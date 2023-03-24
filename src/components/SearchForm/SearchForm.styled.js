import styled from "styled-components";
import { Button } from "components/SharedLayout/SharedLayout.styled";

export const StyledForm = styled.form`
display: flex;
justify-content: center;
margin-bottom: ${({ theme }) => theme.spacing(5)};
gap: ${({ theme }) => theme.spacing(2)};
`;

export const StyledInput = styled.input`
padding: 8px 16px;
border: ${({ theme }) => `1px solid ${theme.colors.borderInputColor}`};
border-radius: ${({ theme }) => theme.spacing(2)};
transition-property: border;
transition: ${({ theme }) => `border ${theme.transition}`};

:focus {
outline: none;
border: ${({ theme }) => `1px solid ${theme.colors.accent}`};
}
`;

export const StyledButton = styled(Button)`
max-width: 152px;
padding: 8px 32px;
font-weight: 500;
`;
