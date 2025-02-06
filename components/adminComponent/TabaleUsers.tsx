"use client";
import { UserTableProps } from "@/types/interFace";
import toast, { Toaster } from "react-hot-toast";
import usersTabale from "@/public/json/users.json";
import { useEffect, useState } from "react";
import Loader from "@/ui/Loader";
import { Altet } from "@/types/enums";
import Link from "next/link";

const TabaleUsers: React.FC<UserTableProps> = ({ onEdit, onDelete }) => {
  const [users, setUsers] = useState(usersTabale);
  const [loader, setLoader] = useState<boolean>(false);
  const [deletedShore, setDeletedShore] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<string | null>(null);
  const [editedUser, setEditedUser] = useState<any>(null);

  const handleEditClick = (user: any) => {
    setEditMode(user.id);
    setEditedUser({ ...user });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setEditedUser((prev: any) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSave = () => {
    setUsers(users.map((u) => (u.id === editedUser.id ? editedUser : u)));
    setEditMode(null);
    toast.success(Altet.SUCCESSEDITE);
  };

  const handleDelete = (user: any) => {
    setUsers(users.filter((u) => u.id !== user.id));
    toast.success(Altet.DELETEDUSER);
    setDeletedShore(false);
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
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border-b lg:text-[13px] text-[11px]">
                    نام
                  </th>
                  <th className="py-2 px-4 border-b lg:text-[13px] text-[11px]">
                    نام خانوادگی
                  </th>
                  <th className="py-2 px-4 border-b lg:text-[13px] text-[11px]">
                    شماره موبایل
                  </th>
                  <th className="py-2 px-4 border-b lg:text-[13px] text-[11px]">
                    نقش کاربر
                  </th>
                  <th className="py-2 px-4 border-b lg:text-[13px] text-[11px]">
                    عملیات
                  </th>
                </tr>
              </thead>
              <tbody>
                {users?.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="py-2 px-4 border-b lg:text-[13px] text-[11px]">
                      {editMode === user.id ? (
                        <input
                          type="text"
                          value={editedUser.fristname}
                          onChange={(e) => handleChange(e, "fristname")}
                          className="border p-1 text-sm w-full"
                        />
                      ) : (
                        user.fristname
                      )}
                    </td>
                    <td className="py-2 px-4 border-b lg:text-[13px] text-[11px]">
                      {editMode === user.id ? (
                        <input
                          type="text"
                          value={editedUser.lastname}
                          onChange={(e) => handleChange(e, "lastname")}
                          className="border p-1 text-sm w-full"
                        />
                      ) : (
                        user.lastname
                      )}
                    </td>
                    <td className="py-2 px-4 border-b lg:text-[13px] text-[11px]">
                      {editMode === user.id ? (
                        <input
                          type="text"
                          value={editedUser.phonenumber}
                          onChange={(e) => handleChange(e, "phonenumber")}
                          className="border p-1 text-sm w-full"
                        />
                      ) : (
                        user.phonenumber
                      )}
                    </td>
                    <td className="py-2 px-4 border-b lg:text-[13px] text-[11px]">
                      {editMode === user.id ? (
                        <input
                          type="text"
                          value={editedUser.role}
                          onChange={(e) => handleChange(e, "role")}
                          className="border p-1 text-sm w-full"
                        />
                      ) : (
                        <span
                          className={`px-2 py-1 text-sm rounded-full  ${
                            user.role === "admin"
                              ? "bg-red-100 text-red-800"
                              : user.role === "vip"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-green-100 text-green-800"
                          }`}
                        >
                          {user.role}
                        </span>
                      )}
                    </td>
                    <td className="py-2 lg:px-4 border-b flex gap-2">
                      {editMode === user.id ? (
                        <button
                          onClick={handleSave}
                          className="text-green-500 lg:text-[13px] text-[11px] border border-green-400 px-2 py-1 text-sm hover:text-green-700"
                        >
                          ذخیره
                        </button>
                      ) : (
                        <button
                          onClick={() => handleEditClick(user)}
                          className="text-blue-500 lg:text-[13px] text-[11px] border border-blue-400 px-2 py-1 text-sm hover:text-blue-700"
                        >
                          ویرایش
                        </button>
                      )}
                      <button
                        onClick={() => setDeletedShore(true)}
                        className="text-red-500 border lg:text-[13px] text-[11px] border-red-400 px-2 py-1 text-sm hover:text-red-700"
                      >
                        حذف
                      </button>
                      {deletedShore && (
                        <div className="fixed flex justify-center items-center w-full h-full bg-black/35 top-0 right-0">
                          <div className="w-[300px] h-[120px] z-30 bg-white shadow-md transition-all duration-200 ease-linear flex justify-center items-center">
                            <div className="flex flex-col items-center gap-1">
                              <p className="text-[13px] font-bold text-red-500">
                                آیا مطمئن هستید که میخواهید کاربر را حذف کنید؟
                              </p>
                              <button
                                onClick={() => handleDelete(user)}
                                className="text-[13px] hover:scale-105 rounded-sm duration-300 bg-blue-500 w-[100px] p-1 text-white"
                              >
                                بله
                              </button>
                              <button
                                onClick={() => setDeletedShore(false)}
                                className="text-[13px] hover:scale-105 rounded-sm duration-300 bg-red-500 w-[100px] p-1 text-white"
                              >
                                خیر
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="flex justify-center items-center h-[500px]">
              <div className="flex flex-col items-center gap-3">
                <p className="text-blue-600 text-xl font-bold">
                  کاربری وجود ندارد
                </p>
                <Link href={"/admin/users/add"}>
                  <button className="bg-blue-500 p-2 rounded-sm shadow-md text-white hover:scale-105 duration-200">
                    ساخت کاربر
                  </button>
                </Link>
                <Link href={"/"}>
                  <button className="bg-blue-500 p-2 rounded-sm shadow-md text-white hover:scale-105 duration-200">
                    رفتن به صفحه اصلی
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      ) : (
        <Loader />
      )}
      <Toaster />
    </>
  );
};

export default TabaleUsers;
