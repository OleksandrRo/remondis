import styled from "styled-components";

// Header Styled Component

export const HeaderStyled = styled.div`
  display:flex;
  align-items:center;
  margin-bottom:10px;
  margin-top:10px;
  width:100%;
  height:10vh;
  background: rgba(83, 95, 106)
`;

export const LogoStyled = styled.img`
 width:10vw;
 height: auto; 
 margin-left:2vw;
`;

export const StatusButtonStyled = styled.button`
 width:1vw;
 height: 1vw;
 border:none;
 border-radius:100%%;
 cursor:pointer;
 position: relative;
 top:0.6vh;
 left: 75vw;
 background: red;
  

  &:hover{
    background: green;
  }

 
  `;
  
  export const NotificationImageStyled = styled.img`
  width:2.2vw;
  height: auto;
  position: relative;
  right: 1vw;
  top: -1.3vh;
  border-radius: 70%;
  
 
  `;

export const UserSettingIconStyled = styled.img`
 width:40%;
 height:40%;
 position: relative;
 left: 62vw;
`;
