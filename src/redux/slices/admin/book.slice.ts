
  import { _createBook, _getBooks } from "@/redux/actions/admin/books/books.actions"
import { BookType, PodcastType } from "@/types/global.types"
  import { createSlice } from "@reduxjs/toolkit"
  
  interface InitialState {
    loading: boolean
    isError: boolean
    isSuccess: boolean
    msg: string | null
    books: BookType[]
  }
  
  const initialState: InitialState = {
    loading: false,
    isError: false,
    isSuccess: false,
    msg: null,
    books: [],
  }
  
  const adminBooksSlice = createSlice({
    name: "admin/books",
    initialState: initialState,
    reducers: {
      clearBookState: (state) => {
        state.isError = false
        state.isSuccess = false
        state.msg = null
      },
    },
    extraReducers: (builder) => {
      //creating a podcast
      builder.addCase(_createBook.pending, (state) => {
        state.loading = true
      })
      builder.addCase(_createBook.fulfilled, (state, action) => {
        state.loading = false
        state.isError = action.payload.isError
        state.isSuccess = !action.payload.isError
        state.msg = action.payload.msg
      })
      builder.addCase(_createBook.rejected, (state, action: any) => {
        state.loading = false
        state.isError = action.payload.isError
        state.isSuccess = !action.payload.isError
        state.msg = action.payload.msg
      })
  
      //list book
      builder.addCase(_getBooks.pending, (state) => {
        state.loading = true
      })
      builder.addCase(_getBooks.fulfilled, (state, action) => {
        state.loading = false
        state.isError = action.payload.isError
        state.isSuccess = !action.payload.isError
        state.msg = action.payload.msg
        state.books = action.payload.payload
      })
      builder.addCase(_getBooks.rejected, (state, action: any) => {
        state.loading = false
        state.isError = action.payload.isError
        state.isSuccess = !action.payload.isError
        state.msg = action.payload.msg
      })
    },
  })
  
  export const { clearBookState } = adminBooksSlice.actions
  export default adminBooksSlice.reducer
  