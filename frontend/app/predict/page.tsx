"use client";

import { useState } from "react";
import axios from "axios";
import Image from "next/image";

export default function Predict() {

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFile = (e) => {
    const f = e.target.files[0];
    setFile(f);
    setPreview(URL.createObjectURL(f));
  };

  const handlePredict = async () => {

    if (!file) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("http://localhost:8000/predict", formData);
      setResult(res.data);
    } catch (err) {
      alert("Prediction failed");
    }

    setLoading(false);
  };

  return (
    <main className="max-w-2xl mx-auto p-6 text-center">

      <h1 className="text-3xl font-bold text-green-600 mb-6">
        Waste Prediction
      </h1>

      <div className="bg-white shadow-xl rounded-2xl p-6">

        <input
          type="file"
          onChange={handleFile}
          className="mb-4"
        />

        {preview && (
          <div className="rounded-xl mx-auto h-64 overflow-hidden">
            <Image
              src={preview}
              alt="Selected waste preview"
              width={512}
              height={384}
              className="object-cover h-64 w-full"
              unoptimized
            />
          </div>
        )}

        <button
          onClick={handlePredict}
          className="mt-4 bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-700 transition"
        >
          {loading ? "Analyzing..." : "Predict Waste"}
        </button>

        {result && (
          <div className="mt-6 p-4 bg-green-50 rounded-xl">
            <h2 className="text-xl font-semibold">
              {result.prediction}
            </h2>
            <p>Confidence: {result.confidence}%</p>
          </div>
        )}

      </div>

    </main>
  );
}