import { DummyComponent } from "../pages/DummyComponent";
import { Profile } from "pages/settings/Profile";

export enum locations {
  MAIN = "/",
  SETTINGS = "/settings"
}

export interface RouterProps {
  path: locations;
  component: React.ComponentType;
  name: string;
  exact: boolean;
}
export const routes: RouterProps[] = [
  {
    path: locations.MAIN,
    component: DummyComponent,
    name: "Main",
    exact: true,
  },
  {
    path: locations.SETTINGS,
    component: Profile,
    name: "Settings",
    exact: true,
  },
];
