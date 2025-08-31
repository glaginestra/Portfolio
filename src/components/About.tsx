import CV from "../assets/imagenes/CV_Gaston_Laginestra.pdf";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  return (
    <div
      className=" flex flex-col justify-center items-center bg-[#f0f4f8] w-full h-[80vh]"
      style={{ padding: "5em 8em", fontFamily: "Titillium Web" }}
    >
      <div
        className=" flex w-[80%] h-[100%] flex-row gap-4 justify-between"
        data-aos="fade-up"
      >
        <div
          className="w-[70%] h-[100%] bg-[#0a2e4a] rounded-bl-3xl rounded-tl-3xl flex flex-col"
          style={{ padding: "1rem 3rem" }}
        >
          <h2
            className="text-5xl font-bold text-left text-white"
            style={{ fontFamily: "Titillium Web" }}
          >
            {t("about.sobre")}
          </h2>
          <p
            className="text-white text-left text-xl w-full"
            style={{ marginTop: "1em" }}
          >
            {t("about.texto")}
          </p>
          <button
            onClick={() => window.open(CV, "_blank")}
            className="w-[10em] h-[2em] bg-[#051827] border-1 border-white rounded-xs text-white font-bold cursor-pointer transition-colors duration-500 hover:bg-[#91dff9] hover:text-[#051827] "
            style={{ marginTop: "2em" }}
          >
            {t("about.cv")}
          </button>
        </div>
        <div
          className="w-[40%] h-[100%] bg-[#0a2e4a] rounded-br-3xl rounded-tr-3xl flex flex-col"
          style={{ padding: "1rem 1rem" }}
        >
          <div className="h-[55%] w-full flex flex-col">
            <h2
              className="text-3xl font-bold text-center text-white"
              style={{ fontFamily: "Titillium Web" }}
            >
              {t("about.habilidades")}
            </h2>
            <div
              className=" flex flex-wrap justify-start items-center gap-2.5"
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
          <div className="h-[45%] w-full flex flex-col">
            <h2
              className="text-3xl font-bold text-center text-white"
              style={{ fontFamily: "Titillium Web" }}
            >
              {t("about.idiomas")}
            </h2>
            <div className="h-full w-full flex flex-col justify-around items-center">
              <div
                className="w-full h-[3.5em] border-2 border-amber-50 flex flex-row justify-between items-center rounded-xl"
                style={{ padding: "0rem 1rem" }}
              >
                <h4
                  className="font-bold text-2xl text-white"
                  style={{ fontFamily: "Titillium Web" }}
                >
                  {t("about.espanol")}
                </h4>
                <div className="h-[1rem] w-[9rem] bg-[#91dff9] rounded-4xl"></div>
              </div>
              <div
                className="w-full h-[3.5em] border-2 border-amber-50 flex flex-row justify-between items-center rounded-xl"
                style={{ padding: "0rem 1rem" }}
              >
                <h4
                  className="font-bold text-2xl text-white"
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
