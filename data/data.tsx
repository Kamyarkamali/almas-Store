import { Boxs, dataLabale } from "@/types/interFace";

export const Box: Boxs[] = [
  {
    id: 1,
    title: "7 روز گارانتی بازگشت وجه",
    image: "/images/box/1.webp",
    desc: "مدت زمان مرجوعی 7 روزه برای کالا های خریداری شده",
  },
  {
    id: 2,
    title: "ضمانت اصالت کالا",
    image: "/images/box/2.webp",
    desc: "تضمین اصالت و کیفیت کالا",
  },
  {
    id: 3,
    title: "پرداخت امن",
    image: "/images/box/3.webp",
    desc: "مکان پرداخت انلاین یا پرداخت حضوری درب منزل",
  },
  {
    id: 4,
    title: "تحویل اکسپرس",
    image: "/images/box/4.webp",
    desc: "حمل رایگان سفارشات بالای 10 میلیون تومان",
  },
];

export const dataLabales: dataLabale[] = [
  { id: 1, image: "/images/labaleLaptops/1.webp" },
  { id: 2, image: "/images/labaleLaptops/2.webp" },
  { id: 3, image: "/images/labaleLaptops/3.webp" },
  { id: 4, image: "/images/labaleLaptops/4.webp" },
  { id: 5, image: "/images/labaleLaptops/5.webp" },
  { id: 6, image: "/images/labaleLaptops/6.webp" },
  { id: 7, image: "/images/labaleLaptops/7.webp" },
  { id: 8, image: "/images/labaleLaptops/8.webp" },
  { id: 9, image: "/images/labaleLaptops/9.webp" },
  {
    id: 11,
    image: "/images/labaleLaptops/11.webp",
  },
  {
    id: 12,
    image: "/images/labaleLaptops/12.webp",
  },
  {
    id: 13,
    image: "/images/labaleLaptops/13.webp",
  },
  {
    id: 14,
    image: "/images/labaleLaptops/14.webp",
  },
  {
    id: 15,
    image: "/images/labaleLaptops/15.webp",
  },
  {
    id: 16,
    image: "/images/labaleLaptops/16.webp",
  },
  {
    id: 17,
    image: "/images/labaleLaptops/17.webp",
  },
  {
    id: 18,
    image: "/images/labaleLaptops/18.webp",
  },
  {
    id: 19,
    image: "/images/labaleLaptops/19.webp",
  },
];

export const dashboard = [
  {
    id: 1,
    title: "داشبورد",
    image: "/images/dasboard/dashboard.svg",
    href: "/dashboard/profile",
  },
  {
    id: 2,
    title: "اطلاعات حساب کاربری",
    image: "/images/dasboard/userDashboard.svg",
    href: "/dashboard/detailseuser",
  },
  {
    id: 3,
    title: "سفارش ها",
    image: "/images/dasboard/basket.svg",
    href: "/dashboard/orders",
  },
  {
    id: 4,
    title: "علاقه مندی ها",
    image: "/images/dasboard/like.svg",
    href: "/dashboard/faiverites",
  },
  {
    id: 5,
    title: "آدرس های من",
    image: "/images/dasboard/addres.svg",
    href: "/dashboard/myaddres",
  },
  {
    id: 6,
    title: "خروج",
    image: "/images/dasboard/logout.svg",
  },
];

export const steps = [
  { id: 1, label: "تایید سفارش", image: "/images/dasboard/orders/1.png" },
  { id: 2, label: "مرسوله در پست", image: "/images/dasboard/orders/2.png" },
  {
    id: 3,
    label: "رهسپاری مرسوله به سمت مقصد",
    image: "/images/dasboard/orders/3.png",
  },
  {
    id: 4,
    label: "دریافت مرسوله توسط مشتری",
    image: "/images/dasboard/orders/4.png",
  },
];

export const products = [
  {
    id: 1,
    name: "لپ تاپ HP مدل 100",
    warranty: "گارانتی 2 سال",
    oldPrice: 2000000,
    newPrice: 1000000,
    image: "/images/laptop/100.jpg",
  },
  {
    id: 2,
    name: "لپ تاپ Dell مدل XPS",
    warranty: "گارانتی 1 سال",
    oldPrice: 3000000,
    newPrice: 2500000,
    image: "/images/laptop/101.jpg",
  },
];
