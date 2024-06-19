import { createSlice } from "@reduxjs/toolkit"

interface AudioUploadType {
  podcast_uri: string | null
}

const initialState: AudioUploadType = {
  podcast_uri: null,
}

const uploadAudioSlice = createSlice({
  name: "upload_audio",
  initialState: initialState,
  reducers: {
    setAudioInfo: (state, action) => {
      state.podcast_uri = action.payload
    },
  },
})

export const { setAudioInfo } = uploadAudioSlice.actions
export default uploadAudioSlice.reducer
