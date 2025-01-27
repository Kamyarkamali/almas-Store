"use client"; // این خط را اضافه کنید تا کامپوننت به صورت کلاینتی شناسایی شود

import { useSelector } from "react-redux";
import { useParams } from "next/navigation";

const BlogDetails = () => {
  const { id } = useParams(); // دریافت شناسه مقاله از پارامتر URL

  if (!id) {
    return (
      <div className="text-center text-xl font-semibold">
        در حال بارگذاری...
      </div>
    );
  }

  const post = useSelector((state: any) =>
    state.posts.posts.find((p: any) => p.id === Number(id))
  );

  if (!post) {
    return (
      <div className="text-center text-xl font-semibold">
        مقاله مورد نظر یافت نشد.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-12 bg-white rounded-lg shadow-lg space-y-8">
      {/* نمایش عنوان مقاله */}
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
        {post.title}
      </h1>

      {/* نمایش تصویر اصلی (اگر وجود دارد) */}
      {post.mainImage?.length > 0 && (
        <div className="relative w-full h-72 sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden mb-6">
          <img
            src={post.mainImage}
            alt={post.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}

      {/* نمایش محتوای مقاله */}
      <div className="text-lg text-gray-700 leading-relaxed space-y-6">
        <p>{post.content}</p>

        {/* نمایش تصاویر اضافی */}
        {post.additionalImages?.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mt-8">
              تصاویر اضافی
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
              {post.additionalImages.map((image: any, index: number) => (
                <img
                  key={index}
                  src={image.url || image}
                  alt={`تصویر اضافی ${index + 1}`}
                  className="w-full h-auto rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                />
              ))}
            </div>
          </div>
        )}

        {/* نمایش سرعنوان‌ها */}
        {post.headings?.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mt-8">
              سرعنوان‌ها
            </h2>
            <div className="space-y-6 mt-4">
              {post.headings.map((heading: any, index: number) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {heading.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {heading.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogDetails;
