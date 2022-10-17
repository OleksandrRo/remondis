import React from "react";
import userProfile from 'assets/images/userprofile.svg';
import { UserProfileStyle } from "./styles/UserProfileStyle.styled";


export const UserProfile: React.FC = () => {
    return(                             
          <UserProfileStyle src={userProfile} alt=""/>            
    )
}