"use client";
import Cookie from "js-cookie";
import Link from "next/link";
import { ChevronLeft, Trash } from "lucide-react";
import { useEffect } from "react";

interface Memory {
  id: string;
  coverUrl: string;
  excerpt: string;
  createdAt: string;
}

export default async function EditMemory() {
  const token = Cookie.get("token");

  useEffect(() => {
    const memories = fetch("http://localhost:3333/memories", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());
    console.log(memories);
    // return memories;
  }, []);
  function handleDelete() {
    console.log("deleted");
  }
  return (
    <>
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

      <div></div>
    </>
  );
}
