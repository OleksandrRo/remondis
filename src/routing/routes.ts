import { DummyComponent } from "../pages/DummyComponent";

export enum locations {
  MAIN = "/",
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
];
