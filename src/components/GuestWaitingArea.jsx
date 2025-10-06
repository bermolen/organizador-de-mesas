import React from "react";

export default function GuestWaitingArea() {
  return (
    <aside className="w-full md:w-64 bg-gray-50 border-r border-gray-200 p-4 min-h-[300px]">
      <h2 className="text-lg font-bold mb-2">Zona de espera</h2>
      {/* Aquí se mostrarán los invitados para asignar */}
      <div className="text-gray-400 italic">Arrastra invitados aquí</div>
    </aside>
  );
}
