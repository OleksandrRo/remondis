import React from "react";
import { Logo } from "./Logo";
import { Switcher } from "./Switcher";
import { ContainerHeader } from "./styles/ContainerHeader.styled";
import { UserProfile } from "./UserProfile";
import { HeaderActivePart } from "./styles/HeaderActivePart.style";


export const Header: React.FC = () => {
    return(
        <ContainerHeader>
            <Logo/>
            <HeaderActivePart>
                <Switcher/>
                <UserProfile/>
            </HeaderActivePart>            
        </ContainerHeader>
    )
}