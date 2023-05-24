import { useEffect } from "react";
import { Footer, Header, Settings } from "./components";
import PageRoutes from './routes';
import Aos from "aos";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "aos/dist/aos.css";
import "./App.css";

export default function App() {
  useEffect(() => {
    Aos.init({
      offset: 50,
      duration: 400,
      easing: "ease-in-sine",
      delay: 150,
    });
  }, []);

  return (
    <>
      <Header />
      <ToastContainer autoClose={3000} theme='dark' />
      <Settings />
      <PageRoutes />
      <Footer />
    </>
  )
}
