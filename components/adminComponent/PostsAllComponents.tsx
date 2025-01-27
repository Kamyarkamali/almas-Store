"use client";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// اینترفیس برای نوع پست‌ها
interface Post {
  id: number;
  title: string;
  category: string;
  tags: string[];
  content: string;
  images: string[];
  mainImage: string[];
  status: boolean;
  createdAt: string;
  trashed: boolean; // وضعیت زباله دان
}

function PostsAllComponents() {
  const dispatch = useDispatch();

  // داده‌ها از Redux
  const reduxPosts = useSelector((state: any) => state.posts.posts);

  // داده‌های محلی برای تست (در صورت نیاز)
  const localPosts: Post[] = [
    {
      id: 1,
      title: "اولین وبلاگ من",
      category: "محصولات الکترونیکی",
      tags: ["تکنولوژی", "محصولات جدید"],
      content:
        "این اولین وبلاگ من است که در مورد محصولات الکترونیکی نوشته شده.",
      images: ["image1.jpg", "image2.jpg"],
      mainImage: ["data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCg"],
      status: false,
      createdAt: "2025-01-26T12:00:00Z",
      trashed: false, // پست‌ها در ابتدا در زباله دان نیستند
    },
  ];

  // ترکیب داده‌های محلی و Redux
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    if (reduxPosts && reduxPosts.length > 0) {
      setPosts([...reduxPosts, ...localPosts]);
    } else {
      setPosts(localPosts);
    }
  }, [reduxPosts]);

  // تغییر وضعیت (true/false)
  const toggleStatus = (id: number) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, status: !post.status } : post
      )
    );
  };

  // انتقال پست به زباله دان
  const trashPost = (id: number) => {
    setPosts(
      posts.map((post) => (post.id === id ? { ...post, trashed: true } : post))
    );
  };

  // بازیابی پست از زباله دان
  const restorePost = (id: number) => {
    setPosts(
      posts.map((post) => (post.id === id ? { ...post, trashed: false } : post))
    );
  };

  // حذف کامل پست
  const deletePost = (id: number) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  // بررسی اینکه آیا در حال مشاهده صفحه زباله‌دان هستیم یا نه
  const isTrashPage = window.location.pathname.includes("trash");

  return (
    <div className="p-4 md:p-6">
      <h1 className="text-center text-2xl font-semibold mb-6">
        {isTrashPage ? "زباله‌دان" : "همه نوشته‌ها"}
      </h1>
      <table className="min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="py-3 px-4 text-left align-middle">عنوان</th>
            <th className="py-3 px-4 text-left align-middle">دسته‌بندی</th>
            <th className="py-3 px-4 text-left align-middle">تگ‌ها</th>
            <th className="py-3 px-4 text-center align-middle">وضعیت</th>
            <th className="py-3 px-4 text-center align-middle">تاریخ ایجاد</th>
            <th className="py-3 px-4 text-center align-middle">عملیات</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(
            (post) =>
              !isTrashPage &&
              !post.trashed && ( // نمایش پست‌های غیر زباله دانی در صفحه اصلی
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
                      onClick={() => toggleStatus(post.id)}
                    >
                      {post.status ? "نمایش" : "عدم نمایش"}
                    </button>
                  </td>
                  <td className="py-3 px-4 text-center">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </td>
                  <td className="py-3 px-4 text-center">
                    <button
                      className="py-2 px-4 text-sm md:text-base bg-yellow-500 hover:bg-yellow-700 text-white rounded-lg"
                      onClick={() => trashPost(post.id)}
                    >
                      انتقال به زباله دان
                    </button>
                  </td>
                </tr>
              )
          )}
          {/* نمایش پست‌های در زباله دان */}
          {posts.map(
            (post) =>
              isTrashPage &&
              post.trashed && ( // فقط پست‌های زباله‌دان در صفحه زباله‌دان
                <tr
                  key={post.id}
                  className="border-b bg-gray-100 text-gray-600"
                >
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
                    {post.status ? "نمایش" : "عدم نمایش"}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </td>
                  <td className="py-3 px-4 text-center">
                    <button
                      className="py-2 px-4 text-sm md:text-base bg-green-500 hover:bg-green-700 text-white rounded-lg"
                      onClick={() => restorePost(post.id)}
                    >
                      بازیابی
                    </button>
                    <button
                      className="py-2 px-4 text-sm md:text-base bg-red-500 hover:bg-red-700 text-white rounded-lg ml-2"
                      onClick={() => deletePost(post.id)}
                    >
                      حذف دائم
                    </button>
                  </td>
                </tr>
              )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default PostsAllComponents;
