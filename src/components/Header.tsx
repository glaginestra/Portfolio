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
      className={` top-0 left-0 w-[100vw] m-0 h-[7vh]  lg:h-[10vh] xl:h-[10vh] shadow-[0px_0px_15px_white] fixed flex justify-around sm:gap-8 md:gap-12 lg:gap-30 xl:gap-80 z-50 transition-colors duration-300 items-center ${
        isScrolled ? "bg-[#051827] text-white" : "bg-white text-[#051827]"
      }`}
      style={{ fontFamily: "Titillium Web" }}
    >
      <h2 className="hidden font-bold sm:text-2xl lg:block">
        Gastón Nicolás Laginestra
      </h2>
      <div className="flex flex-row gap-4 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14">
        <ul className="m-0 p-0 flex gap-4 xl:gap-10 list-none justify-center items-center">
          <a href="#about" className="decoration-0 ">
            <li className=" font-bold text-xs md:text-xl lg:text-xl xl:text-xl">
              {t("header.sobre")}
            </li>
          </a>
          <a href="#habilidades" className="decoration-0">
            <li className=" font-bold text-xs md:text-xl lg:text-xl xl:text-xl">
              {t("header.habilidades")}
            </li>
          </a>
          <a href="#proyectos" className="decoration-0 ">
            <li className=" font-bold text-xs md:text-xl lg:text-xl xl:text-xl">
              {t("header.proyectos")}
            </li>
          </a>
          <a href="#contacto" className="decoration-0">
            <li className=" font-bold text-xs md:text-xl lg:text-xl xl:text-xl">
              {t("header.contacto")}
            </li>
          </a>
        </ul>
        <LanguageSwitch />
      </div>
    </header>
  );
}

export default Header;
