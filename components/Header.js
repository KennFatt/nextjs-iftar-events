import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-4 bg-green-700 shadow-lg center-container text-gray-50">
      <div>
        <Link href="/">
          <a className="text-2xl font-bold font-title">Iftar</a>
        </Link>
      </div>

      <div>
        <ul className="font-medium font-navitem">
          <li>
            <Link href="/events">
              <a>events</a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
