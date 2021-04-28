import EventCard from "@/components/EventCard";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      {/* Header Component */}
      <Header />
      {/* !Header Component */}

      {/* List Container */}
      <main className="min-h-screen px-4 py-4 space-y-4 bg-gray-50">
        {dummy.map(({ id, ...rest }) => (
          <EventCard key={id} {...rest} />
        ))}
      </main>
      {/* !List Container */}
    </>
  );
}

const dummy = [
  {
    id: 0,
    title: "Buka Bersama di Cibubur",
    date: "2021-04-27",
    contact: "+62 123-523-222",
    description:
      "Ut quis fugiat reprehenderit officia esse reprehenderit enim qui non sint. Ad amet cupidatat sunt ad. Anim Lorem excepteur quis fugiat culpa nostrud do.",
    thumbnail: "mosque-1.jpg",
    featured: true,
    city: "Cibubur",
  },
  {
    id: 1,
    title: "Reuni dan Silaturahmi SMPN 9 Jakarta",
    date: "2021-04-28",
    contact: "+62 141-501-223",
    description:
      "Duis nisi do adipisicing irure. Excepteur id minim reprehenderit consectetur eiusmod nulla reprehenderit veniam nulla do qui voluptate. Eiusmod nostrud excepteur tempor incididunt veniam enim. Duis magna ipsum duis consequat enim proident consectetur incididunt excepteur sunt. Exercitation officia esse laboris eu reprehenderit labore id anim cupidatat culpa consectetur nostrud enim.",
    thumbnail: "mosque-2.jpg",
    featured: true,
    city: "Ciracas",
  },
];
