import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
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
export const { addUserDetail } = userSlice.actions

export default userSlice.reducer

