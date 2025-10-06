import React from "react";

export default function Table({ name = "Mesa", isMain = false, guests = [], capacity = 10 }) {
  return (
    <div className={`relative flex flex-col items-center justify-center p-4 rounded-lg shadow border min-w-[120px] min-h-[120px] ${isMain ? 'bg-yellow-100 border-yellow-400' : 'bg-white border-gray-200'}`}>
      <span className={`font-bold ${isMain ? 'text-yellow-700' : 'text-gray-700'}`}>{name}</span>
      <span className="text-xs text-gray-500">{guests.length} / {capacity} invitados</span>
      {/* Aquí se mostrarán los invitados asignados a la mesa */}
      <div className="flex flex-wrap gap-1 mt-2 justify-center">
        {guests.map((g, i) => (
          <span key={i} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">{g.name}</span>
        ))}
      </div>
      {isMain && (
        <span className="absolute top-2 right-2 text-xs bg-yellow-400 text-white px-2 py-0.5 rounded">Principal</span>
      )}
    </div>
  );
}
