import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'User',
  initialState: {
    value: {},
  },
  reducers: {
    addUserDetail : (state, action) => {
        state.value = action.payload  
    }
  },
})

// Action creators are generated for each case reducer function
export const { addUserDetail } = counterSlice.actions

export default counterSlice.reducer

