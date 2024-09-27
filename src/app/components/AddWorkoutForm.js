"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addWorkout } from "../../store/workoutsSlice";
import { useRouter } from "next/navigation";

export default function AddWorkoutForm() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [workout, setWorkout] = useState({
    name: "",
    type: "",
    duration: "",
    date: "",
  });

  const handleChange = (e) => {
    setWorkout({ ...workout, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addWorkout(workout));
    router.push("/");
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <form onSubmit={handleSubmit} className="p-6">
        <h2 className="text-2xl font-bold mb-4">Add New Workout</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Workout Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={workout.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="type" className="block text-gray-700 font-bold mb-2">
            Workout Type
          </label>
          <select
            id="type"
            name="type"
            value={workout.type}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
            required
          >
            <option value="">Select a type</option>
            <option value="Cardio">Cardio</option>
            <option value="Strength">Strength</option>
            <option value="Flexibility">Flexibility</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="duration" className="block text-gray-700 font-bold mb-2">
            Duration (minutes)
          </label>
          <input
            type="number"
            id="duration"
            name="duration"
            value={workout.duration}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={workout.date}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:shadow-outline"
        >
          Add Workout
        </button>
      </form>
    </div>
  );
}
