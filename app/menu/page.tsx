"use client";

import Link from "next/link";

export default function Menu() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="bg-gray-200 p-6 rounded-lg shadow-lg w-96 text-center">
        <h1 className="text-2xl font-bold text-black mb-4">Меню</h1>
        
        <Link href="/tests/algebra" className="block px-4 py-2 bg-blue-500 text-black font-bold rounded-lg mb-3">
          Тест по алгебре
        </Link>
        
        <Link href="/tests/geometry" className="block px-4 py-2 bg-green-500 text-black font-bold rounded-lg">
          Тест по геометрии
        </Link>
      </div>
    </div>
  );
}
