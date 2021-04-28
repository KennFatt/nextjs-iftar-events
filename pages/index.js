import Container from "@/components/Container";
import EventCard from "@/components/EventCard";
import { useData } from "@/lib/data-source";

export default function Home() {
  const dummy = useData();

  return (
    <Container>
      <div className="py-4 space-y-4 ">
        {dummy.map(({ id, featured, ...rest }) => {
          if (featured) {
            return <EventCard key={id} {...rest} />;
          }
        })}
      </div>
    </Container>
  );
}
