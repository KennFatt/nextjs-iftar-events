import Container from "@/components/Container";
import EventCard from "@/components/EventCard";
import { useData } from "@/lib/data-source";

export default function Home() {
  const dummy = useData();

  return (
    <Container>
      <h1 className="py-4 text-2xl font-semibold text-gray-900">
        Featured iftar events
      </h1>
      <div className="py-4 space-y-4">
        {dummy.map(
          ({ id, featured, ...rest }) =>
            featured && <EventCard key={id} {...rest} />
        )}
      </div>
    </Container>
  );
}
