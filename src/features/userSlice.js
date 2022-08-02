import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';



export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user:null
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    loginuser: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.user = action.payload;
    },
    logoutuser: (state) => {
      state.user = null;
    },
   
    
  },
 
});

export const { loginuser, logoutuser } = userSlice.actions;


export const selectUser = (state) => state.user.user;



export default userSlice.reducer;
