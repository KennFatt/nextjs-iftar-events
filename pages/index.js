import EventCard from "../components/EventCard";
import Header from "../components/Header";

export default function Home() {
  const { title, date, contact, thumbnail } = dummy[0];
  return (
    <>
      {/* Header Component */}
      <Header />
      {/* !Header Component */}

      {/* List Container */}
      <main className="min-h-screen px-4 py-4 space-y-4 bg-gray-50 center-container">
        {/* Card */}
        <EventCard {...{ title, date, contact, thumbnail }} />
        {/* !Card */}
      </main>
      {/* !List Container */}
    </>
  );
}

const dummy = [
  {
    title: "Buka Bersama di Cibubur",
    date: "2021-04-27",
    contact: "+62 123-523-222",
    description:
      "Ut quis fugiat reprehenderit officia esse reprehenderit enim qui non sint. Ad amet cupidatat sunt ad. Anim Lorem excepteur quis fugiat culpa nostrud do.",
    thumbnail: "mosque-1.jpg",
    featured: true,
    city: "Cibubur",
  },
];
