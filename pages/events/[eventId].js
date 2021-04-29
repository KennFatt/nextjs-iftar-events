import ContactPlaceholder from "@/components/ContactPlaceholder";
import Container from "@/components/Container";
import DatePlaceholder from "@/components/DatePlaceholder";
import { useData } from "@/lib/data-source";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function EventDetailByIdPage() {
  const dummy = useData();
  const router = useRouter();
  const [content, setContent] = useState({});
  const [isInvalid, setIsInvalid] = useState(false);
  const { title, date, contact, description, thumbnail } = content;

  useEffect(() => {
    /** @see https://stackoverflow.com/a/61043260/6569706 */
    if (!router.isReady) {
      return;
    }

    const { eventId } = router.query;
    console.log(eventId);
    const findEventId = eventId.toLowerCase().split("-").join(" ");

    for (const [idx, event] of dummy.entries()) {
      if (event.title.toLowerCase() === findEventId) {
        setContent(dummy[idx]);

        return;
      }
    }

    setIsInvalid(true);
  }, [router.isReady]);

  if (isInvalid) {
    return (
      <Container>
        <div className="flex flex-col justify-center h-screen space-y-6">
          <img
            src="/assets/floating-undraw.svg"
            alt="Floating illustration from Undraw"
          />
          <h1 className="font-bold tracking-tighter text-center text-green-700">
            The event you're looking for is not exists, yet
          </h1>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="py-4 space-y-4 text-gray-900">
        {/* Image */}
        <div className="overflow-hidden rounded-md bg-gradient-to-br from-green-800 to-green-400">
          <img
            className="object-cover w-full h-64"
            alt={`An Iftar Event: ${title}`}
            src={`/images/${thumbnail}`}
          />
        </div>

        {/* Title */}
        <h1 className="text-lg font-bold tracking-tighter text-green-700">
          {title}
        </h1>

        {/* Date & Contact */}
        <span className="flex items-center space-x-4">
          <DatePlaceholder date={date} />
          <ContactPlaceholder contact={contact} />
        </span>

        <p className="text-justify">{description}</p>
      </div>
    </Container>
  );
}
