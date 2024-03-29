import React from "react";
import Link from "next/link";

function Header() {
  return (
    <header className="sticky top-0 z-10 bg-green-700 shadow-lg text-gray-50">
      <nav className="flex items-center justify-between max-w-xs py-4 mx-auto md:max-w-lg lg:max-w-3xl">
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
      </nav>
    </header>
  );
}

export default React.memo(Header);
