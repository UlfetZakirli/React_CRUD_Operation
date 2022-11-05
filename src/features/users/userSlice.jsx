import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: nanoid(),
    name: "Ulfat",
    email: "ulfat@gmail.com",
  },
  {
    id: nanoid(),
    name: "Aynure",
    email: "aynure@gmail.com",
  },
];
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
      //   console.log(action.payload);
    },
    editUser: (state, action) => {
      const { id, name, email } = action.payload;
      const existingUser = state.find((user) => user.id === id);
      console.log("existingUser", existingUser);
      console.log("action.payload", action.payload);
      if (existingUser) {
        existingUser.name = name;
        existingUser.email = email;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      console.log(action.payload);
      const existingUser = state.find((user) => user.id === id);
      if (existingUser) {
        return state.filter((user) => user.id !== id);
      }
    },
  },
});

export const { addUser, editUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
