import React, { useState } from "react";
import { IndentifierStyle } from "./style/IdentifierStyle";

export const Identifier: React.FC = () => {
    const [isClicked, setIsClicked] = useState(false);
    function toggle() {
        setIsClicked(prev => !isClicked)
        console.log(isClicked)
    }
    return (
        <>            
            <IndentifierStyle onClick={toggle} bg={isClicked ? "green" : "yellow"}> </IndentifierStyle>
        </>
    )
}

