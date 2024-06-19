import { API_URL } from "@/constants"
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const _getPodcastsForUser = createAsyncThunk(
  "client_podcast/get",
  async function () {
    try {
      const { data } = await axios.get(`${API_URL}/users/podcast`)
      return data
    } catch (error) {
      console.log(error)
      return {
        isError: true,
        msg: "Error! unable to get Podcasts",
      }
    }
  }
)
