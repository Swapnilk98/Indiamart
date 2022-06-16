import { ContactUs } from "../components/MainContactUs/contact";
import { Navbar } from "../components/Navbar/Navbar";
import { Navbar2 } from "../components/Navbar2/Navbar2";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/footer/Footer";

export const Contact = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Navbar2 />
      <ContactUs />
      <Footer />
    </>
  );
};
