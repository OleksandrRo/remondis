import styled from "styled-components";

// Notifications Styled Component

export const NotificationsStyled = styled.div`
display:flex;
align-items: center;
flex-direction:column;
overflow:hidden;

`;

export const NotificationItemStyled = styled.div`
width: 95%;
height:auto;
border: 2px solid black;
margin-bottom: 10px;
border-radius: 4px;
position: relative;


`;

export const NotificationItemTextStyled = styled.p`
margin-left: 2vw;
`;

export const NotificationButtonStyled = styled.button`
position: absolute;
left: 90vw;
top: 3vh;

`;

