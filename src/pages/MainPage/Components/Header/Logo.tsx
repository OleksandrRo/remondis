import React from "react";
import logo from 'assets/images/logo.png';
import { LogoStyle } from "./styles/LogoStyle.styled";


export const Logo: React.FC = () => {
    return( 
                            
          <LogoStyle src={logo} alt=""/>   
    )
}