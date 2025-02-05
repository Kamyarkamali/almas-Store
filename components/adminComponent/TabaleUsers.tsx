"use client";
import { UserTableProps } from "@/types/interFace";

// دیتای فیک
import usersTabale from "@/public/json/users.json";
import { useEffect, useState } from "react";
import Loader from "@/ui/Loader";

const TabaleUsers: React.FC<UserTableProps> = ({ onEdit, onDelete }) => {
  const [users, setUsers] = useState(usersTabale);

  const [loader, setLoader] = useState<boolean>(false);

  const handleEdit = (user: any) => {
    console.log("ویرایش کاربر:", user);
    // منطق ویرایش کاربر
  };

  const handleDelete = (user: any) => {
    setUsers(users.filter((u) => u.id !== user.id));
    console.log("حذف کاربر:", user);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {loader ? (
        <div className="overflow-x-auto">
          {users.length > 0 ? (
            <table className="min-w-full  bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border-b lg:text-[13px] text-[10px]">
                    نام
                  </th>
                  <th className="py-2 px-4 border-b lg:text-[13px] text-[10px]">
                    نام خانوادگی
                  </th>
                  <th className="py-2 px-4 border-b lg:text-[13px] text-[10px]">
                    شماره موبایل
                  </th>
                  <th className="py-2 px-4 border-b lg:text-[13px] text-[10px]">
                    نقش کاربر
                  </th>
                  <th className="py-2 px-4 border-b lg:text-[13px] text-[10px]">
                    عملیات
                  </th>
                </tr>
              </thead>
              <tbody>
                {users?.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="py-2 px-4 border-b lg:text-[13px] text-[10px]">
                      {user.fristname}
                    </td>
                    <td className="py-2 px-4 border-b lg:text-[13px] text-[10px]">
                      {user.lastname}
                    </td>
                    <td className="py-2 px-4 border-b lg:text-[13px] text-[10px]">
                      {user.phonenumber}
                    </td>
                    <td className="py-2 px-4 border-b lg:text-[13px] text-[10px]">
                      <span
                        className={`px-2 lg:text-[13px] text-[10px] py-1 text-sm rounded-full ${
                          user?.role === "admin"
                            ? "bg-red-100 text-red-800 lg:text-[13px] text-[10px]"
                            : user.role === "vip"
                            ? "bg-blue-100 text-blue-800 lg:text-[13px] text-[10px]"
                            : "bg-green-100 text-green-800 lg:text-[13px] text-[10px]"
                        }`}
                      >
                        {user?.role}
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b flex gap-2 lg:text-[13px] text-[10px]">
                      <button
                        onClick={() => onEdit(user)}
                        className="text-blue-500 lg:border-[1px] lg:text-[13px] text-[10px] lg:p-1 border-blue-400 border-dashed hover:text-blue-700 mr-2"
                      >
                        ویرایش
                      </button>
                      <button
                        onClick={() => handleDelete(user)}
                        className="text-red-500 lg:border-[1px] lg:text-[13px] text-[10px] lg:p-1 border-red-400 border-dashed hover:text-red-700"
                      >
                        حذف
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="flex justify-center items-center h-full">
              <h1>sss</h1>
            </div>
          )}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default TabaleUsers;
