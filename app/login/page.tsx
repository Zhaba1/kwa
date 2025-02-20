"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Авторизация:", { email, password });
    router.push("/menu");
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/math-background.jpg")' }}>
      <div className="absolute top-4 right-4 flex space-x-4">
        <Link href="/register" className="px-4 py-2 bg-blue-500 text-black font-bold rounded-lg">
          Зарегистрироваться
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <div className="p-6 w-96">
          <h1 className="text-2xl font-bold text-white mb-4">Войти</h1>
          <form onSubmit={handleLogin} className="flex flex-col">
            <label className="text-white">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="p-2 mb-3 text-black bg-white"
            />

            <label className="text-white">Пароль:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="p-2 mb-3 text-black bg-white"
            />

            <button type="submit" className="px-4 py-2 bg-green-500 text-black font-bold rounded-lg">
              Войти
            </button>
          </form>

          <p className="mt-4 text-white text-center">
            Нет аккаунта?{" "}
            <Link href="/register" className="text-blue-700 font-bold">
              Зарегистрироваться
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
