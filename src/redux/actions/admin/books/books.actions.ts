import { API_URL } from "@/constants"
import { AppDispatch } from "@/redux/store"
import { BookTypeInput } from "@/types/global.types"
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"



export const _createBook = createAsyncThunk<
  any,
  BookTypeInput,
  { dispatch: AppDispatch }
>("book/create", async function (podcast) {
  try {
    const { data } = await axios.post(
      `${API_URL}/admin/book/upload`,
      podcast
    )
    return data
  } catch (error) {
    console.log(error)
    return {
      isError: true,
      msg: "Error! unable to Upload book",
    }
  }
})

export const _getBooks = createAsyncThunk<
  any,
  { id: number },
  { dispatch: AppDispatch }
>("books/get", async function ({ id }) {
  try {
    const { data } = await axios.post(`${API_URL}/admin/book`, { id: id })
    return data
  } catch (error) {
    console.log(error)
    return {
      isError: true,
      msg: "Error! unable to get books",
    }
  }
})
