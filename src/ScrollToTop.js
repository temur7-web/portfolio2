import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Sahifani eng tepaga, 0-koordinataga qaytaradi
    window.scrollTo(0, 0);
  }, [pathname]); // Har safar router (pathname) o'zgarganda ishlaydi

  return null;
};

export default ScrollToTop;