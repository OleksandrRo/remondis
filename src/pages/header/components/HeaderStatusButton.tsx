import { StatusButtonStyled, NotificationImageStyled } from "pages/header/Header.styled";
import notificationBell from "assets/icons/notificationBell.svg"

export const HeaderStatusButton = () => {

    return <StatusButtonStyled><NotificationImageStyled src={notificationBell}/></StatusButtonStyled>
};