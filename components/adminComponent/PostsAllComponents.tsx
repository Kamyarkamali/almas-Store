"use client";
import {
  togglePostStatus,
  moveToTrash,
  restoreFromTrash,
  deletePostPermanently,
} from "@/featcher/blogsSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function PostsAllComponents() {
  const [isTrashPage, setIsTrashPage] = useState(false); // حالت برای تعیین صفحه

  const state = useSelector((state: any) => state.posts.posts);

  const dispatch = useDispatch();

  const moveTrashDispatch = (id: number) => dispatch(moveToTrash(id));

  const trashResete = (id: number) => dispatch(restoreFromTrash(id));

  const deletePostPermanentlyDispatch = (id: number) =>
    dispatch(deletePostPermanently(id));

  const togglePostStatusDispatch = (id: number) =>
    dispatch(togglePostStatus(id));

  console.log(state);

  // توابع برای تغییر حالت
  const showTrashPage = () => setIsTrashPage(true);
  const showMainPage = () => setIsTrashPage(false);

  const hasPosts = state.some(
    (post: any) =>
      (!isTrashPage && !post.trashed) || (isTrashPage && post.trashed)
  );

  return (
    <div className="p-4 md:p-6">
      <h1 className="text-center text-2xl font-semibold mb-6">مدیریت پست‌ها</h1>
      <div className="flex justify-end mb-4 space-x-2">
        <button
          className={`py-2 px-4 ${
            !isTrashPage ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={showMainPage}
        >
          نمایش پست‌های اصلی
        </button>
        <button
          className={`py-2 px-4 ${
            isTrashPage ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={showTrashPage}
        >
          نمایش زباله‌دان
        </button>
      </div>

      {/* جدول برای دسکتاپ */}
      <div className="hidden md:block">
        {hasPosts ? (
          <table className="min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="py-3 px-4 text-left align-middle">عنوان</th>
                <th className="py-3 px-4 text-left align-middle">دسته‌بندی</th>
                <th className="py-3 px-4 text-left align-middle">تگ‌ها</th>
                <th className="py-3 px-4 text-center align-middle">وضعیت</th>
                <th className="py-3 px-4 text-center align-middle">
                  تاریخ ایجاد
                </th>
                <th className="py-3 px-4 text-center align-middle">عملیات</th>
              </tr>
            </thead>
            <tbody>
              {state.map((post: any) =>
                (!isTrashPage && !post.trashed) || // نمایش پست‌های غیر زباله‌دان
                (isTrashPage && post.trashed) ? ( // نمایش پست‌های زباله‌دان
                  <tr key={post.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 flex items-center">
                      {post.mainImage.length > 0 && (
                        <img
                          src={post.mainImage[0]}
                          alt={post.title}
                          className="w-12 h-12 object-cover mr-4 rounded"
                        />
                      )}
                      {post.title}
                    </td>
                    <td className="py-3 px-4">{post.category}</td>
                    <td className="py-3 px-4">{post.tags.join(", ")}</td>
                    <td className="py-3 px-4 text-center">
                      <button
                        className={`py-2 px-4 text-sm md:text-base font-semibold rounded-lg text-white ${
                          post.status
                            ? "bg-green-500 hover:bg-green-700"
                            : "bg-red-500 hover:bg-red-700"
                        }`}
                        onClick={() => togglePostStatusDispatch(post.id)}
                      >
                        {post.status ? "نمایش" : "عدم نمایش"}
                      </button>
                    </td>
                    <td className="py-3 px-4 text-center">
                      {new Date(post.createdAt).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-4 text-center space-x-2">
                      {isTrashPage ? (
                        <>
                          <button
                            className="py-2 px-4 text-sm md:text-base bg-green-500 hover:bg-green-700 text-white rounded-lg"
                            onClick={() => trashResete(post.id)}
                          >
                            بازیابی
                          </button>
                          <button
                            className="py-2 px-4 text-sm md:text-base bg-red-500 hover:bg-red-700 text-white rounded-lg ml-2"
                            onClick={() =>
                              deletePostPermanentlyDispatch(post.id)
                            }
                          >
                            حذف دائم
                          </button>
                        </>
                      ) : (
                        <button
                          className="py-2 px-4 text-sm md:text-base bg-yellow-500 hover:bg-yellow-700 text-white rounded-lg"
                          onClick={() => moveTrashDispatch(post.id)}
                        >
                          انتقال به زباله‌دان
                        </button>
                      )}
                    </td>
                  </tr>
                ) : null
              )}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-gray-500">مقداری وجود ندارد</p>
        )}
      </div>

      {/* کارت‌ها برای موبایل */}
      <div className="md:hidden space-y-4">
        {hasPosts ? (
          state.map((post: any) =>
            (!isTrashPage && !post.trashed) || // نمایش پست‌های غیر زباله‌دان
            (isTrashPage && post.trashed) ? ( // نمایش پست‌های زباله‌دان
              <div
                key={post.id}
                className="border-b hover:bg-gray-50 p-4 md:p-6"
              >
                <div className="flex items-center space-x-4">
                  {post.mainImage.length > 0 && (
                    <img
                      src={post.mainImage[0]}
                      alt={post.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                  )}
                  <div>
                    <h3 className="font-semibold text-lg">{post.title}</h3>
                    <p className="text-sm text-gray-600">{post.category}</p>
                    <p className="text-sm text-gray-600">
                      {post.tags.join(", ")}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex justify-between">
                  <div className="text-center">
                    <button
                      className={`py-2 px-4 text-sm md:text-base font-semibold rounded-lg text-white ${
                        post.status
                          ? "bg-green-500 hover:bg-green-700"
                          : "bg-red-500 hover:bg-red-700"
                      }`}
                      onClick={() => togglePostStatusDispatch(post.id)}
                    >
                      {post.status ? "نمایش" : "عدم نمایش"}
                    </button>
                  </div>
                  <div className="text-center">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </div>
                  <div className="space-x-2">
                    {isTrashPage ? (
                      <div>
                        <button
                          className="py-2 px-4 text-sm md:text-base bg-green-500 hover:bg-green-700 text-white rounded-lg"
                          onClick={() => trashResete(post.id)}
                        >
                          بازیابی
                        </button>
                        <button
                          className="py-2 px-4 text-sm md:text-base bg-red-500 hover:bg-red-700 text-white rounded-lg"
                          onClick={() => deletePostPermanentlyDispatch(post.id)}
                        >
                          حذف دائم
                        </button>
                      </div>
                    ) : (
                      <button
                        className="py-2 px-4 text-sm md:text-base bg-yellow-500 hover:bg-yellow-700 text-white rounded-lg"
                        onClick={() => moveTrashDispatch(post.id)}
                      >
                        انتقال به زباله‌دان
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ) : null
          )
        ) : (
          <p className="text-center text-red-500 ">مقداری وجود ندارد</p>
        )}
      </div>
    </div>
  );
}

export default PostsAllComponents;
