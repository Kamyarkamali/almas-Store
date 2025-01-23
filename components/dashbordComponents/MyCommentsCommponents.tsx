"use client";
import React, { useState } from "react";
import comment from "@/public/json/Comments.json";

function MyCommentsCommponents() {
  const [comments, setComments] = useState(comment);
  const [editing, setEditing] = useState(null);
  const [newComment, setNewComment] = useState("");

  const handleEdit = (id: any, currentComment: any) => {
    setEditing(id);
    setNewComment(currentComment);
  };

  const handleSave = (id: any) => {
    const updatedComments = comments.map((comment) =>
      comment.id === id ? { ...comment, comment: newComment } : comment
    );
    setComments(updatedComments);
    setEditing(null);
    // ارسال به API اینجا انجام میشه
    console.log("API request for edit: ", id, newComment);
  };

  const handleDelete = (id: number) => {
    const updatedComments = comments.filter((comment) => comment.id !== id);
    setComments(updatedComments);
    // ارسال به API برای حذف اینجا انجام میشه
    console.log("API request for delete: ", id);
  };

  return (
    <div className="w-full p-6">
      {/* استفاده از overflow-x-auto برای جداول بزرگ */}
      <div className="overflow-x-auto hidden lg:block">
        <table className="w-full table-auto border-collapse border border-gray-300 rounded-lg shadow-lg">
          <thead>
            <tr className="bg-[#FDD64E] text-white text-center">
              <th className="py-3 px-6">محصول</th>
              <th className="py-3 px-6">تاریخ</th>
              <th className="py-3 px-6">نظر</th>
              <th className="py-3 px-6">وضعیت</th>
              <th className="py-3 px-6">عملیات</th>
            </tr>
          </thead>
          <tbody>
            {comment.map((comment) => (
              <tr key={comment.id} className="border-b border-gray-200">
                <td className="py-3 px-6 text-center">{comment.name}</td>
                <td className="py-3 px-6 text-center">{comment.date}</td>
                <td className="py-3 px-6 text-center">
                  {editing === comment.id ? (
                    <input
                      type="text"
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      className="border px-2 py-1 rounded-md w-full"
                    />
                  ) : (
                    comment.comment
                  )}
                </td>
                <td
                  className={`py-3 font-bold px-6 text-center ${
                    comment.status === "در انتظار تایید"
                      ? "text-blue-500"
                      : "text-green-600"
                  }`}
                >
                  {comment.status}
                </td>
                <td className="py-3 px-6 text-center">
                  {editing === comment.id ? (
                    <div className="flex  gap-3">
                      <button
                        onClick={() => handleSave(comment.id)}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                      >
                        ذخیره
                      </button>
                      <button
                        onClick={() => setEditing(null)}
                        className="bg-gray-400 text-white px-4 py-2 rounded-md"
                      >
                        لغو
                      </button>
                    </div>
                  ) : (
                    <div className="flex gap-3 items-center">
                      <button
                        onClick={() => handleEdit(comment.id, comment.comment)}
                        className="bg-yellow-500 text-white px-4 py-2 rounded-md mr-2"
                      >
                        ویرایش
                      </button>
                      <button
                        onClick={() => handleDelete(comment.id)}
                        className="bg-red-500 text-white px-4 py-2 rounded-md"
                      >
                        حذف
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* حالت موبایل: نمایش هر ردیف به صورت کارت */}
      <div className="lg:hidden mt-6">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="bg-white p-4 mb-4 border border-gray-300 rounded-lg shadow-lg"
          >
            <div className="text-sm">
              <strong>محصول:</strong> {comment.name}
            </div>
            <div className="text-sm">
              <strong>تاریخ:</strong> {comment.date}
            </div>
            <div className="text-sm">
              <strong>نظر:</strong>{" "}
              {editing === comment.id ? (
                <input
                  type="text"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="border px-2 py-1 rounded-md w-full mt-2"
                />
              ) : (
                comment.comment
              )}
            </div>
            <div className="text-sm">
              <strong>وضعیت:</strong> {comment.status}
            </div>
            <div className="mt-4 flex justify-between">
              {editing === comment.id ? (
                <>
                  <button
                    onClick={() => handleSave(comment.id)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                  >
                    ذخیره
                  </button>
                  <button
                    onClick={() => setEditing(null)}
                    className="bg-gray-400 text-white px-4 py-2 rounded-md"
                  >
                    لغو
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => handleEdit(comment.id, comment.comment)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-md"
                  >
                    ویرایش
                  </button>
                  <button
                    onClick={() => handleDelete(comment.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md"
                  >
                    حذف
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyCommentsCommponents;
