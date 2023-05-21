"use client";
import { ChevronLeft, Trash } from "lucide-react";
import Link from "next/link";

export default function EditMemory() {
  function handleDelete() {
    console.log("deleted");
  }
  return (
    <div className="flex flex-row justify-between gap-4 p-16">
      <Link
        href="/"
        className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100"
      >
        <ChevronLeft className="h-4 w-4" />
        voltar à timeline
      </Link>
      <button onClick={handleDelete}>
        <Trash className="text-red-500" />
      </button>
      
    </div>
  );
}
