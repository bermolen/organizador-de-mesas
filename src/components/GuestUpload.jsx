import React from "react";

export default function GuestUpload() {
  return (
    <section className="my-4 p-4 bg-gray-50 border rounded-lg">
      <h3 className="font-semibold mb-2">Cargar invitados</h3>
      <div className="flex flex-col gap-2">
        <input type="file" accept=".csv" className="block" />
        <input type="text" placeholder="Nombre del invitado" className="border px-2 py-1 rounded" />
        <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition w-fit">Agregar manualmente</button>
      </div>
    </section>
  );
}
