import { useRouter } from "next/router";

export default function EventDetailBySlugPage() {
  const router = useRouter();
  console.log(router.query);

  return (
    <>
      <h1>Event Detail by slug</h1>
    </>
  );
}
