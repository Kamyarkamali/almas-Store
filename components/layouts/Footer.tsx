import FooterComponents from "../module/FooterComponents";

function Footer() {
  return (
    <aside>
      <FooterComponents />
      <div className="border-t-[1px] gap-[15px] border-gray-300 flex flex-col items-center lg:flex-row lg:justify-between p-3">
        <p className="text-[14px] text-[#777777]">
          تمام حقوق برای الماس ویستا محفوظ است.
        </p>
        <p className="text-[14px] text-[#777777]">
          طراحی و اجرا توسط سامانه رایان وب نور
        </p>
      </div>
    </aside>
  );
}

export default Footer;
