import img_portfolio from "../assets/imagenes/img_portfolio.png";
import img_bairescandybox from "../assets/imagenes/img_bairescandybox.png";
import img_tucasaonline from "../assets/imagenes/img_tucasaonline.png";
import img_subway from "../assets/imagenes/img_subway.png";
import img_spotify from "../assets/imagenes/img_spotify.png";
import img_remodelacion from "../assets/imagenes/img_remodelacion.png";
import img_blog from "../assets/imagenes/img_blog.png";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function BodyProjects() {
  const { t } = useTranslation();
  return (
    <section
      id="proyectos"
      className="h-auto w-full bg-[#f0f4f8] flex flex-col gap-[3em] justify-center itams-center"
      style={{
        padding: "2em 0em",
        fontFamily: "Titillium Web",
        marginTop: "50px",
      }}
    >
      <h2 className="font-bold text-[#051827] text-4xl md:text-5xl lg:text-5xl xl:text-5xl text-center">
        {t("proyectos.titulo")}
      </h2>
      <div className=" h-auto md:h-auto lg:h-[25em] xl:h-[25em] w-full static md:static lg:relative xl:relative flex flex-col md:flex-col group justify-center items-center gap-1 md:gap-0 lg:gap-0 xl:gap-0 border-[#051827] border-2 rounded-[5px] shadow-[0px_0px_15px_rgb(0,0,0,0.3)] md:border-0 md:shadow-[0px_0px_0px_rgb(0,0,0,0.0)] lg:border-0 lg:shadow-[0px_0px_0px_rgb(0,0,0,0.0)]">
        <div className="w-full h-[60%] md:w-[70%] md:h-[60%] lg:w-[50%] lg:h-[100%] xl:w-[50%] xl:h-[100%] static md:static lg:absolute xl:absolute z-5 md:top-0 md:right-[6em] lg:top-0 lg:right-[6em] xl:top-0 xl:right-[6em] rounded-[5px] overflow-hidden">
          <img
            src={img_bairescandybox}
            alt="Imagen de Proyecto BairesCandyBox"
            className="w-full h-full object-fit-cover object-center z-3"
          />
          <div className="static lg:absolute inset-0 bg-gradient-to-r from-[#051827] to-[#05182720] transition-opacity duration-500 group-hover:opacity-0"></div>
        </div>
        <div
          className="bg-[#e2e4e700] lg:bg-[#e2e4e7] xl:bg-[#e2e4e7] w-full h-auto md:w-[70%] md:h-auto lg:w-[50%] lg:h-auto xl:w-[45%] xl:h-[82%] flex flex-col justify-around md:static lg:absolute xl:absolute z-10 rounded-xl  lg:top-[50%] lg:translate-y-[-50%] lg:left-[8em] lg:shadow-[0px_0px_10px_rgb(0,0,0,0.5)] xl:top-[50%] xl:translate-y-[-50%] xl:left-[18em] xl:shadow-[0px_0px_10px_rgb(0,0,0,0.5)]"
          style={{ padding: "0.5em 1em" }}
        >
          <h2
            className="font-bold text-[#051827] text-[24px]"
            style={{ marginBottom: "5px" }}
          >
            01 - BairesCandyBox
          </h2>
          <p
            className=" text-[#051827cd] text-[18px] text-justify"
            style={{ marginBottom: "8px" }}
          >
            {t("proyectos.bairescandybox")}
          </p>
          <div
            className=" flex flex-wrap justify-start items-center gap-2.5"
            style={{ marginBottom: "8px" }}
          >
            <div
              className=" font-semibold text-center rounded-[5px] italic text-[#051827] flex justify-center items-center transition-all duration-500 hover:border-[#f0f4f8] hover:scale-105 bg-[#e2e4e7] shadow-[0px_0px_10px_rgb(0,0,0,0.25)] select-none"
              style={{ padding: "0.15em 0.72em" }}
            >
              HTML5
            </div>
            <div
              className=" font-semibold text-center rounded-[5px] italic text-[#051827] flex justify-center items-center transition-all duration-500 hover:border-[#f0f4f8] hover:scale-105 bg-[#e2e4e7] shadow-[0px_0px_10px_rgb(0,0,0,0.25)] select-none"
              style={{ padding: "0.15em 0.72em" }}
            >
              CSS3
            </div>
            <div
              className=" font-semibold text-center rounded-[5px] italic text-[#051827] flex justify-center items-center transition-all duration-500 hover:border-[#f0f4f8] hover:scale-105 bg-[#e2e4e7] shadow-[0px_0px_10px_rgb(0,0,0,0.25)] select-none"
              style={{ padding: "0.15em 0.72em" }}
            >
              JavaScript
            </div>
            <div
              className=" font-semibold text-center rounded-[5px] italic text-[#051827] flex justify-center items-center transition-all duration-500 hover:border-[#f0f4f8] hover:scale-105 bg-[#e2e4e7] shadow-[0px_0px_10px_rgb(0,0,0,0.25)] select-none"
              style={{ padding: "0.15em 0.72em" }}
            >
              SQLAlchemy
            </div>
            <div
              className=" font-semibold text-center rounded-[5px] italic text-[#051827] flex justify-center items-center transition-all duration-500 hover:border-[#f0f4f8] hover:scale-105 bg-[#e2e4e7] shadow-[0px_0px_10px_rgb(0,0,0,0.25)] select-none"
              style={{ padding: "0.15em 0.72em" }}
            >
              Mercado Pago API
            </div>
            <div
              className=" font-semibold text-center rounded-[5px] italic text-[#051827] flex justify-center items-center transition-all duration-500 hover:border-[#f0f4f8] hover:scale-105 bg-[#e2e4e7] shadow-[0px_0px_10px_rgb(0,0,0,0.25)] select-none"
              style={{ padding: "0.15em 0.72em" }}
            >
              Figma
            </div>
            <div
              className=" font-semibold text-center rounded-[5px] italic text-[#051827] flex justify-center items-center transition-all duration-500 hover:border-[#f0f4f8] hover:scale-105 bg-[#e2e4e7] shadow-[0px_0px_10px_rgb(0,0,0,0.25)] select-none"
              style={{ padding: "0.15em 0.72em" }}
            >
              Flask
            </div>
            <div
              className=" font-semibold text-center rounded-[5px] italic text-[#051827] flex justify-center items-center transition-all duration-500 hover:border-[#f0f4f8] hover:scale-105 bg-[#e2e4e7] shadow-[0px_0px_10px_rgb(0,0,0,0.25)] select-none"
              style={{ padding: "0.15em 0.72em" }}
            >
              Django
            </div>
          </div>
          <div className=" flex flex-row gap-4">
            <a
              href="http://"
              target="_blank"
              className=" w-9 h-9 flex justify-center text-[#051827] items-center hover:shadow-[0px_0px_10px_rgb(0,0,0,0.25)] transition-all rounded-[5px] duration-500"
              rel="noopener noreferrer"
            >
              <FiExternalLink className="text-current" size={28} />
            </a>

            <a
              href="http://"
              target="_blank"
              className=" w-9 h-9 flex justify-center text-[#051827] self-center items-center hover:shadow-[0px_0px_10px_rgb(0,0,0,0.25)] transition-all rounded-[5px] duration-500"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-current" size={28} />
            </a>
          </div>
        </div>
      </div>

      <div className=" h-auto md:h-auto lg:h-[25em] xl:h-[25em] w-full static md:static lg:relative xl:relative flex flex-col md:flex-col group justify-center items-center gap-1 md:gap-0 lg:gap-0 xl:gap-0 border-[#051827] border-2 rounded-[5px] shadow-[0px_0px_15px_rgb(0,0,0,0.3)] md:border-0 md:shadow-[0px_0px_0px_rgb(0,0,0,0.0)] lg:border-0 lg:shadow-[0px_0px_0px_rgb(0,0,0,0.0)]">
        <div className="w-full h-[60%] md:w-[70%] md:h-[60%] lg:w-[50%] lg:h-[100%] xl:w-[50%] xl:h-[100%] static md:static lg:absolute xl:absolute z-5 md:top-0 md:left-[6em] lg:top-0 lg:left-[6em] xl:top-0 xl:left-[6em] rounded-[5px] overflow-hidden">
          <img
            src={img_tucasaonline}
            alt="Imagen de Proyecto TuCasaOnline"
            className="w-full h-full object-fit-cover object-center"
          />
          <div className="static lg:absolute inset-0 bg-gradient-to-l from-[#051827] to-[#05182720] transition-opacity duration-500 group-hover:opacity-0"></div>
        </div>
        <div
          className="bg-[#e2e4e700] lg:bg-[#e2e4e7] xl:bg-[#e2e4e7] w-full h-auto md:w-[70%] md:h-auto lg:w-[50%] lg:h-auto xl:w-[45%] xl:h-[82%] flex flex-col justify-around md:static lg:absolute xl:absolute z-10 rounded-xl  lg:top-[50%] lg:translate-y-[-50%] lg:right-[8em] lg:shadow-[0px_0px_10px_rgb(0,0,0,0.5)] xl:top-[50%] xl:translate-y-[-50%] xl:right-[18em] xl:shadow-[0px_0px_10px_rgb(0,0,0,0.5)]"
          style={{ padding: "0.5em 1em" }}
        >
          <h2
            className="font-bold text-[#051827] text-[24px]"
            style={{ marginBottom: "5px" }}
          >
            02 - TuCasaOnline
          </h2>
          <p
            className=" text-[#051827cd] text-[18px] text-justify"
            style={{ marginBottom: "8px" }}
          >
            {t("proyectos.tucasaonline")}
          </p>
          <div
            className=" flex flex-wrap justify-start items-center gap-2.5"
            style={{ marginBottom: "8px" }}
          >
            <div
              className=" font-semibold text-center rounded-[5px] italic text-[#051827] flex justify-center items-center transition-all duration-500 hover:border-[#f0f4f8] hover:scale-105 bg-[#e2e4e7] shadow-[0px_0px_10px_rgb(0,0,0,0.25)] select-none"
              style={{ padding: "0.15em 0.72em" }}
            >
              HTML5
            </div>
            <div
              className=" font-semibold text-center rounded-[5px] italic text-[#051827] flex justify-center items-center transition-all duration-500 hover:border-[#f0f4f8] hover:scale-105 bg-[#e2e4e7] shadow-[0px_0px_10px_rgb(0,0,0,0.25)] select-none"
              style={{ padding: "0.15em 0.72em" }}
            >
              CSS3
            </div>
            <div
              className=" font-semibold text-center rounded-[5px] italic text-[#051827] flex justify-center items-center transition-all duration-500 hover:border-[#f0f4f8] hover:scale-105 bg-[#e2e4e7] shadow-[0px_0px_10px_rgb(0,0,0,0.25)] select-none"
              style={{ padding: "0.15em 0.72em" }}
            >
              JavaScript
            </div>
            <div
              className=" font-semibold text-center rounded-[5px] italic text-[#051827] flex justify-center items-center transition-all duration-500 hover:border-[#f0f4f8] hover:scale-105 bg-[#e2e4e7] shadow-[0px_0px_10px_rgb(0,0,0,0.25)] select-none"
              style={{ padding: "0.15em 0.72em" }}
            >
              SQLite
            </div>
            <div
              className=" font-semibold text-center rounded-[5px] italic text-[#051827] flex justify-center items-center transition-all duration-500 hover:border-[#f0f4f8] hover:scale-105 bg-[#e2e4e7] shadow-[0px_0px_10px_rgb(0,0,0,0.25)] select-none"
              style={{ padding: "0.15em 0.72em" }}
            >
              API OSM
            </div>
            <div
              className=" font-semibold text-center rounded-[5px] italic text-[#051827] flex justify-center items-center transition-all duration-500 hover:border-[#f0f4f8] hover:scale-105 bg-[#e2e4e7] shadow-[0px_0px_10px_rgb(0,0,0,0.25)] select-none"
              style={{ padding: "0.15em 0.72em" }}
            >
              Flask
            </div>
            <div
              className=" font-semibold text-center rounded-[5px] italic text-[#051827] flex justify-center items-center transition-all duration-500 hover:border-[#f0f4f8] hover:scale-105 bg-[#e2e4e7] shadow-[0px_0px_10px_rgb(0,0,0,0.25)] select-none"
              style={{ padding: "0.15em 0.72em" }}
            >
              Django
            </div>
            <div
              className=" font-semibold text-center rounded-[5px] italic text-[#051827] flex justify-center items-center transition-all duration-500 hover:border-[#f0f4f8] hover:scale-105 bg-[#e2e4e7] shadow-[0px_0px_10px_rgb(0,0,0,0.25)] select-none"
              style={{ padding: "0.15em 0.72em" }}
            >
              Bootstrap
            </div>
          </div>

          <div className=" flex flex-row gap-4">
            <a
              href="https://tucasaonline.onrender.com/"
              target="_blank"
              className=" w-9 h-9 flex justify-center text-[#051827] items-center hover:shadow-[0px_0px_10px_rgb(0,0,0,0.25)] transition-all rounded-[5px] duration-500"
              rel="noopener noreferrer"
            >
              <FiExternalLink className="text-current" size={28} />
            </a>

            <a
              href="https://github.com/glaginestra/TuCasaOnline"
              target="_blank"
              className=" w-9 h-9 flex justify-center text-[#051827] self-center items-center hover:shadow-[0px_0px_10px_rgb(0,0,0,0.25)] transition-all rounded-[5px] duration-500"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-current" size={28} />
            </a>
          </div>
        </div>
      </div>

      <div className=" h-auto md:h-auto lg:h-[25em] xl:h-[25em] w-full static md:static lg:relative xl:relative flex flex-col md:flex-col group justify-center items-center gap-1 md:gap-0 lg:gap-0 xl:gap-0 border-[#051827] border-2 rounded-[5px] shadow-[0px_0px_15px_rgb(0,0,0,0.3)] md:border-0 md:shadow-[0px_0px_0px_rgb(0,0,0,0.0)] lg:border-0 lg:shadow-[0px_0px_0px_rgb(0,0,0,0.0)]">
        <div className="w-full h-[60%] md:w-[70%] md:h-[60%] lg:w-[50%] lg:h-[100%] xl:w-[50%] xl:h-[100%] static md:static lg:absolute xl:absolute z-5 md:top-0 md:right-[6em] lg:top-0 lg:right-[6em] xl:top-0 xl:right-[6em] rounded-[5px] overflow-hidden">
          <img
            src={img_portfolio}
            alt="Imagen de Proyecto Portfolio"
            className="w-full h-full object-fit-cover object-center"
          />
          <div className="static lg:absolute inset-0 bg-gradient-to-r from-[#051827] to-[#05182720] transition-opacity duration-500 group-hover:opacity-0"></div>
        </div>
        <div
          className="bg-[#e2e4e700] lg:bg-[#e2e4e7] xl:bg-[#e2e4e7] w-full h-auto md:w-[70%] md:h-auto lg:w-[50%] lg:h-auto xl:w-[45%] xl:h-[82%] flex flex-col justify-around md:static lg:absolute xl:absolute z-10 rounded-xl lg:top-[50%] lg:translate-y-[-50%] lg:left-[8em] lg:shadow-[0px_0px_10px_rgb(0,0,0,0.5)] xl:top-[50%] xl:translate-y-[-50%] xl:left-[18em] xl:shadow-[0px_0px_10px_rgb(0,0,0,0.5)]"
          style={{ padding: "0.5em 1em" }}
        >
          <h2
            className="font-bold text-[#051827] text-[24px]"
            style={{ marginBottom: "5px" }}
          >
            03 - Portfolio
          </h2>
          <p
            className=" text-[#051827cd] text-[18px] text-justify"
            style={{ marginBottom: "8px" }}
          >
            {t("proyectos.portfolio")}
          </p>
          <div
            className=" flex flex-wrap justify-start items-center gap-2.5"
            style={{ marginBottom: "8px" }}
          >
            <div
              className=" font-semibold text-center rounded-[5px] italic text-[#051827] flex justify-center items-center transition-all duration-500 hover:border-[#f0f4f8] hover:scale-105 bg-[#e2e4e7] shadow-[0px_0px_10px_rgb(0,0,0,0.25)] select-none"
              style={{ padding: "0.15em 0.72em" }}
            >
              React Js
            </div>
            <div
              className=" font-semibold text-center rounded-[5px] italic text-[#051827] flex justify-center items-center transition-all duration-500 hover:border-[#f0f4f8] hover:scale-105 bg-[#e2e4e7] shadow-[0px_0px_10px_rgb(0,0,0,0.25)] select-none"
              style={{ padding: "0.15em 0.72em" }}
            >
              Tailwind CSS
            </div>
            <div
              className=" font-semibold text-center rounded-[5px] italic text-[#051827] flex justify-center items-center transition-all duration-500 hover:border-[#f0f4f8] hover:scale-105 bg-[#e2e4e7] shadow-[0px_0px_10px_rgb(0,0,0,0.25)] select-none"
              style={{ padding: "0.15em 0.72em" }}
            >
              TypeScript
            </div>
          </div>
          <div className=" flex flex-row gap-4">
            <a
              href="https://portfolio-blue-tau-52.vercel.app/"
              target="_blank"
              className=" w-9 h-9 flex justify-center text-[#051827] items-center hover:shadow-[0px_0px_10px_rgb(0,0,0,0.25)] transition-all rounded-[5px] duration-500"
              rel="noopener noreferrer"
            >
              <FiExternalLink className="text-current" size={28} />
            </a>

            <a
              href="https://github.com/glaginestra/Portfolio"
              target="_blank"
              className=" w-9 h-9 flex justify-center text-[#051827] items-center hover:shadow-[0px_0px_10px_rgb(0,0,0,0.25)] transition-all rounded-[5px] duration-500"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-current" size={28} />
            </a>
          </div>
        </div>
      </div>
      <div className=" h-auto md:h-auto lg:h-[25em] xl:h-[25em] w-full static md:static lg:relative xl:relative flex flex-col md:flex-col group justify-center items-center gap-1 md:gap-0 lg:gap-0 xl:gap-0 border-[#051827] border-2 rounded-[5px] shadow-[0px_0px_15px_rgb(0,0,0,0.3)] md:border-0 md:shadow-[0px_0px_0px_rgb(0,0,0,0.0)] lg:border-0 lg:shadow-[0px_0px_0px_rgb(0,0,0,0.0)]">
        <div className="w-full h-[60%] md:w-[70%] md:h-[60%] lg:w-[50%] lg:h-[100%] xl:w-[50%] xl:h-[100%] static md:static lg:absolute xl:absolute z-5 md:top-0 md:left-[6em] lg:top-0 lg:left-[6em] xl:top-0 xl:left-[6em] rounded-[5px] overflow-hidden">
          <img
            src={img_remodelacion}
            alt="Imagen de Proyecto TuCasaOnline"
            className="w-full h-full object-fit-cover object-center"
          />
          <div className="static lg:absolute inset-0 bg-gradient-to-l from-[#051827] to-[#05182720] transition-opacity duration-500 group-hover:opacity-0"></div>
        </div>
        <div
          className="bg-[#e2e4e700] lg:bg-[#e2e4e7] xl:bg-[#e2e4e7] w-full h-auto md:w-[70%] md:h-auto lg:w-[50%] lg:h-auto xl:w-[45%] xl:h-[82%] flex flex-col justify-around md:static lg:absolute xl:absolute z-10 rounded-xl  lg:top-[50%] lg:translate-y-[-50%] lg:right-[8em] lg:shadow-[0px_0px_10px_rgb(0,0,0,0.5)] xl:top-[50%] xl:translate-y-[-50%] xl:right-[18em] xl:shadow-[0px_0px_10px_rgb(0,0,0,0.5)]"
          style={{ padding: "0.5em 1em" }}
        >
          <h2
            className="font-bold text-[#051827] text-[24px]"
            style={{ marginBottom: "5px" }}
          >
            04 - Remodelación M&B
          </h2>
          <p
            className=" text-[#051827cd] text-[18px]"
            style={{ marginBottom: "8px" }}
          >
            {t("all_projects.remodelacion")}
          </p>
          <div
            className=" flex flex-wrap justify-start items-center gap-2.5"
            style={{ marginBottom: "8px" }}
          >
            <div
              className=" font-semibold text-center rounded-[5px] italic text-[#051827] flex justify-center items-center transition-all duration-500 hover:border-[#f0f4f8] hover:scale-105 bg-[#e2e4e7] shadow-[0px_0px_10px_rgb(0,0,0,0.25)] select-none"
              style={{ padding: "0.15em 0.72em" }}
            >
              HTML5
            </div>
            <div
              className=" font-semibold text-center rounded-[5px] italic text-[#051827] flex justify-center items-center transition-all duration-500 hover:border-[#f0f4f8] hover:scale-105 bg-[#e2e4e7] shadow-[0px_0px_10px_rgb(0,0,0,0.25)] select-none"
              style={{ padding: "0.15em 0.72em" }}
            >
              CSS3
            </div>
            <div
              className=" font-semibold text-center rounded-[5px] italic text-[#051827] flex justify-center items-center transition-all duration-500 hover:border-[#f0f4f8] hover:scale-105 bg-[#e2e4e7] shadow-[0px_0px_10px_rgb(0,0,0,0.25)] select-none"
              style={{ padding: "0.15em 0.72em" }}
            >
              JavaScript
            </div>
          </div>

          <div className=" flex flex-row gap-4">
            <a
              href="https://glaginestra.github.io/RemodelacionMB/"
              target="_blank"
              className=" w-9 h-9 flex justify-center text-[#051827] items-center hover:shadow-[0px_0px_10px_rgb(0,0,0,0.25)] transition-all rounded-[5px] duration-500"
              rel="noopener noreferrer"
            >
              <FiExternalLink className="text-current" size={28} />
            </a>

            <a
              href="https://github.com/glaginestra/RemodelacionMB"
              target="_blank"
              className=" w-9 h-9 flex justify-center text-[#051827] self-center items-center hover:shadow-[0px_0px_10px_rgb(0,0,0,0.25)] transition-all rounded-[5px] duration-500"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-current" size={28} />
            </a>
          </div>
        </div>
      </div>

      <div className="h-auto md:h-auto lg:h-[25em] xl:h-[25em] w-full static md:static lg:relative xl:relative flex flex-col md:flex-col group justify-center items-center gap-1 md:gap-0 lg:gap-0 xl:gap-0 border-[#051827] border-2 rounded-[5px] shadow-[0px_0px_15px_rgb(0,0,0,0.3)] md:border-0 md:shadow-[0px_0px_0px_rgb(0,0,0,0.0)] lg:border-0 lg:shadow-[0px_0px_0px_rgb(0,0,0,0.0)]">
        <div className="w-full h-[60%] md:w-[70%] md:h-[60%] lg:w-[50%] lg:h-[100%] xl:w-[50%] xl:h-[100%] static md:static lg:absolute xl:absolute z-5 md:top-0 md:right-[6em] lg:top-0 lg:right-[6em] xl:top-0 xl:right-[6em] rounded-[5px] overflow-hidden">
          <img
            src={img_subway}
            alt="Imagen de Proyecto Subway"
            className="w-full h-full object-fit-cover object-center"
          />
          <div className="static lg:absolute inset-0 bg-gradient-to-r from-[#051827] to-[#05182720] transition-opacity duration-500 group-hover:opacity-0"></div>
        </div>
        <div
          className="bg-[#e2e4e700] lg:bg-[#e2e4e7] xl:bg-[#e2e4e7] w-full h-auto md:w-[70%] md:h-auto lg:w-[50%] lg:h-auto xl:w-[45%] xl:h-[82%] flex flex-col justify-around md:static lg:absolute xl:absolute z-10 rounded-xl  lg:top-[50%] lg:translate-y-[-50%] lg:left-[8em] lg:shadow-[0px_0px_10px_rgb(0,0,0,0.5)] xl:top-[50%] xl:translate-y-[-50%] xl:left-[18em] xl:shadow-[0px_0px_10px_rgb(0,0,0,0.5)]"
          style={{ padding: "0.5em 1em" }}
        >
          <h2
            className="font-bold text-[#051827] text-[24px]"
            style={{ marginBottom: "5px" }}
          >
            05 - Subway
          </h2>
          <p
            className=" text-[#051827cd] text-[18px]"
            style={{ marginBottom: "8px" }}
          >
            {t("all_projects.subway")}
          </p>
          <div
            className=" flex flex-wrap justify-start items-center gap-2.5"
            style={{ marginBottom: "8px" }}
          >
            <div
              className=" font-semibold text-center rounded-[5px] italic text-[#051827] flex justify-center items-center transition-all duration-500 hover:border-[#f0f4f8] hover:scale-105 bg-[#e2e4e7] shadow-[0px_0px_10px_rgb(0,0,0,0.25)] select-none"
              style={{ padding: "0.15em 0.72em" }}
            >
              HTML5
            </div>
            <div
              className=" font-semibold text-center rounded-[5px] italic text-[#051827] flex justify-center items-center transition-all duration-500 hover:border-[#f0f4f8] hover:scale-105 bg-[#e2e4e7] shadow-[0px_0px_10px_rgb(0,0,0,0.25)] select-none"
              style={{ padding: "0.15em 0.72em" }}
            >
              CSS3
            </div>
            <div
              className=" font-semibold text-center rounded-[5px] italic text-[#051827] flex justify-center items-center transition-all duration-500 hover:border-[#f0f4f8] hover:scale-105 bg-[#e2e4e7] shadow-[0px_0px_10px_rgb(0,0,0,0.25)] select-none"
              style={{ padding: "0.15em 0.72em" }}
            >
              JavaScript
            </div>
            <div
              className=" font-semibold text-center rounded-[5px] italic text-[#051827] flex justify-center items-center transition-all duration-500 hover:border-[#f0f4f8] hover:scale-105 bg-[#e2e4e7] shadow-[0px_0px_10px_rgb(0,0,0,0.25)] select-none"
              style={{ padding: "0.15em 0.72em" }}
            >
              API OSM
            </div>
          </div>
          <div className=" flex flex-row gap-4">
            <a
              href="https://subway-weld.vercel.app/"
              target="_blank"
              className=" w-9 h-9 flex justify-center text-[#051827] items-center hover:shadow-[0px_0px_10px_rgb(0,0,0,0.25)] transition-all rounded-[5px] duration-500"
              rel="noopener noreferrer"
            >
              <FiExternalLink className="text-current" size={28} />
            </a>

            <a
              href="https://github.com/glaginestra/Subway"
              target="_blank"
              className=" w-9 h-9 flex justify-center text-[#051827] items-center hover:shadow-[0px_0px_10px_rgb(0,0,0,0.25)] transition-all rounded-[5px] duration-500"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-current" size={28} />
            </a>
          </div>
        </div>
      </div>

      <div className=" h-auto md:h-auto lg:h-[25em] xl:h-[25em] w-full static md:static lg:relative xl:relative flex flex-col md:flex-col group justify-center items-center gap-1 md:gap-0 lg:gap-0 xl:gap-0 border-[#051827] border-2 rounded-[5px] shadow-[0px_0px_15px_rgb(0,0,0,0.3)] md:border-0 md:shadow-[0px_0px_0px_rgb(0,0,0,0.0)] lg:border-0 lg:shadow-[0px_0px_0px_rgb(0,0,0,0.0)]">
        <div className="w-full h-[60%] md:w-[70%] md:h-[60%] lg:w-[50%] lg:h-[100%] xl:w-[50%] xl:h-[100%] static md:static lg:absolute xl:absolute z-5 md:top-0 md:left-[6em] lg:top-0 lg:left-[6em] xl:top-0 xl:left-[6em] rounded-[5px] overflow-hidden">
          <img
            src={img_spotify}
            alt="Imagen de Proyecto Spotify"
            className="w-full h-full object-fit-cover object-center"
          />
          <div className="static lg:absolute inset-0 bg-gradient-to-l from-[#051827] to-[#05182720] transition-opacity duration-500 group-hover:opacity-0"></div>
        </div>
        <div
          className="bg-[#e2e4e700] lg:bg-[#e2e4e7] xl:bg-[#e2e4e7] w-full h-auto md:w-[70%] md:h-auto lg:w-[50%] lg:h-auto xl:w-[45%] xl:h-[82%] flex flex-col justify-around md:static lg:absolute xl:absolute z-10 rounded-xl  lg:top-[50%] lg:translate-y-[-50%] lg:right-[8em] lg:shadow-[0px_0px_10px_rgb(0,0,0,0.5)] xl:top-[50%] xl:translate-y-[-50%] xl:right-[18em] xl:shadow-[0px_0px_10px_rgb(0,0,0,0.5)]"
          style={{ padding: "0.5em 1em" }}
        >
          <h2
            className="font-bold text-[#051827] text-[24px]"
            style={{ marginBottom: "5px" }}
          >
            06 - Spotify
          </h2>
          <p
            className=" text-[#051827cd] text-[18px]"
            style={{ marginBottom: "8px" }}
          >
            {t("all_projects.spotify")}
          </p>
          <div
            className=" flex flex-wrap justify-start items-center gap-2.5"
            style={{ marginBottom: "8px" }}
          >
            <div
              className=" font-semibold text-center rounded-[5px] italic text-[#051827] flex justify-center items-center transition-all duration-500 hover:border-[#f0f4f8] hover:scale-105 bg-[#e2e4e7] shadow-[0px_0px_10px_rgb(0,0,0,0.25)] select-none"
              style={{ padding: "0.15em 0.72em" }}
            >
              HTML5
            </div>
            <div
              className=" font-semibold text-center rounded-[5px] italic text-[#051827] flex justify-center items-center transition-all duration-500 hover:border-[#f0f4f8] hover:scale-105 bg-[#e2e4e7] shadow-[0px_0px_10px_rgb(0,0,0,0.25)] select-none"
              style={{ padding: "0.15em 0.72em" }}
            >
              CSS3
            </div>
            <div
              className=" font-semibold text-center rounded-[5px] italic text-[#051827] flex justify-center items-center transition-all duration-500 hover:border-[#f0f4f8] hover:scale-105 bg-[#e2e4e7] shadow-[0px_0px_10px_rgb(0,0,0,0.25)] select-none"
              style={{ padding: "0.15em 0.72em" }}
            >
              JavaScript
            </div>
            <div
              className=" font-semibold text-center rounded-[5px] italic text-[#051827] flex justify-center items-center transition-all duration-500 hover:border-[#f0f4f8] hover:scale-105 bg-[#e2e4e7] shadow-[0px_0px_10px_rgb(0,0,0,0.25)] select-none"
              style={{ padding: "0.15em 0.72em" }}
            >
              API Spotify
            </div>
          </div>

          <div className=" flex flex-row gap-4">
            <a
              href="https://spotify-swart-psi.vercel.app/"
              target="_blank"
              className=" w-9 h-9 flex justify-center text-[#051827] items-center hover:shadow-[0px_0px_10px_rgb(0,0,0,0.25)] transition-all rounded-[5px] duration-500"
              rel="noopener noreferrer"
            >
              <FiExternalLink className="text-current" size={28} />
            </a>

            <a
              href="https://github.com/glaginestra/Spotify"
              target="_blank"
              className=" w-9 h-9 flex justify-center text-[#051827] items-center hover:shadow-[0px_0px_10px_rgb(0,0,0,0.25)] transition-all rounded-[5px] duration-500"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-current" size={28} />
            </a>
          </div>
        </div>
      </div>

      <div className=" h-auto md:h-auto lg:h-[25em] xl:h-[25em] w-full static md:static lg:relative xl:relative flex flex-col md:flex-col group justify-center items-center gap-1 md:gap-0 lg:gap-0 xl:gap-0 border-[#051827] border-2 rounded-[5px] shadow-[0px_0px_15px_rgb(0,0,0,0.3)] md:border-0 md:shadow-[0px_0px_0px_rgb(0,0,0,0.0)] lg:border-0 lg:shadow-[0px_0px_0px_rgb(0,0,0,0.0)]">
        <div className="w-full h-[60%] md:w-[70%] md:h-[60%] lg:w-[50%] lg:h-[100%] xl:w-[50%] xl:h-[100%] static md:static lg:absolute xl:absolute z-5 md:top-0 md:right-[6em] lg:top-0 lg:right-[6em] xl:top-0 xl:right-[6em] rounded-[5px] overflow-hidden">
          <img
            src={img_blog}
            alt="Imagen de Proyecto Portfolio"
            className="w-full h-full object-fit-cover object-center"
          />
          <div className="static lg:absolute inset-0 bg-gradient-to-r from-[#051827] to-[#05182720] transition-opacity duration-500 group-hover:opacity-0"></div>
        </div>
        <div
          className="bg-[#e2e4e700] lg:bg-[#e2e4e7] xl:bg-[#e2e4e7] w-full h-auto md:w-[70%] md:h-auto lg:w-[50%] lg:h-auto xl:w-[45%] xl:h-[82%] flex flex-col justify-around md:static lg:absolute xl:absolute z-10 rounded-xl lg:top-[50%] lg:translate-y-[-50%] lg:left-[8em] lg:shadow-[0px_0px_10px_rgb(0,0,0,0.5)] xl:top-[50%] xl:translate-y-[-50%] xl:left-[18em] xl:shadow-[0px_0px_10px_rgb(0,0,0,0.5)]"
          style={{ padding: "0.5em 1em" }}
        >
          <h2
            className="font-bold text-[#051827] text-[24px]"
            style={{ marginBottom: "5px" }}
          >
            07 - Blog
          </h2>
          <p
            className=" text-[#051827cd] text-[18px]"
            style={{ marginBottom: "8px" }}
          >
            {t("all_projects.blog")}
          </p>
          <div
            className=" flex flex-wrap justify-start items-center gap-2.5"
            style={{ marginBottom: "8px" }}
          >
            <div
              className=" font-semibold text-center rounded-[5px] italic text-[#051827] flex justify-center items-center transition-all duration-500 hover:border-[#f0f4f8] hover:scale-105 bg-[#e2e4e7] shadow-[0px_0px_10px_rgb(0,0,0,0.25)] select-none"
              style={{ padding: "0.15em 0.72em" }}
            >
              HTML5
            </div>
            <div
              className=" font-semibold text-center rounded-[5px] italic text-[#051827] flex justify-center items-center transition-all duration-500 hover:border-[#f0f4f8] hover:scale-105 bg-[#e2e4e7] shadow-[0px_0px_10px_rgb(0,0,0,0.25)] select-none"
              style={{ padding: "0.15em 0.72em" }}
            >
              CSS3
            </div>
            <div
              className=" font-semibold text-center rounded-[5px] italic text-[#051827] flex justify-center items-center transition-all duration-500 hover:border-[#f0f4f8] hover:scale-105 bg-[#e2e4e7] shadow-[0px_0px_10px_rgb(0,0,0,0.25)] select-none"
              style={{ padding: "0.15em 0.72em" }}
            >
              JavaScript
            </div>
          </div>
          <div className=" flex flex-row gap-4">
            <a
              href="https://glaginestra.github.io/Blog/"
              target="_blank"
              className=" w-9 h-9 flex justify-center text-[#051827] items-center hover:shadow-[0px_0px_10px_rgb(0,0,0,0.25)] transition-all rounded-[5px] duration-500"
              rel="noopener noreferrer"
            >
              <FiExternalLink className="text-current" size={28} />
            </a>

            <a
              href="https://github.com/glaginestra/Blog"
              target="_blank"
              className=" w-9 h-9 flex justify-center text-[#051827] items-center hover:shadow-[0px_0px_10px_rgb(0,0,0,0.25)] transition-all rounded-[5px] duration-500"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-current" size={28} />
            </a>
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[5em] flex flex-col justify-center items-center">
        <Link to="/">
          <button className=" w-[12em] h-[3em] bg-[#051827] border-1 border-white rounded-xs text-white font-bold cursor-pointer transition-colors duration-500 hover:bg-[#91dff9] hover:text-[#051827] ">
            {t("all_projects.inicio")}
          </button>
        </Link>
      </div>
    </section>
  );
}

export default BodyProjects;
