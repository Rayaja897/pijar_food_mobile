import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'auth',
  initialState: {
    users:undefined,
  },
  reducers: {
    setUsers: (state,actions) => { 
        state.users = actions.payload
    },
  }
})


export const { setUsers } = counterSlice.actions
export default counterSlice.reducer