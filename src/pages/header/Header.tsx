import { useState } from "react";
import { HeaderStyled, ContainerNotificationAndSetting } from "pages/header/Header.styled";
import { LogoHeader } from "pages/header/components/Logo";
import { HeaderNotificationButton } from "pages/header/components/HeaderNotificationButton";
import { UserSettingIcon } from "pages/header/components/UserSettingIcon";


export const Header = () => {

    const [isVisible, setIsVisible] = useState(false);
    


    // const openNotification = () => {

    // setIsVisible(!isVisible);
    
//   };

//   const closeNotification = (e) => {
    
    // if (e.pageY < window.innerWidth - 500)
    //  setIsVisible(false)
    
//   }

    return <HeaderStyled>
        <LogoHeader />
        <ContainerNotificationAndSetting>
            <HeaderNotificationButton />
            <UserSettingIcon />
        </ContainerNotificationAndSetting>
    </HeaderStyled>
}