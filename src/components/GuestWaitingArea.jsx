import React from "react";
import GuestCard from "./GuestCard.jsx";

export default function GuestWaitingArea({ guests = [] }) {
  // Demo de invitados
  const demoGuests = guests.length
    ? guests
    : [
        { name: "Juan Pérez", groupColor: "#fbbf24", groupName: "Familia" },
        { name: "Ana López", groupColor: "#60a5fa", groupName: "Amigos" },
        { name: "Carlos Ruiz", groupColor: "#f87171", groupName: "Trabajo" },
      ];
  return (
    <aside className="w-full md:w-64 bg-gray-50 border-r border-gray-200 p-4 min-h-[300px]">
      <h2 className="text-lg font-bold mb-2">Zona de espera</h2>
      <div className="flex flex-col gap-2">
        {demoGuests.map((g, i) => (
          <GuestCard key={i} {...g} />
        ))}
      </div>
    </aside>
  );
}
