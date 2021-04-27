import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-green-700 shadow-lg text-gray-50">
      <div className="container flex items-center justify-between px-4 py-4 mx-auto">
        <div>
          <Link href="/">
            <a className="text-2xl font-bold transition-opacity font-title hover:opacity-90">
              Iftar
            </a>
          </Link>
        </div>

        <div>
          <ul className="font-medium transition-opacity font-navitem hover:opacity-90">
            <li>
              <Link href="/events">
                <a>events</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
