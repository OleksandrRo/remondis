import styled from "styled-components";

export const ButtonStyle = styled.button`
    border: 2px solid;
    border-radius: 50%;
    padding: 10px;
    border-color: ${({color}) => color};
    color:${({color}) => color};
    &:hover{
        cursor: pointer;
`