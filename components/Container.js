import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

export default function Container(props) {
  const { children, ...additionalMeta } = props;

  const meta = {
    title: "Iftar Events",
    author: "Kennan Fattah",
    description:
      "Web application to attend an iftar event with your local communities.",
    ...additionalMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="author" content={meta.author} />
        <meta name="description" content={meta.description} />
      </Head>

      <Header />
      <main className="max-w-xs min-h-screen mx-auto md:max-w-lg lg:max-w-3xl">
        {children}
      </main>
      <Footer />
    </>
  );
}
