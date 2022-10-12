import React from "react";
import { DummyComponent } from "../pages/DummyComponent";

export const locations = {
  main: "/",
};

export interface RouterProps {
  id: number;
  path: string;
  component: React.FC | React.ReactNode;
  name: string;
}
export const routes: RouterProps[] = [
  {
    id: 1,
    path: locations.main,
    component: DummyComponent,
    name: "Main",
  },
];
