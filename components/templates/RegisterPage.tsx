import React from "react";

function RegisterPage() {
  return (
    <div className="w-full h-[500px] bg-white flex justify-center gap-3">
      <div className="flex justify-around w-full">
        <form>
          <h2 className="text-[22px] text-[#242424] font-bold">ورود</h2>
          <div className="flex flex-col">
            <label className="after:content-['*'] text-[14px] text-[#242424]">
              نام کاربری یا آدرس ایمیل
            </label>
            <input
              type="text"
              className="w-[461px] h-[42px] mt-2 p-2 border-[2px] border-[#E5E5E5] rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
        </form>

        <div className="border-l-2"></div>

        <form>2</form>
      </div>
    </div>
  );
}

export default RegisterPage;
