import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Navega a la parte superior de la página sin animar el scroll
    window.location.hash = "";
  }, [pathname]);

  return null;
}
