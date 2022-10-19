import React from "react";
import listOfTasksIcon from 'assets/images/listoftasks.svg';
import { ListOfTasksIconStyle } from "./styles/ListOfTasksIconStyle";


export const ListOfTasksIcon: React.FC = () => {
    return( 
                            
          <ListOfTasksIconStyle src={listOfTasksIcon} alt=""/>   
    )
}