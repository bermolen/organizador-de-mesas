import React from "react";

export default function TopBar() {
  return (
    <header className="w-full bg-blue-700 text-white px-6 py-3 flex items-center justify-between shadow">
      <span className="font-bold text-lg tracking-wide">Organizador de Mesas</span>
      <nav>
        {/* Aquí irán botones de login/usuario y navegación */}
        <button className="bg-white text-blue-700 px-3 py-1 rounded font-semibold hover:bg-blue-100 transition">Iniciar sesión</button>
      </nav>
    </header>
  );
}
