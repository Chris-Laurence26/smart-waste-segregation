export default function Features() {
  return (
    <main className="max-w-5xl mx-auto p-6">

      <h1 className="text-3xl font-bold text-center mb-8 text-green-600">
        Features
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          🖼️ Image Classification
          <p className="text-gray-500 mt-2">
            Upload waste images for AI prediction.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          ♻ Waste Identification
          <p className="text-gray-500 mt-2">
            Detects plastic, paper, metal, organic, etc.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          📊 Confidence Score
          <p className="text-gray-500 mt-2">
            Shows how confident the model is.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          🌱 Eco Awareness
          <p className="text-gray-500 mt-2">
            Encourages responsible disposal habits.
          </p>
        </div>

      </div>

    </main>
  );
}