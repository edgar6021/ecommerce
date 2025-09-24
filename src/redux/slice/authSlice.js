import { createSlice } from '@reduxjs/toolkit'

const initialState = {
isloggedIn: false,
email:null,
useName:null,
userID:null,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
ACTIVE:(state, action) => {
const {email, userName, userID} = action.payload
state.isloggedIn= true;
state.email = email;
state.useName = userName;
state.userID = userID;

},
REMOVE:(state, action) => {
console.log(state.isloggedIn.useName)
state.isloggedIn= false;
state.email = null;
state.useName = null;
state.userID = null;
console.log(state.isloggedIn)
},
}
});

export const {ACTIVE, REMOVE} = authSlice.actions

export const selectIsLoggedIn = (state)=>state.auth.isloggedIn;
export const selectEmail = (state)=>state.auth.selectEmail;
export const selectUserName = (state)=>state.auth.selectUserName;
export const selectUserID = (state)=>state.auth.selectUserID;

export default authSlice.reducer