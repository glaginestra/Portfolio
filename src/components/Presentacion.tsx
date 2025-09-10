import Typewriter from "./Typewriter";
import AnimationImage from "./AnimationImage";
import { useTranslation } from "react-i18next";

function Presentacion() {
  const { t } = useTranslation();

  return (
    <section
      className="h-[70vh] lg:h-[100vh] bg-[#051827] flex flex-col xl:flex-row"
      style={{
        fontFamily: "Titillium Web",
        paddingLeft: "2em",
        paddingTop: "2em",
        paddingRight: "2em",
      }}
    >
      {/* Contenedor de texto */}
      <div className="flex flex-1 flex-col justify-center items-center xl:items-start text-center xl:text-left gap-4">
        <h1
          className="font-bold text-white text-3xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl"
          style={{ marginBottom: "1rem" }}
        >
          Gastón Nicolás Laginestra
        </h1>
        <Typewriter />
        <a href="#contacto">
          <button
            className="w-60 bg-[#304356] font-bold text-white rounded-lg h-10 cursor-pointer transition-colors duration-500 hover:bg-[#a5c8d6] hover:text-[#304356]"
            style={{ marginTop: "2rem", fontSize: "1.2rem" }}
          >
            {t("presentacion.contacto")}
          </button>
        </a>
      </div>

      {/* Contenedor de la imagen animada */}
      <div
        className="hidden xl:flex flex-1 justify-center items-center"
        style={{ marginTop: "20em" }}
      >
        <AnimationImage />
      </div>
    </section>
  );
}

export default Presentacion;
