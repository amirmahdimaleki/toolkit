import { configureStore } from "@reduxjs/toolkit";
import workoutReducer from "./workoutsSlice";

export const store = configureStore({
  reducer: {
    workouts: workoutReducer,
  },
});
