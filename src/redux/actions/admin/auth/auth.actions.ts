import { API_URL } from "@/constants"
import { AppDispatch } from "@/redux/store"
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const _loginAdmin = createAsyncThunk<
  any,
  { email: string; password: string },
  { dispatch: AppDispatch }
>("login/admin", async function (payload) {
  try {
    let { data } = await axios.post(`${API_URL}/admin/auth/login`, payload)
    return data
  } catch (error) {
    console.log(error)
    return {
      isError: true,
      msg: "Error ! try again",
    }
  }
})

export const _getCreatorByToken = createAsyncThunk<
  any,
  { token: string },
  { dispatch: AppDispatch }
>("get/creator", async function (payload) {
  try {
    let { data } = await axios.post(`${API_URL}/admin/auth/creator/`, payload)

    return data
  } catch (error) {
    console.log(error)
    return {
      isError: true,
      msg: "Error ! try again",
    }
  }
})
