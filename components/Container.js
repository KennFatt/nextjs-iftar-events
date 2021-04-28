import Footer from "./Footer";
import Header from "./Header";

export default function Container(props) {
  /**
   * TODO: Catch the necessary meta data from props
   *  by so, we could even take control for the <Head> component.
   */
  const { children } = props;

  return (
    <>
      <Header />
      <main className="max-w-xs min-h-screen mx-auto">{children}</main>
      <Footer />
    </>
  );
}
