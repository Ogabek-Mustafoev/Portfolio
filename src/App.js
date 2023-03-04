import { useEffect } from "react";
import { Footer, Header, Settings } from "./components";
import PageRoutes from './routes';
import Aos from "aos";
import "./App.css";

export default function App() {
  useEffect(() => {
    Aos.init({
      offset: 50,
      duration: 600,
      easing: "ease-in-sine",
      delay: 200,
    });
  }, []);

  return (
    <>
      <Header />
      <Settings />
      <PageRoutes />
      <Footer />
    </>
  )
}
