import data from "@/public/json/endproduct.json";

export const filterProducts = (
  slug: string,
  mainCategory: string,
  subCategory: string
) => {
  let filteredProducts: any[] = [];

  if (slug === "/product-category/laptoppart") {
    filteredProducts = data;
  } else if (
    mainCategory === "printer" &&
    subCategory === "consuming-materials"
  ) {
    filteredProducts = data.filter(
      (item: any) =>
        item.category1 === "printer" && item.category3 === "consuming-materials"
    );
  } else if (subCategory === "ssd" || subCategory === "hdd") {
    filteredProducts = data.filter(
      (item: any) =>
        item.category3 === "laptophard" && item.category4 === subCategory
    );
  } else {
    filteredProducts = data.filter((item) => item.slug === slug);
  }

  return filteredProducts;
};
