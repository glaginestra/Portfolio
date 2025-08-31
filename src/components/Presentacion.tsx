import Typewriter from "./Typewriter";
import AnimationImage from "./AnimationImage";
import { useTranslation } from "react-i18next";

function Presentacion() {
  const { t } = useTranslation();
  return (
    <section
      className="h-[100vh] bg-[#051827] flex flex-row"
      style={{
        fontFamily: "Titillium Web",
        paddingTop: "20em",
        paddingLeft: "3em",
      }}
    >
      <div className=" flex-column w-[100%] pl-12 items-center gap-4">
        <h1
          className="font-bold text-white text-6xl"
          style={{ marginBottom: "1rem" }}
        >
          Gastón Nicolás Laginestra
        </h1>
        <Typewriter></Typewriter>
        <a href="#contacto">
          <button
            className="w-60 bg-[#304356] font-bold text-white rounded-lg h-10 cursor-pointer transition-colors duration-500 hover:bg-[#a5c8d6] hover:text-[#304356]"
            style={{ marginTop: "2rem", fontSize: "1.2rem" }}
          >
            {t("presentacion.contacto")}
          </button>
        </a>
      </div>
      <AnimationImage></AnimationImage>
    </section>
  );
}

export default Presentacion;
