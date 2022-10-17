
import { NotificationItemStyled, NotificationItemTextStyled } from "../Notifications.styled";
import { NotificationButton } from "./NotificationButton";

export const NotificationItem = () => {

  return <>
    <NotificationItemStyled>
    <NotificationItemTextStyled> "Some Notification about success or failure <br /> Hi [Manager name], Your appointment on [DATE] at [TIME] is confirmed. View the details here: [LINK]."</NotificationItemTextStyled>
      <NotificationButton />
    </NotificationItemStyled>

  </>

};