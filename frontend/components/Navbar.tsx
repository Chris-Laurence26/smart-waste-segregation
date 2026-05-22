"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        <h1 className="text-xl font-bold text-green-600">
          ♻ Smart Waste AI
        </h1>

        <div className="flex gap-6 font-medium">
          <Link className="hover:text-green-600 transition" href="/">Home</Link>
          <Link className="hover:text-green-600 transition" href="/about">About</Link>
          <Link className="hover:text-green-600 transition" href="/features">Features</Link>
          <Link className="hover:text-green-600 transition" href="/predict">Predict</Link>
        </div>

      </div>
    </nav>
  );
}