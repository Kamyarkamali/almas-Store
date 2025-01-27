"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  moveToTrash,
  restoreFromTrash,
  deletePostPermanently,
} from "@/featcher/blogsSlice";

function TrashPage() {
  const dispatch = useDispatch();

  // دریافت پست‌های زباله‌دان از ریداکس با اضافه کردن مقدار پیش‌فرض برای پست‌ها
  //   const posts = useSelector((state: any) =>
  //     (state.blogs?.posts || []).filter((post: any) => post.trashed)
  //   );

  const posts = useSelector((state: any) =>
    state.posts.posts.filter((post: any) => post.trashed)
  );

  console.log(posts);

  // بازیابی پست از زباله‌دان
  const restorePost = (id: number) => {
    dispatch(restoreFromTrash(id));
  };

  // حذف دائم پست
  const deletePost = (id: number) => {
    dispatch(deletePostPermanently(id));
  };

  return (
    <div className="p-4 md:p-6">
      <h1 className="text-center text-2xl font-semibold mb-6">زباله دان</h1>
      <table className="min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="py-3 px-4 text-left align-middle">عنوان</th>
            <th className="py-3 px-4 text-left align-middle">دسته‌بندی</th>
            <th className="py-3 px-4 text-center align-middle">تاریخ ایجاد</th>
            <th className="py-3 px-4 text-center align-middle">عملیات</th>
          </tr>
        </thead>
        <tbody>
          {posts.length === 0 ? (
            <tr>
              <td colSpan={4} className="py-3 px-4 text-center">
                هیچ پستی در زباله‌دان وجود ندارد
              </td>
            </tr>
          ) : (
            posts.map((post: any) => (
              <tr key={post.id} className="border-b bg-gray-100 text-gray-600">
                <td className="py-3 px-4">{post.title}</td>
                <td className="py-3 px-4">{post.category}</td>
                <td className="py-3 px-4 text-center">
                  {new Date(post.createdAt).toLocaleDateString()}
                </td>
                <td className="py-3 px-4 text-center">
                  <button
                    className="py-2 px-4 text-sm bg-green-500 hover:bg-green-700 text-white rounded-lg"
                    onClick={() => restorePost(post.id)}
                  >
                    بازیابی
                  </button>
                  <button
                    className="py-2 px-4 text-sm bg-red-500 hover:bg-red-700 text-white rounded-lg ml-2"
                    onClick={() => deletePost(post.id)}
                  >
                    حذف دائم
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TrashPage;
