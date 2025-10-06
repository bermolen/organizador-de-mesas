import React from "react";

export default function GuestCard({ name, groupColor = "#e0e7ff", groupName }) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded shadow bg-white border border-gray-200">
      <span className="w-3 h-3 rounded-full" style={{ background: groupColor }}></span>
      <span className="font-medium text-gray-700">{name}</span>
      {groupName && <span className="text-xs text-gray-400 ml-2">({groupName})</span>}
    </div>
  );
}
