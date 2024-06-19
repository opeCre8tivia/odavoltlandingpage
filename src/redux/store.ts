import { configureStore } from "@reduxjs/toolkit"
// ...
import uploadAudioSlice from "./slices/admin/uploadAudio.slice"
import adminloginSlice from "./slices/admin/adminlogin.slice"
import imageUploadSlice from "./slices/admin/imageUpload.slice"
import adminPodcastSlice from "./slices/admin/adminPodcastSlice"
import   adminBookSlice from './slices/admin/book.slice'

export const store = configureStore({
  reducer: {
    uploadAudioSlice,
    adminloginSlice,
    imageUploadSlice,
    adminPodcastSlice,
    adminBookSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store it'self
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
