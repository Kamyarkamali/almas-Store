import FooterMessege from "@/components/element/FooterMessege";
import FooterComponents from "../module/FooterComponents";

function Footer() {
  return (
    <aside className="bg-[#F4F4F4] mt-[4rem] border-t-[1px]">
      <FooterComponents />
      <div className="border-t-[1px] mb-14 lg:mb-0 gap-[15px] border-gray-300 flex flex-col items-center lg:flex-row lg:justify-between p-3">
        <p className="text-[12px] md:text-[14px] text-[#777777]">
          تمام حقوق برای الماس ویستا محفوظ است.
        </p>
        <p className="text-[12px] md:text-[14px] text-[#777777]">
          طراحی و اجرا توسط سامانه رایان وب نور
        </p>
      </div>
      {/* پیام انتهایی فوتر */}
      <section>
        <FooterMessege />
      </section>
    </aside>
  );
}

export default Footer;
