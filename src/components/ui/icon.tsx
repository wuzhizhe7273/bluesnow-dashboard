import * as icons from "lucide-react";
import { createElement } from "react";

export const Icon=(props:{icon:string})=>{
    const {icon}=props;
    const allIcons:{[key:string]:any}=icons;
    return createElement(allIcons[icon]);
}