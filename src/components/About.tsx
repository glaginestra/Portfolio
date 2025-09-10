import CV from "../assets/imagenes/CV_Gaston_Laginestra.pdf";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  return (
    <div
      className=" flex flex-col justify-center items-center bg-[#f0f4f8] h-auto w-[100%]"
      style={{ fontFamily: "Titillium Web", marginTop: "-3px" }}
    >
      <div
        className=" flex w-[100%] md:w-[100%] lg:w-[70vw] xl:w-[70vw] h-auto flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row gap-0 md:gap-4 lg:gap-4 xl:gap-4 md:justify-between lg:justify-between xl:justify-between"
        // data-aos="fade-up"
      >
        <div
          className="w-[100%] h-auto  lg:bg-[#0a2e4a] xl:bg-[#0a2e4a] bg-[#0a2e4a00] rounded-bl-3xl rounded-tl-3xl flex flex-col"
          style={{ padding: "1rem 3rem" }}
        >
          <h2
            className="text-5xl font-bold text-center md:text-left lg:text-left xl:text-left text-[#0a2e4a] md:text-[#0a2e4a] lg:text-white xl:text-white "
            style={{ fontFamily: "Titillium Web" }}
          >
            {t("about.sobre")}
          </h2>
          <p
            className="text-[#0a2e4a] md:text-[#0a2e4a] lg:text-white xl:text-white text-justify md:text-left lg:text-left xl:text-left text-xl w-auto"
            style={{ marginTop: "1em" }}
          >
            {t("about.texto")}
          </p>
          <button
            onClick={() => window.open(CV, "_blank")}
            className="w-[10em] h-[2em] bg-[#051827] flex self-center justify-center items-center md:self-start lg:self-start xl:self-start border-1 border-white rounded-xs text-white font-bold cursor-pointer transition-colors duration-500 hover:bg-[#91dff9] hover:text-[#051827] "
            style={{ marginTop: "2em" }}
          >
            {t("about.cv")}
          </button>
        </div>
        <div
          className="w-[100vw] md:w-[100vw] lg:w-[40vw] xl:w-[40vw] h-auto  lg:bg-[#0a2e4a] xl:bg-[#0a2e4a] bg-[#0a2e4a00] rounded-br-3xl rounded-tr-3xl flex flex-col justify-around md:justify-around lg:justify-between xl:justify-between"
          style={{ padding: "1rem 1rem" }}
        >
          <div className="h-[48%] md:h-[55%] lg:h-[55%] xl:h-[55%] w-full flex flex-col">
            <h2
              className="text-3xl font-bold text-center text-[#0a2e4a] md:text-[#0a2e4a] lg:text-white xl:text-white"
              style={{ fontFamily: "Titillium Web" }}
            >
              {t("about.habilidades")}
            </h2>
            <div
              className=" flex flex-wrap justify-center items-center gap-2.5 w-full"
              style={{ padding: "1.5em 0.5em" }}
            >
              <div
                className="border-1 border-[#91dff9] text-center rounded-3xl italic text-[#91dff9] flex justify-center items-center transition-all duration-500 hover:text-[#f0f4f8] hover:border-[#f0f4f8] hover:scale-105 bg-[#051827] select-none"
                style={{ padding: "0.15em 0.72em" }}
              >
                {t("about.trabajo")}
              </div>
              <div
                className="border-1 border-[#91dff9] text-center rounded-3xl italic text-[#91dff9] flex justify-center items-center transition-all duration-500 hover:text-[#f0f4f8] hover:border-[#f0f4f8] hover:scale-105 bg-[#051827] select-none"
                style={{ padding: "0.15em 0.72em" }}
              >
                {t("about.adaptabilidad")}
              </div>
              <div
                className="border-1 border-[#91dff9] text-center rounded-3xl italic text-[#91dff9] flex justify-center items-center transition-all duration-500 hover:text-[#f0f4f8] hover:border-[#f0f4f8] hover:scale-105 bg-[#051827] select-none"
                style={{ padding: "0.15em 0.72em" }}
              >
                {t("about.pensamiento")}
              </div>
              <div
                className="border-1 border-[#91dff9] text-center rounded-3xl italic text-[#91dff9] flex justify-center items-center transition-all duration-500 hover:text-[#f0f4f8] hover:border-[#f0f4f8] hover:scale-105 bg-[#051827] select-none"
                style={{ padding: "0.15em 0.72em" }}
              >
                {t("about.organizacion")}
              </div>
              <div
                className="border-1 border-[#91dff9] text-center rounded-3xl italic text-[#91dff9] flex justify-center items-center transition-all duration-500 hover:text-[#f0f4f8] hover:border-[#f0f4f8] hover:scale-105 bg-[#051827] select-none"
                style={{ padding: "0.15em 0.72em" }}
              >
                {t("about.gestion")}
              </div>
              <div
                className="border-1 border-[#91dff9] text-center rounded-3xl italic text-[#91dff9] flex justify-center items-center transition-all duration-500 hover:text-[#f0f4f8] hover:border-[#f0f4f8] hover:scale-105 bg-[#051827] select-none"
                style={{ padding: "0.15em 0.72em" }}
              >
                {t("about.autodidacta")}
              </div>
              <div
                className="border-1 border-[#91dff9] text-center rounded-3xl italic text-[#91dff9] flex justify-center items-center transition-all duration-500 hover:text-[#f0f4f8] hover:border-[#f0f4f8] hover:scale-105 bg-[#051827] select-none"
                style={{ padding: "0.15em 0.72em" }}
              >
                {t("about.aprendizaje")}
              </div>
              <div
                className="border-1 border-[#91dff9] text-center rounded-3xl italic text-[#91dff9] flex justify-center items-center transition-all duration-500 hover:text-[#f0f4f8] hover:border-[#f0f4f8] hover:scale-105 bg-[#051827] select-none"
                style={{ padding: "0.15em 0.72em" }}
              >
                {t("about.disciplina")}
              </div>
            </div>
          </div>
          <div className="h-auto w-full flex flex-col gap-4 md:gap-0 lg:gap-0 xl:gap-0">
            <h2
              className="text-3xl font-bold text-center text-[#0a2e4a] md:text-[#0a2e4a] lg:text-white xl:text-white"
              style={{ fontFamily: "Titillium Web" }}
            >
              {t("about.idiomas")}
            </h2>
            <div className="h-full w-full flex flex-col gap-7 md:gap-4 lg:gap-4 xl:gap-4 md:justify-around lg:justify-around xl:justify-around items-center">
              <div
                className="w-full h-[3.5em] border-2 border-[#02a2e4a]  lg:border-amber-50 xl:border-amber-50 flex flex-row justify-between items-center rounded-xl"
                style={{ padding: "0rem 1rem" }}
              >
                <h4
                  className="font-bold text-2xl text-[#0a2e4a] md:text-[#0a2e4a] lg:text-white xl:text-white"
                  style={{ fontFamily: "Titillium Web" }}
                >
                  {t("about.espanol")}
                </h4>
                <div className="h-[1rem] w-[9rem] bg-[#91dff9] rounded-4xl"></div>
              </div>
              <div
                className="w-full h-[3.5em] border-2 border-[#02a2e4a]  lg:border-amber-50 xl:border-amber-50 flex flex-row justify-between items-center rounded-xl"
                style={{ padding: "0rem 1rem" }}
              >
                <h4
                  className="font-bold text-2xl text-[#0a2e4a] md:text-[#0a2e4a] lg:text-white xl:text-white"
                  style={{ fontFamily: "Titillium Web" }}
                >
                  {t("about.ingles")}
                </h4>
                <div className="h-[1rem] w-[9rem] bg-[linear-gradient(to_right,#91dff9_55%,#051827_45%)] rounded-4xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
