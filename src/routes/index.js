import { Route, Routes } from "react-router-dom";
import { WorkDetail } from "../components";
import { About, Contact, DefaultPage, Home, Works, Service, NotFound, } from "../pages";

export default function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/works" element={<Works />} />
      <Route path="/works/:slug" element={<WorkDetail />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
