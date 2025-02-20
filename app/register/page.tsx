"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Пароли не совпадают!");
      return;
    }
    console.log("Регистрация:", { name, email, password });
    router.push("/menu");
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/math-background.jpg")' }}>
      <div className="absolute top-4 right-4 flex space-x-4">
        <Link href="/login" className="px-4 py-2 bg-blue-500 text-black font-bold rounded-lg">
          Войти
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <div className="p-6 w-96">
          <h1 className="text-2xl font-bold text-white mb-4">Регистрация</h1>
          <form onSubmit={handleRegister} className="flex flex-col">
            <label className="text-white">Имя:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="p-2 mb-3 text-black bg-white"
            />

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

            <label className="text-white">Подтвердите пароль:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="p-2 mb-3 text-black bg-white"
            />

            <button type="submit" className="px-4 py-2 bg-green-500 text-black font-bold rounded-lg">
              Зарегистрироваться
            </button>
          </form>

          <p className="mt-4 text-white text-center">
            Уже есть аккаунт?{" "}
            <Link href="/login" className="text-blue-700 font-bold">
              Войти
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
