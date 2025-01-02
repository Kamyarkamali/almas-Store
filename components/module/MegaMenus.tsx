import ArrowDown from "../icon/ArrowDown";

function MegaMenus() {
  return (
    <div className="w-full border-[1px] border-gray-300 h-[50px] mt-1">
      <div className="flex items-center h-full">
        <ul className="flex gap-6 items-center duration-300 transition-all ease-in mr-3 *:cursor-pointer *:text-[#333333] *:text-[13px]">
          <li className="hover:text-red-400">صفحه نخست</li>
          <div className="flex items-center">
            <li className="hover:text-red-400">قطعات لپ تاپ</li>
            <ArrowDown width="14px" height="14px" />
          </div>

          <div className="flex items-center">
            <li className="hover:text-red-400">قطعات کامپیوتر</li>
            <ArrowDown width="14px" height="14px" />
          </div>

          <div className="flex items-center">
            <li className="hover:text-red-400">لپ تاپ</li>
            <ArrowDown width="14px" height="14px" />
          </div>

          <li className="hover:text-red-400">ابزار تعمیرات</li>
          <div className="flex items-center">
            <li className="hover:text-red-400">لوازم جانبی</li>
            <ArrowDown width="14px" height="14px" />
          </div>
          <div className="flex items-center">
            <li className="hover:text-red-400">ماشین های اداری</li>
            <ArrowDown width="14px" height="14px" />
          </div>
          <div className="flex items-center">
            <li className="hover:text-red-400">کالای دست دوم</li>
            <ArrowDown width="14px" height="14px" />
          </div>
        </ul>
      </div>
    </div>
  );
}

export default MegaMenus;
