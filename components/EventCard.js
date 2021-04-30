import Link from "next/link";
import ContactPlaceholder from "./ContactPlaceholder";
import DatePlaceholder from "./DatePlaceholder";
import ImagePlaceholder from "./ImagePlaceholder";

export default function EventCard({ title, date, contact, thumbnail }) {
  const hrefValue = {
    pathname: "/events/[eventId]",
    query: {
      eventId: title.split(" ").join("-"),
    },
  };

  return (
    <div className="flex flex-col items-center overflow-hidden transition-shadow rounded-md shadow-sm lg:flex-row hover:shadow-md">
      {/* Image */}
      <div className="w-full">
        <ImagePlaceholder
          src={`/images/${thumbnail}`}
          alt={`An Iftar Event: ${title}`}
          className="object-cover w-full h-32 lg:h-64 md:h-48"
          loading="lazy"
        />
      </div>

      {/* Body */}
      <div className="flex flex-col w-full px-4 lg:h-64 lg:justify-between">
        <div className="py-4 space-y-2">
          {/* Title */}
          <Link href={hrefValue}>
            <a className="font-bold tracking-tighter text-green-600 transition-colors border-b-2 border-transparent hover:border-green-600">
              {title}
            </a>
          </Link>

          <DatePlaceholder date={date} />
          <ContactPlaceholder contact={contact} />
        </div>

        {/* Button */}
        <Link href={hrefValue}>
          <a className="py-2 my-4 font-bold text-center transition-colors bg-green-600 rounded-md text-gray-50 hover:bg-green-500 active:bg-green-700 hover:text-gray-100 active:text-gray-200">
            Attend
          </a>
        </Link>
      </div>
    </div>
  );
}
