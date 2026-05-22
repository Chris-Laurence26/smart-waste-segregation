import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center text-center px-6 py-20">

      {/* Hero Card */}
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-3xl">

        <h1 className="text-5xl font-bold mb-4 text-green-600">
          Smart Waste Segregation
        </h1>

        <p className="text-gray-600 text-lg mb-6">
          An AI-powered system that classifies waste images into categories
          such as plastic, paper, metal, and organic materials.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/predict"
            className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition"
          >
            Try It Now
          </Link>

          <Link
            href="/features"
            className="border border-green-600 text-green-600 px-6 py-3 rounded-xl hover:bg-green-50 transition"
          >
            View Features
          </Link>
        </div>

      </div>

      {/* Feature highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-5xl">

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          ♻️ Waste Classification
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          🧠 AI-Powered Predictions
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          🌱 Environmental Awareness
        </div>

      </div>

    </main>
  );
}