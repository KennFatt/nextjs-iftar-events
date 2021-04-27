import { useRouter } from "next/router";

export default function EventDetailByIdPage() {
  const router = useRouter();
  console.log(router.query);

  return (
    <>
      <h1>Event Detail by id</h1>
    </>
  );
}
