import { HeaderStyled } from "pages/header/Header.styled";
import { LogoHeader } from "pages/header/components/Logo";
import { HeaderStatusButton } from "pages/header/components/HeaderStatusButton";
import { UserSettingIcon } from "pages/header/components/UserSettingIcon";


export const Header = () => {
    return <HeaderStyled>
        <LogoHeader />
        <HeaderStatusButton />
        <UserSettingIcon />
    </HeaderStyled>
}