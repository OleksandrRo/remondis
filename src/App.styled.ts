import styled, { createGlobalStyle } from "styled-components";

interface Props {
  background: string;
}

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box; 
       
    }
 `;

export const ButtonStyled = styled.button<Props>`
  display: flex;
  align-items: center;
  background: ${({ background }) => background};
`;
