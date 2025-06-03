import Header from "./Header/Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Loading from "./Loading";
import { useState, useEffect } from "react";

export default function Root() {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="root-element">
      <Loading load={load} />
      <Header />
      <ScrollToTop />
      <div className="outlet">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
