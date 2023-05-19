import { FunctionComponent, ReactElement } from "react";

export interface centerRouteDataType {
  id: string;
  name: string;
  path: string;
  element: ReactElement;
  children?: any[];
}

export interface routerConfigType {
  [props: string]: {
    meta: {
      title: string;
    };
    component: FunctionComponent;
    [props: string]: any;
  };
}
