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
  className?: string;
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

export interface Opens {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
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

export interface SectionData1 {
  id: number;
  image: string;
  paths: string;
}

export interface Product {
  id: number;
  image: string;
  nameProduct: string;
  price: number;
  category1: string;
  category: string;
  slug: string;
  Inventory: number;
  description: string;
  image2?: string;
  image3?: string;
  image4?: string;
}
