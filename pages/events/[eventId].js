import ContactPlaceholder from "@/components/ContactPlaceholder";
import Container from "@/components/Container";
import DatePlaceholder from "@/components/DatePlaceholder";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { useData } from "@/lib/data-source";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function EventDetailPage() {
  const dummy = useData();
  const router = useRouter();
  const [content, setContent] = useState({});
  const [isNotFound, setIsNotFound] = useState(false);
  const { title, date, contact, description, thumbnail } = content;

  useEffect(() => {
    /** @see https://stackoverflow.com/a/61043260/6569706 */
    if (!router.isReady) {
      return;
    }

    const { eventId } = router.query;
    const findEventId = eventId.replaceAll("-", " ").toLowerCase();

    for (let i = 0; i < dummy.length; ++i) {
      if (dummy[i].title.toLowerCase() === findEventId) {
        setContent(dummy[i]);
        return;
      }
    }

    setIsNotFound(true);
  }, [router.isReady]);

  if (!router.query.eventId || !thumbnail) {
    return (
      <Container>
        <div className="flex flex-col items-center justify-center h-screen space-y-6 select-none">
          <div
            className="w-16 h-16 border-8 border-t-8 rounded-full border-green-50 animate-spin-slow"
            style={{ borderTopColor: "rgba(4, 120, 87, 1)" }}></div>
          <h1 className="font-bold tracking-tighter text-center text-green-700 animate-pulse">
            Loading...
          </h1>
        </div>
      </Container>
    );
  }

  if (isNotFound) {
    return (
      <Container>
        <div className="flex flex-col items-center justify-center h-screen space-y-6">
          <img
            src="/assets/floating-undraw.svg"
            alt="Floating illustration from Undraw"
            loading="lazy"
            className="lg:max-w-lg"
          />
          <h1 className="font-bold tracking-tighter text-center text-green-700">
            The event you're looking for is not exists, yet
          </h1>
        </div>
      </Container>
    );
  }

  return (
    <Container title={title}>
      <div className="py-4 space-y-4 text-gray-900">
        {/* Image */}
        <div className="overflow-hidden rounded-md">
          <ImagePlaceholder
            className="object-cover w-full h-64 lg:h-96"
            alt={`An Iftar Event: ${title}`}
            src={`/images/${thumbnail}`}
            loading="lazy"
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
