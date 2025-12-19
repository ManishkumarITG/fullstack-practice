import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'User',
  initialState: {
    value: null,
  },
  reducers: {
    addUserDetail : (state, action) => {
      state.value = action.payload;  
      console.log(state.value);
    }
  },
})

// Action creators are generated for each case reducer function
export const { addUserDetail } = userSlice.actions

export default userSlice.reducer

