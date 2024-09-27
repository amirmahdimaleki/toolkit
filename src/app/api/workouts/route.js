import { NextResponse } from "next/server";

let workouts = [
  { id: "1", name: "Morning Run", type: "Cardio", duration: 30, date: "2023-09-27" },
  { id: "2", name: "Weight Training", type: "Strength", duration: 45, date: "2023-09-28" },
];

export async function GET() {
  return NextResponse.json(workouts);
}

export async function POST(request) {
  const newWorkout = await request.json();
  const workout = {
    id: Date.now().toString(),
    ...newWorkout,
  };
  workouts.push(workout);
  return NextResponse.json(workout, { status: 201 });
}
