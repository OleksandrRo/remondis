import { GlobalStyle } from "App.styled";
import { Routing } from "./routing/Routing";

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Routing />
    </>
  );
};
