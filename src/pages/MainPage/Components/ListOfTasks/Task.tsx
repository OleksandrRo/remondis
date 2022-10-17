import React from "react";
import { TaskStyle } from "./style/TaskStyle";
import { Identifier } from "./Identifer";
import { DateAppointment } from "./DateAppointment";
import { AdressForInspection } from "./AdressForInspection";

export const Task = () => {
    return(
        <TaskStyle>            
               <Identifier />
               <DateAppointment/>
               <AdressForInspection/>            
        </TaskStyle>
    )
}