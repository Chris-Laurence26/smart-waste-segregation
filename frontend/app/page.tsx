"use client";

import { useState } from "react";
import axios from "axios";

export default function Home() {

  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const [prediction, setPrediction] = useState("");
  const [confidence, setConfidence] = useState("");

  const [loading, setLoading] = useState(false);

  // Handle image selection
  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setSelectedImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  // Send image to FastAPI
  const handlePredict = async () => {

    if (!selectedImage) {
      alert("Please upload an image first.");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("file", selectedImage);

    try {

      const response = await axios.post(
        "http://127.0.0.1:8000/predict",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );

      setPrediction(response.data.prediction);
      setConfidence(response.data.confidence);

    } catch (error) {
      console.error(error);
      alert("Prediction failed.");

    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-xl">

        <h1 className="text-3xl font-bold text-center mb-2">
          Smart Waste Segregation
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Upload an image of waste and let AI classify it.
        </p>

        {/* Upload Input */}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mb-4 w-full"
        />

        {/* Image Preview */}
        {preview && (
          <div className="mb-6">
            <img
              src={preview}
              alt="Preview"
              className="w-full h-64 object-cover rounded-xl border"
            />
          </div>
        )}

        {/* Predict Button */}
        <button
          onClick={handlePredict}
          className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
        >
          {loading ? "Predicting..." : "Predict Waste"}
        </button>

        {/* Result */}
        {prediction && (
          <div className="mt-6 bg-gray-50 p-4 rounded-xl border">

            <h2 className="text-xl font-semibold mb-2">
              Prediction Result
            </h2>

            <p>
              <span className="font-medium">Category:</span> {prediction}
            </p>

            <p>
              <span className="font-medium">Confidence:</span> {confidence}%
            </p>

          </div>
        )}

      </div>

    </main>
  );
}