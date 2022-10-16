import { useState } from "react";
import axios from "axios";
import {ProfileButton,ProfileDiv,ProfileForm,ProfileInput,ProfileLabel} from "./Settings.styled";



export const Profile :React.FunctionComponent=():any => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const updateProfile = () : void=> {
    axios.put("http:localhost5000/updateProfile").then((response) => {});
  };

  return <ProfileDiv>
   <h1> UPDATE PROFILE </h1>
    <ProfileForm>
   <ProfileLabel> UPDATE USERNAME :</ProfileLabel>
<ProfileInput
 type="text"
  placeholder="Username"
 onChange={(e) => {
setUserName(e.target.value);
}}
/>
<ProfileLabel>UPDATE EMAIL:</ProfileLabel>
<ProfileInput
type="email"
placeholder="email"
 onChange={(e) => {
setUserEmail(e.target.value);
}}
/>
<ProfileLabel>UPDATE PASSWORD :</ProfileLabel>
<ProfileInput
type="text"
 placeholder="Password"
onChange={(e) => {
setUserPassword(e.target.value);
}}
/>

 <ProfileButton
onClick={() => {
updateProfile();
}}
>
UPDATE PROFILE
</ProfileButton>
</ProfileForm>
</ProfileDiv>

  };