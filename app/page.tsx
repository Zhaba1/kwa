import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Добро пожаловать!</h1>
      <Link href="/register">
        <button>Зарегистрироваться</button>
      </Link>
      <Link href="/login">
        <button>Войти</button>
      </Link>
    </div>
  );
}