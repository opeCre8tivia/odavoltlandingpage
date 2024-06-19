import {
  _getCreatorByToken,
  _loginAdmin,
} from "@/redux/actions/admin/auth/auth.actions"
import { createSlice } from "@reduxjs/toolkit"

interface InitialStateTypes {
  loading: boolean
  token: string | null
  user: any
  isError: boolean
  isSuccess: boolean
  msg: string | null
  creator: any
}

const initialState: InitialStateTypes = {
  loading: false,
  token: null,
  user: null,
  isError: false,
  isSuccess: false,
  msg: null,
  creator: null,
}

const adminloginSlice = createSlice({
  name: "admin/login",
  initialState: initialState,
  reducers: {
    clearLoginState: (state) => {
      state.isError = false
      state.isSuccess = false
      state.msg = null
    },
  },
  extraReducers: (builder) => {
    builder.addCase(_loginAdmin.pending, (state) => {
      state.loading = true
    })

    builder.addCase(_loginAdmin.fulfilled, (state, action) => {
      state.loading = false

      state.isError = action.payload.isError
      state.isSuccess = !action.payload.isError
      state.msg = action.payload.msg
      state.token = action.payload.payload
    })

    builder.addCase(_loginAdmin.rejected, (state, action: any) => {
      state.loading = false
      state.isError = action.payload.isError
      state.isSuccess = !action.payload.isError
      state.msg = action.payload.msg
    })

    //creator
    builder.addCase(_getCreatorByToken.pending, (state) => {
      state.loading = true
    })
    builder.addCase(_getCreatorByToken.fulfilled, (state, action) => {
      state.loading = false
      state.isError = action.payload.isError
      state.isSuccess = !action.payload.isError
      state.msg = action.payload.msg
      state.creator = action.payload.payload
    })
    builder.addCase(_getCreatorByToken.rejected, (state, action: any) => {
      state.loading = false
      state.isError = action.payload.isError
      state.isSuccess = !action.payload.isError
      state.msg = action.payload.msg
    })
  },
})

export const { clearLoginState } = adminloginSlice.actions
export default adminloginSlice.reducer
