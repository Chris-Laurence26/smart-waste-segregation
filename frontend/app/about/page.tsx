export default function About() {
  return (
    <main className="max-w-4xl mx-auto p-6">

      <div className="bg-white shadow-xl rounded-2xl p-8">

        <h1 className="text-3xl font-bold text-green-600 mb-4">
          About This Project
        </h1>

        <p className="text-gray-600 mb-6">
          The Smart Waste Segregation System uses machine learning to help users
          properly identify waste materials.
        </p>

        <div className="space-y-4">

          <div className="p-4 bg-green-50 rounded-xl">
            <h2 className="font-semibold">🎯 Purpose</h2>
            <p>Promote proper waste segregation using AI.</p>
          </div>

          <div className="p-4 bg-blue-50 rounded-xl">
            <h2 className="font-semibold">🌍 Importance</h2>
            <p>Reduces environmental pollution and improves recycling.</p>
          </div>

        </div>

      </div>

    </main>
  );
}