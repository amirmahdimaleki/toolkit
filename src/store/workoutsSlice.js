import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  workouts: [],
};

const workoutSlice = createSlice({
  name: "workouts",
  initialState,
  reducers: {
    addWorkout: (state, action) => {
      state.workouts.push(action.payload);
    },
    removeWorkout: (state, action) => {
      state.workouts = state.workouts.filter((workout) => workout.id !== action.payload);
    },
  },
});

export const { addWorkout, removeWorkout } = workoutSlice.actions;
export default workoutSlice.reducer;
