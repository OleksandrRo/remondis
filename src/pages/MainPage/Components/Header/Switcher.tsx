import React, {useState} from "react";
import { ButtonStyle } from "./styles/Switcher.styled";

export const Switcher: React.FC = () => {
    const [isOn, setIsOn] = useState(false);
    function toggle (){
        setIsOn(prev => !isOn)                
    }
  return (
    <div>
        <ButtonStyle color={isOn ? "green" : "red"} onClick={toggle}>{isOn? "On" : "Off" }</ButtonStyle>        
    </div>
  )
};
