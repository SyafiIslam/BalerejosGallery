import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../page/Home";
import Profile from "../page/Profile";
import Karya from "../page/Karya";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function MainRoute() {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil-desa" element={<Profile />} />
        <Route path="/karya-desa" element={<Karya />} />
      </Routes>
    </div>
  );
}

export default MainRoute;
