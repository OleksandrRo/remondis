import React from "react";
import calendarIcon from 'assets/images/calendar.svg';
import { CalendarIconStyle } from "./styles/CalendarIconStyle.styled";


export const CalendarIcon: React.FC = () => {
    return( 
                            
          <CalendarIconStyle src={calendarIcon} alt=""/>   
    )
}