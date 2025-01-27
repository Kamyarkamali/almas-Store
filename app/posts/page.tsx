"use client";
import Link from "next/link";
import { useSelector } from "react-redux";
import moment from "moment-jalaali";

export default function BlogListPage() {
  const state = useSelector((state: any) => state.posts.posts);

  const persianDate = moment(state.createdAt).format("jYYYY/jMM/jDD");

  if (!state || state.length === 0) {
    return (
      <div className="p-4 md:p-6">
        <h1 className="text-center text-xl font-bold text-gray-500">
          هیچ مقاله‌ای یافت نشد.
        </h1>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {state.map((post: any) => (
        <div
          key={post.id}
          className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105"
        >
          <Link href={`/posts/${post.id}`}>
            {/* نمایش عکس به‌صورت پس‌زمینه با پوشش کامل */}
            {post.mainImage && post.mainImage.length > 0 && (
              <div className="relative w-full h-56 sm:h-64 md:h-80 lg:h-44 overflow-hidden">
                <img
                  src={post.mainImage}
                  alt={post.title}
                  className="w-full h-full object-cover absolute top-0 left-0 transition-transform duration-500 transform hover:scale-110"
                />
              </div>
            )}

            {/* نمایش عنوان و توضیحات */}
            <div className="p-6 bg-white relative z-10">
              <h2 className="text-2xl text-center font-semibold text-gray-800 mb-3 hover:text-blue-500 transition-colors duration-300">
                {post.title}
              </h2>
              <p className="text-gray-600 text-base mb-4 line-clamp-4 text-center">
                {post.content.length > 150
                  ? `${post.content.slice(0, 150)}...`
                  : post.content}
              </p>

              {/* تاریخ و دسته‌بندی */}
              <div className="flex flex-col gap-3 items-center space-x-4 text-gray-500 text-sm mt-4">
                {post.categories && (
                  <span className="bg-gray-200 px-3 py-1 rounded-full">
                    {post.categories}
                  </span>
                )}
                <div className="flex items-center gap-2">
                  تاریخ ایجاد:
                  <span>{persianDate}</span>
                </div>
              </div>

              {/* دکمه "بیشتر بخوانید" */}
              <div className="mt-4 flex justify-center">
                <button className="text-blue-500 hover:underline font-semibold transition duration-300">
                  بیشتر بخوانید
                </button>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
