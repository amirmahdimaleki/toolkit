"use client";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWorkouts } from "../../store/workoutsSlice";
import Link from "next/link";

export default function WorkoutList() {
  const dispatch = useDispatch();
  const { workouts, status, error } = useSelector((state) => state.workouts);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchWorkouts());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul className="divide-y divide-gray-200">
        {workouts.map((workout) => (
          <li key={workout.id}>
            <Link href={`/workout/${workout.id}`} className="block hover:bg-gray-50">
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-indigo-600 truncate">{workout.name}</p>
                  <div className="ml-2 flex-shrink-0 flex">
                    <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">{workout.type}</p>
                  </div>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-gray-500">Duration: {workout.duration} minutes</p>
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">Date: {new Date(workout.date).toLocaleDateString()}</div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
