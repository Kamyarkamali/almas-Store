import React, { ReactElement } from "react";

//type childrens
export interface Chidlren {
  children: ReactElement;
}

//interface Icons
export interface IconsType {
  width?: string;
  height?: string;
  color?: string;
  strokeWidth?: string;
  fill?: string;
}

// interface topMenu

export interface topMenuInterFace {
  id: number;
  title: string;
  svg: ReactElement;
  paths: string;
}

// satete openMenu
export interface MenuLgProps {
  openLogin: boolean;
  setOpenLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

// type form login
export interface FormData {
  username: string;
  password: string;
  answer: string;
}
