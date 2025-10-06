import React from "react";

export default function EventLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-blue-700 text-white px-6 py-3 flex items-center justify-between shadow">
        <span className="font-bold text-lg tracking-wide">Organizador de Mesas</span>
        <nav>
          <button className="bg-white text-blue-700 px-3 py-1 rounded font-semibold hover:bg-blue-100 transition">Iniciar sesión</button>
        </nav>
      </header>
      <main className="flex-1 flex flex-col md:flex-row gap-4 max-w-6xl mx-auto w-full p-4">
        {children}
      </main>
    </div>
  );
}
