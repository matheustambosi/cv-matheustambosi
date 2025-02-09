import { JSX } from "react";

export interface ProjectType {
  name: string;
  description: string;
  image: string;
  url: string;
  languages: JSX.Element;
}
