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

export interface OpenModal {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface OpenBasket2 {
  openBasket: boolean;
  setOpenBasket: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface LoginForm {
  openLogin: boolean;
  setOpenLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface OpenBlur {
  openBlur: boolean;
  setOpenBlur: React.Dispatch<React.SetStateAction<boolean>>;
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
  id: string;
  image: string;
  nameProduct: string;
  price: number;
  category1: string;
  category?: string;
  category3?: string;
  category4?: string;
  slug: string;
  slug2?: string;
  stock: number;
  description: string;
  shortdescription: string;
  discount?: boolean;
  image2?: string | undefined;
  image3?: string | undefined;
  image4?: string | undefined;
}

export interface DetailseCategoryProps {
  product: Product;
  productLaptop?: Product[];
}

export interface Boxs {
  id: number;
  title: string;
  image: string;
  desc: string;
}

export interface Props {
  price: number;
  Inventory: number;
  nameProduct: string;
  category: string | undefined;
}

export interface Productslider {
  id: string;
  image: string;
  nameProduct: string;
  price: number;
  category1: string;
  category: string;
  slug: string;
  Inventory: number;
  description: string;
}

export interface ProductSlider {
  products: Productslider[];
}

export interface LaptoppartComponentProps {
  initialProducts?: Product[];
  totalProducts?: Product[];
  filteredLaptop?: Product[];
  filteredProducts?: Product[];
  state?: any;
}

export interface dataLabale {
  id: number;
  image: string;
  paths: string;
  liked: boolean;
  category: string;
}

export interface FilteredData {
  filteredProducts: any[];
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image?: string;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}

export interface totalPrice {
  totalPrice: number;
}

export interface FormInputs {
  firstName: string;
  lastName: string;
  displayName: string;
  email?: string;
  phoneNumber: string;
}

export interface SubmenuItem {
  title: string;
  path: string;
}

export interface MenuItem {
  title: string;
  icon: keyof typeof import("lucide-react");
  path: string;
  submenu: SubmenuItem[];
}

export interface Post {
  id: number;
  title: string;
  category: string;
  tags: string[];
  content: string;
  images: string[];
  status: boolean;
  createdAt: string;
  mainImage: string[];
  trashed: boolean;
}

interface User {
  id: string;
  fristname: string;
  lastname: string;
  phonenumber: string;
  role: string;
  avatar?: string;
}

export interface UserTableProps {
  users?: User[];
  onEdit?: (user: User) => void;
  onDelete?: (user: User) => void;
}
