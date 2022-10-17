import React from "react";
import { Header } from "pages/MainPage/Components/Header/Header";
import { Menu } from "pages/MainPage/Components/Menu/Menu";
import { ListOfTasks } from "pages/MainPage/Components/ListOfTasks/ListOfTasks";
import { ContainerMain } from "./ContainerMain.styled";

export const Main: React.FC = () => {
    return(
        <ContainerMain>            
            <Header/>
            <Menu/>
            <ListOfTasks/>            
        </ContainerMain>
    )
}