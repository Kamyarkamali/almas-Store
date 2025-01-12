//برای تغیر فرمت نام محصول به slug
function toSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/[\s_]+/g, "-")
    .replace(/[^\w-]+/g, "");
}

export default toSlug;
