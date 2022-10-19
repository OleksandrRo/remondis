import styled from "styled-components"
interface Props {bg: string};
export const IndentifierStyle = styled.div<Props>`    
    width: 17px;
    height: 17px;    
    border-radius: 50%;
      
    background-color : #298300;    
    text-align: center;
    margin: 6% 0;    
    background-color: ${({bg})=> bg};
    `
         
