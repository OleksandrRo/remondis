import React from "react";
import { CalendarIcon } from "./CalendarIcon";
import { ListOfTasksIcon } from "./ListOfTasksIcon";
import { MapIcon } from "./MapIcon";
import { MenuStyle } from "./styles/MenuStyle";


export const Menu = () => {
    return(
        <MenuStyle>
            <MapIcon/>
            <CalendarIcon/>
            <ListOfTasksIcon/>
        </MenuStyle>
    )
}