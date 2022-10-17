import { NotificationButtonStyled, NotificationImageStyled } from "pages/header/Header.styled";
import notificationBell from "assets/icons/notificationBell.svg"

export const HeaderNotificationButton = () => {

    return <NotificationButtonStyled><NotificationImageStyled src={notificationBell}/></NotificationButtonStyled>
};