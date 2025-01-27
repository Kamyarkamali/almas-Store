import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// برای ذخیره سازی موقت بلاگ‌ها
const initialState: any = {
  posts: [],
};

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    setPosts(state, action: PayloadAction<any>) {
      state.posts = action.payload.map((post: any) => ({
        ...post,
        trashed: post.trashed || false, // مطمئن شوید که `trashed` برای هر پست در نظر گرفته شده
      }));
    },
    addPost(state, action: PayloadAction<any>) {
      state.posts.push({ ...action.payload, trashed: false });
    },
    // آکشن برای انتقال پست به زباله دان
    moveToTrash(state, action: PayloadAction<number>) {
      const post = state.posts.find((p: any) => p.id === action.payload);
      if (post) {
        post.trashed = true;
      }
    },
    // آکشن برای بازیابی پست از زباله دان
    restoreFromTrash(state, action: PayloadAction<number>) {
      const post = state.posts.find((p: any) => p.id === action.payload);
      if (post) {
        post.trashed = false;
      }
    },
    // آکشن برای حذف دائم پست
    deletePostPermanently(state, action: PayloadAction<number>) {
      state.posts = state.posts.filter((p: any) => p.id !== action.payload);
    },
    // آکشن جدید برای تغییر وضعیت پست
    togglePostStatus(state, action: PayloadAction<number>) {
      const post = state.posts.find((p: any) => p.id === action.payload);
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
