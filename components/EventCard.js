import Link from "next/link";
import ContactPlaceholder from "./ContactPlaceholder";
import DatePlaceholder from "./DatePlaceholder";

export default function EventCard({ title, date, contact, thumbnail }) {
  const hrefValue = {
    pathname: "/events/[eventId]",
    query: {
      eventId: title.split(" ").join("-"),
    },
  };

  return (
    <div className="flex flex-col items-center overflow-hidden transition-shadow rounded-md shadow-sm hover:shadow-md">
      {/* Image */}
      <div className="w-full h-32 bg-gradient-to-br from-green-800 to-green-400">
        <img
          src={`/images/${thumbnail}`}
          alt={`An Iftar Event: ${title}`}
          className="object-cover w-full max-h-32"
        />
      </div>

      {/* Body */}
      <div className="w-full px-4 py-4 space-y-2">
        {/* Title */}
        <Link href={hrefValue}>
          <a className="font-bold tracking-tighter text-green-600 transition-colors border-b-2 border-transparent hover:border-green-600">
            {title}
          </a>
        </Link>

        {/* Date */}
        <DatePlaceholder date={date} />

        {/* Contact */}
        <ContactPlaceholder contact={contact} />
      </div>

      {/* Button */}
      <Link href={hrefValue}>
        <a className="px-32 py-2 my-4 font-bold text-center transition-colors bg-green-600 rounded-md text-gray-50 hover:bg-green-500 active:bg-green-700 hover:text-gray-100 active:text-gray-200">
          Attend
        </a>
      </Link>
    </div>
  );
}
