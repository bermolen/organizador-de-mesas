import React from "react";
import Table from "./Table.jsx";

export default function TablesArea({ tables = [] }) {
  // Demo: una mesa principal y dos normales
  const demoTables = tables.length
    ? tables
    : [
        { name: "Mesa Principal", isMain: true, guests: [{ name: "Novia" }, { name: "Novio" }], capacity: 12 },
        { name: "Mesa 1", guests: [{ name: "Invitado 1" }], capacity: 10 },
        { name: "Mesa 2", guests: [], capacity: 10 },
      ];
  return (
    <section className="flex-1 p-4 flex flex-col gap-4">
      <h2 className="text-lg font-bold mb-2">Mesas del evento</h2>
      <div className="flex flex-wrap gap-4">
        {demoTables.map((t, i) => (
          <Table key={i} {...t} />
        ))}
      </div>
    </section>
  );
}
