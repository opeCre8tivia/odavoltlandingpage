import {
  _createPodcast,
  _getPodcasts,
} from "@/redux/actions/admin/podcasts/podcasts.actions"
import { PodcastType } from "@/types/global.types"
import { createSlice } from "@reduxjs/toolkit"

interface InitialState {
  loading: boolean
  isError: boolean
  isSuccess: boolean
  msg: string | null
  podcasts: PodcastType[]
}

const initialState: InitialState = {
  loading: false,
  isError: false,
  isSuccess: false,
  msg: null,
  podcasts: [],
}

const adminPodcastSlice = createSlice({
  name: "admin/podcast_crud",
  initialState: initialState,
  reducers: {
    clearPodcastState: (state) => {
      state.isError = false
      state.isSuccess = false
      state.msg = null
    },
  },
  extraReducers: (builder) => {
    //creating a podcast
    builder.addCase(_createPodcast.pending, (state) => {
      state.loading = true
    })
    builder.addCase(_createPodcast.fulfilled, (state, action) => {
      state.loading = false
      state.isError = action.payload.isError
      state.isSuccess = !action.payload.isError
      state.msg = action.payload.msg
    })
    builder.addCase(_createPodcast.rejected, (state, action: any) => {
      state.loading = false
      state.isError = action.payload.isError
      state.isSuccess = !action.payload.isError
      state.msg = action.payload.msg
    })

    //list podcasts
    builder.addCase(_getPodcasts.pending, (state) => {
      state.loading = true
    })
    builder.addCase(_getPodcasts.fulfilled, (state, action) => {
      state.loading = false
      state.isError = action.payload.isError
      state.isSuccess = !action.payload.isError
      state.msg = action.payload.msg
      state.podcasts = action.payload.payload
    })
    builder.addCase(_getPodcasts.rejected, (state, action: any) => {
      state.loading = false
      state.isError = action.payload.isError
      state.isSuccess = !action.payload.isError
      state.msg = action.payload.msg
    })
  },
})

export const { clearPodcastState } = adminPodcastSlice.actions
export default adminPodcastSlice.reducer
