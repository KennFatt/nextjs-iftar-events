import Link from "next/link";

export default function EventCard({ title, date, contact, thumbnail }) {
  return (
    <div className="flex flex-col items-center overflow-hidden transition-shadow rounded-md shadow-sm hover:shadow-md">
      {/* Image */}
      <div className="w-full h-32 bg-gradient-to-br from-green-800 to-green-400">
        <img
          src={`/images/${thumbnail}`}
          alt=""
          className="object-cover w-full max-h-32"
        />
      </div>
      {/* !Image */}

      {/* Body */}
      <div className="w-full px-4 py-4 space-y-2">
        {/* Title */}
        <Link href="/">
          <a className="font-bold text-green-600 transition-colors border-b-2 border-transparent hover:border-green-600">
            {title}
          </a>
        </Link>
        {/* !Title */}

        {/* Date */}
        <span className="flex space-x-2">
          <svg
            className="w-6 h-6 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p className="inline text-gray-900">{date}</p>
        </span>
        {/* !Date */}

        {/* Contact */}
        <span className="flex space-x-2">
          <svg
            className="w-6 h-6 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <p className="inline text-gray-900">{contact}</p>
        </span>
        {/* !Contact */}
      </div>
      {/* !Body */}

      {/* Button */}
      <Link href="/">
        <a className="px-32 py-2 my-4 font-bold text-center transition-colors bg-green-600 rounded-md text-gray-50 hover:bg-green-500 active:bg-green-700 hover:text-gray-100 active:text-gray-200">
          Attend
        </a>
      </Link>
      {/* !Button */}
    </div>
  );
}
