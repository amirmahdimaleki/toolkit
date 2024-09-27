import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link href="/" className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-indigo-600">Fitness Tracker</span>
              </Link>
            </div>
            <div className="flex items-center">
              <Link href="/add-workout" className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-900">
                Add Workout
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</main>
    </div>
  );
}
