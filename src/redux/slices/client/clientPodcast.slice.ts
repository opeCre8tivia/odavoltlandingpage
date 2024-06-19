import { _getPodcastsForUser } from "@/redux/actions/client/podcasts/podcasts.action"
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
  name: "clients/podcast_crud",
  initialState: initialState,
  reducers: {
    clearPodcastState: (state) => {
      state.isError = false
      state.isSuccess = false
      state.msg = null
    },
  },
  extraReducers: (builder) => {
    //list podcasts
    builder.addCase(_getPodcastsForUser.pending, (state) => {
      state.loading = true
    })
    builder.addCase(_getPodcastsForUser.fulfilled, (state, action) => {
      state.loading = false
      state.isError = action.payload.isError
      state.isSuccess = !action.payload.isError
      state.msg = action.payload.msg
      state.podcasts = action.payload.payload
    })
    builder.addCase(_getPodcastsForUser.rejected, (state, action: any) => {
      state.loading = false
      state.isError = action.payload.isError
      state.isSuccess = !action.payload.isError
      state.msg = action.payload.msg
    })
  },
})

export const { clearPodcastState } = adminPodcastSlice.actions
export default adminPodcastSlice.reducer
