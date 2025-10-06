import React from "react";

export default function TablesArea() {
  return (
    <section className="flex-1 p-4 flex flex-col gap-4">
      <h2 className="text-lg font-bold mb-2">Mesas del evento</h2>
      {/* Aquí se mostrarán las mesas y la mesa principal */}
      <div className="flex flex-wrap gap-4">
        <div className="bg-yellow-100 border-2 border-yellow-400 rounded-lg p-4 min-w-[120px] text-center font-semibold shadow">
          Mesa Principal
        </div>
        {/* Mesas normales (placeholder) */}
        <div className="bg-white border rounded-lg p-4 min-w-[120px] text-center shadow">Mesa 1</div>
        <div className="bg-white border rounded-lg p-4 min-w-[120px] text-center shadow">Mesa 2</div>
      </div>
    </section>
  );
}
