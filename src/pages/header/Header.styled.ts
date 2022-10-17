import styled from "styled-components";

// Header Styled Component

export const HeaderStyled = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:10px;
  margin-top:10px;
  width:99vw;
  height:10vh;
  background: rgba(83, 95, 106)
`;

export const LogoStyled = styled.img`
 width:10vw;
 height: auto; 
 margin-left:2vw;
`;


export const ContainerNotificationAndSetting = styled.div`
  display:flex;
  justify-content:space-between;
  align-items: center;
  width:5.5vw;
  margin:2vw;
 
`;
export const NotificationButtonStyled = styled.button`
 width:1vw;
 height: 1vw;
 border:none;
 cursor:pointer;
 position: relative;
 background: red;
  

  &:hover{
    background: green;
  }

 
  `;
  
  export const NotificationImageStyled = styled.img`
  width:2.2vw;
  height: auto;
  position:absolute;
  left: -0.6vw;
  top: -1vh;
  border-radius: 70%;
  // transform: translate (-50%, -50%);
  
 
  `;

export const UserSettingIconStyled = styled.img`
 width:2.2vw;;
 height:auto;
 
 `;
