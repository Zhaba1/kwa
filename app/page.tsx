"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/start-page-background.jpg")' }}>
      <div className="absolute top-4 right-4 flex space-x-4">
        <Link href="/login" className="px-4 py-2 bg-blue-500 text-black font-bold rounded-lg">
          Войти
        </Link>
        <Link href="/register" className="px-4 py-2 bg-green-500 text-black font-bold rounded-lg">
          Зарегистрироваться
        </Link>
      </div>
      
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-3xl font-bold text-white mb-4">Добро пожаловать на наш сайт</h1>
      </div>
    </div>
  );
}
