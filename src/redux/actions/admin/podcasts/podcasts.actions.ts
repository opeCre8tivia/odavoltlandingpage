import { API_URL } from "@/constants"
import { AppDispatch } from "@/redux/store"
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

type PodcastInput = {
  title: string
  caption: string
  description: string
  thumbnail_uri: string
  podcast_uri: string
  creatorId: number
}

export const _createPodcast = createAsyncThunk<
  any,
  PodcastInput,
  { dispatch: AppDispatch }
>("podcast/create", async function (podcast) {
  try {
    const { data } = await axios.post(
      `${API_URL}/admin/podcast/upload`,
      podcast
    )
    return data
  } catch (error) {
    console.log(error)
    return {
      isError: true,
      msg: "Error! unable to Upload Podcast",
    }
  }
})

export const _getPodcasts = createAsyncThunk<
  any,
  { id: number },
  { dispatch: AppDispatch }
>("podcast/get", async function ({ id }) {
  try {
    const { data } = await axios.post(`${API_URL}/admin/podcast`, { id: id })
    return data
  } catch (error) {
    console.log(error)
    return {
      isError: true,
      msg: "Error! unable to get Podcasts",
    }
  }
})
