import React, { ReactElement } from "react";

//type childrens
export interface Chidlren {
  children: React.ReactNode;
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

export interface BasketShop {
  openBasket: boolean;
  setOpenBasket: React.Dispatch<React.SetStateAction<boolean>>;
}

// type form login
export interface FormData {
  username: string;
  password: string;
  answer: string;
}

// تایپ اسلایدر هیرو
export interface Slide {
  paths: string;
  id: number;
  image: string;
  title: string;
  description: string;
}

export interface LoginFormData {
  usernameOrEmail: string;
  password: string;
  captcha: string;
}

export interface RegisterFormData {
  email: string;
  password: string;
  captcha: string;
}
