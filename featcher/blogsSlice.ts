import { Post } from "@/types/interFace";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// تعریف تایپ برای پست‌ها

// تعریف حالت اولیه
interface BlogsState {
  posts: Post[];
}

const initialState: BlogsState = {
  posts: [],
};

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    // تنظیم پست‌ها
    setPosts(state, action: PayloadAction<Post[]>) {
      state.posts = action.payload.map((post) => ({
        ...post,
        trashed: post.trashed || false, // مقدار پیش‌فرض
        status: post.status || false, // مقدار پیش‌فرض
      }));
    },
    // افزودن پست جدید
    addPost(state, action: PayloadAction<Omit<Post, "trashed" | "status">>) {
      state.posts.push({
        ...action.payload,
        trashed: false,
        status: false,
      });
    },
    // انتقال پست به زباله‌دان
    moveToTrash(state, action: PayloadAction<number>) {
      const post = state.posts.find((p) => p.id === action.payload);
      if (post) {
        post.trashed = true;
      }
    },
    // بازیابی پست از زباله‌دان
    restoreFromTrash(state, action: PayloadAction<number>) {
      const post = state.posts.find((p) => p.id === action.payload);
      if (post) {
        post.trashed = false;
      }
    },
    // حذف دائمی پست
    deletePostPermanently(state, action: PayloadAction<number>) {
      state.posts = state.posts.filter((p) => p.id !== action.payload);
    },
    // تغییر وضعیت پست
    togglePostStatus(state, action: PayloadAction<number>) {
      const post = state.posts.find((p) => p.id === action.payload);
      if (post) {
        post.status = !post.status;
      }
    },
  },
});

export const {
  setPosts,
  addPost,
  moveToTrash,
  restoreFromTrash,
  deletePostPermanently,
  togglePostStatus,
} = blogsSlice.actions;

export default blogsSlice.reducer;
