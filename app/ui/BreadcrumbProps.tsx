import Link from "next/link";

interface BreadcrumbProps {
  categories: {
    category1?: string;
    category3?: string;
    category4?: string;
    category?: string;
  }[];
}

const Breadcrumbs: React.FC<BreadcrumbProps> = ({ categories }) => {
  return (
    <div className="flex items-center gap-2 lg:*:text-[14px] *:text-[12px] *:text-[#777777]">
      <Link href={"/"}>خانه</Link>
      <p>/</p>
      {categories[0]?.category1 && (
        <Link href={"/"}>{categories[0].category1}</Link>
      )}
      {categories[2]?.category4 && (
        <>
          <p>/</p>
          <Link href={"/"}>{categories[2].category4}</Link>
        </>
      )}
      {categories[1]?.category && (
        <>
          <p>/</p>
          <Link href={"/"}>{categories[1].category}</Link>
        </>
      )}
    </div>
  );
};

export default Breadcrumbs;
