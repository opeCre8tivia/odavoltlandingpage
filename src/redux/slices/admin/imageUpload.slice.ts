import { createSlice } from "@reduxjs/toolkit"

interface ImageUploadType {
  secure_url: string | null
}

const initialState: ImageUploadType = {
  secure_url: null,
}

const imageUploadSlice = createSlice({
  name: "upload_image",
  initialState: initialState,
  reducers: {
    setImageInfo: (state, action) => {
      state.secure_url = action.payload
    },
  },
})

export const { setImageInfo } = imageUploadSlice.actions
export default imageUploadSlice.reducer
