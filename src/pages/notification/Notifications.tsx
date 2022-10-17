import axios from "axios";
import { useState } from "react";
import { NotificationItemStyled, NotificationsStyled } from "./Notifications.styled";
import { NotificationItem } from "./components/NotificationItem";

export const Notifications = () => {

    // const [myData, setMyData] = useState([])
    // const fetchData = async () => {
    //     const response = await axios.get(``);
    //     setMyData(response.data)
    // }

    return <NotificationsStyled>
        <NotificationItem />

        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />

    </NotificationsStyled>

};
