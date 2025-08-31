import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitch from "./LanguageSwitch";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={` top-0 left-0 w-full m-0 h-[10vh] shadow-[0px_0px_15px_white] fixed flex justify-around gap-[400px] z-50 transition-colors duration-300 items-center ${
        isScrolled ? "bg-[#051827] text-white" : "bg-white text-[#051827]"
      }`}
      style={{ fontFamily: "Titillium Web" }}
    >
      <h2 className=" font-bold text-2xl">Gastón Nicolás Laginestra</h2>
      <div className="flex flex-row gap-[50px]">
        <ul className="m-0 p-0 flex gap-10 list-none justify-center items-center">
          <a href="#about" className="decoration-0 ">
            <li className=" font-bold text-xl">{t("header.sobre")}</li>
          </a>
          <a href="#habilidades" className="decoration-0">
            <li className=" font-bold text-xl">{t("header.habilidades")}</li>
          </a>
          <a href="#proyectos" className="decoration-0 ">
            <li className=" font-bold text-xl">{t("header.proyectos")}</li>
          </a>
          <a href="#contacto" className="decoration-0">
            <li className=" font-bold text-xl">{t("header.contacto")}</li>
          </a>
        </ul>
        <LanguageSwitch />
      </div>
    </header>
  );
}

export default Header;
