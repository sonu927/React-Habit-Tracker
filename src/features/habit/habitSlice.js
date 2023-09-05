import { createSlice, nanoid } from "@reduxjs/toolkit";
import moment from "moment";

const initialState = {
  habits: [],
};

export const habitSlice = createSlice({
  name: "habitList",
  initialState,
  reducers: {
    habitAdded: (state, action) => {
      const habit = {
        id: nanoid(),
        content: action.payload,
        status: "none",
        date: moment().format("Do-MMM"),
      };

      state.habits.push(habit);
    },
    habitDeleted: (state, action) => {
      state.habits = state.habits.filter(
        (habit) => habit.id !== action.payload
      );
    },
    habitStatusToggle: (state, action) => {
      const matchingHabit = state.habits.find(
        (habit) => habit.id === action.payload
      );
      if (matchingHabit) {
        const statusOptions = ["none", "done", "not-done"];
        const currentIndex = statusOptions.indexOf(matchingHabit.status);
        const nextIndex = (currentIndex + 1) % statusOptions.length;
        matchingHabit.status = statusOptions[nextIndex];
      }
    },
  },
});

export const { habitAdded, habitDeleted, habitStatusToggle } =
  habitSlice.actions;

export default habitSlice.reducer;
