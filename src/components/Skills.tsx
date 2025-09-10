import python from "../assets/imagenes/python.svg";
import bootstrap from "../assets/imagenes/bootstrap.svg";
import django from "../assets/imagenes/django.svg";
import express from "../assets/imagenes/express.svg";
import figma from "../assets/imagenes/figma.svg";
import flask from "../assets/imagenes/flask.svg";
import github from "../assets/imagenes/github.svg";
import html5 from "../assets/imagenes/html5.svg";
import javascript from "../assets/imagenes/javascript.svg";
import nodedotjs from "../assets/imagenes/nodedotjs.svg";
// import nextdotjs from "../assets/imagenes/nextdotjs.svg";
import postgresql from "../assets/imagenes/postgresql.svg";
import react from "../assets/imagenes/react.svg";
import sqlalchemy from "../assets/imagenes/sqlalchemy.svg";
import sqlite from "../assets/imagenes/sqlite.svg";
import tailwindcss from "../assets/imagenes/tailwindcss.svg";
import typescript from "../assets/imagenes/typescript.svg";
import vite from "../assets/imagenes/vite.svg";
import css3 from "../assets/imagenes/css3.svg";
import vscode from "../assets/imagenes/vscode.svg";
import sqlserver from "../assets/imagenes/sqlserver.svg";
import { useTranslation } from "react-i18next";

function Skills() {
  const { t } = useTranslation();
  return (
    <section
      id="habilidades"
      className="h-auto md:h-[86em] lg:h-[86em] xl:h-[86em] w-full bg-[#051827] flex flex-col md:items-center lg:items-center xl:items-center"
      style={{
        fontFamily: "Titillium Web",
        marginTop: "-3px",
        padding: "50px 0px",
      }}
    >
      <div className="w-[100vw] md:w-[90vw] lg:w-[90vw] xl:w-[90vw]">
        <h2
          className="text-[#f0f4f8] text-center md:text-left lg:text-left xl:text-left font-bold text-4xl lg:text-5xl xl:text-5xl"
          style={{ marginBottom: "8px" }}
        >
          {t("skills.titulo")}
        </h2>
        <div className=" w-full h-auto flex flex-col gap-5 md:gap-10 lg:gap-10 xl:gap-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-[#f0f4f8] text-center md:text-left lg:text-left xl:text-left font-bold text-2xl md:text-4xl lg:text-4xl xl:text-4xl">
              {t("skills.lenguajes")}
            </h2>
            <div className="w-full h-full md:h-[10em] lg:h-[10em] xl:h-[10em]  flex flex-row gap-3 flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap md:gap-[1.5em] lg:gap-[1.5em] xl:gap-[1.5em] justify-center items-center md:justify-start md:items-start lg:justify-start lg:items-start xl:justify-start xl:items-start">
              <div className="h-[6em] w-[5em] md:h-full md:w-[8em] lg:h-full lg:w-[8em] xl:h-full xl:w-[8em] bg-[#051827] border-2 border-[#91dff9] shadow-[0px_0px_10px_skyblue] rounded-xl flex flex-col justify-center items-center transition-all duration-500 hover:scale-105 hover:border-[#f0f4f8] hover:shadow-[0px_0px_10px_white]">
                <img
                  className="w-[35%] h-[35%] md:w-[50%] md:h-[50%] lg:w-[50%] lg:h-[50%] xl:w-[50%] xl:h-[50%]"
                  src={python}
                  alt="python"
                />
                <h2 className="text-[#91dff9] font-bold text-[12px] md:text-xl lg:text-xl xl:text-xl">
                  Python
                </h2>
              </div>
              <div className="h-[6em] w-[5em] md:h-full md:w-[8em] lg:h-full lg:w-[8em] xl:h-full xl:w-[8em] bg-[#051827] border-2 border-[#91dff9] shadow-[0px_0px_10px_skyblue] rounded-xl flex flex-col justify-center items-center transition-all duration-500 hover:scale-105 hover:border-[#f0f4f8] hover:shadow-[0px_0px_10px_white]">
                <img
                  className="w-[35%] h-[35%] md:w-[50%] md:h-[50%] lg:w-[50%] lg:h-[50%] xl:w-[50%] xl:h-[50%]"
                  src={javascript}
                  alt="javascript"
                />
                <h2 className="text-[#91dff9] font-bold text-[12px] md:text-xl lg:text-xl xl:text-xl">
                  JavaScript
                </h2>
              </div>
              <div className="h-[6em] w-[5em] md:h-full md:w-[8em] lg:h-full lg:w-[8em] xl:h-full xl:w-[8em] bg-[#051827] border-2 border-[#91dff9] shadow-[0px_0px_10px_skyblue] rounded-xl flex flex-col justify-center items-center transition-all duration-500 hover:scale-105 hover:border-[#f0f4f8] hover:shadow-[0px_0px_10px_white]">
                <img
                  className="w-[35%] h-[35%] md:w-[50%] md:h-[50%] lg:w-[50%] lg:h-[50%] xl:w-[50%] xl:h-[50%]"
                  src={typescript}
                  alt="typescript"
                />
                <h2 className="text-[#91dff9] font-bold text-[12px] md:text-xl lg:text-xl xl:text-xl">
                  TypeScript
                </h2>
              </div>
              <div className="h-[6em] w-[5em] md:h-full md:w-[8em] lg:h-full lg:w-[8em] xl:h-full xl:w-[8em] bg-[#051827] border-2 border-[#91dff9] shadow-[0px_0px_10px_skyblue] rounded-xl flex flex-col justify-center items-center transition-all duration-500 hover:scale-105 hover:border-[#f0f4f8] hover:shadow-[0px_0px_10px_white]">
                <img
                  className="w-[35%] h-[35%] md:w-[50%] md:h-[50%] lg:w-[50%] lg:h-[50%] xl:w-[50%] xl:h-[50%]"
                  src={css3}
                  alt="css"
                />
                <h2 className="text-[#91dff9] font-bold text-[12px] md:text-xl lg:text-xl xl:text-xl">
                  CSS3
                </h2>
              </div>
              <div className="h-[6em] w-[5em] md:h-full md:w-[8em] lg:h-full lg:w-[8em] xl:h-full xl:w-[8em] bg-[#051827] border-2 border-[#91dff9] shadow-[0px_0px_10px_skyblue] rounded-xl flex flex-col justify-center items-center transition-all duration-500 hover:scale-105 hover:border-[#f0f4f8] hover:shadow-[0px_0px_10px_white]">
                <img
                  className="w-[35%] h-[35%] md:w-[50%] md:h-[50%] lg:w-[50%] lg:h-[50%] xl:w-[50%] xl:h-[50%]"
                  src={html5}
                  alt="html5"
                />
                <h2 className="text-[#91dff9] font-bold text-[12px] md:text-xl lg:text-xl xl:text-xl">
                  HTML5
                </h2>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-[#f0f4f8] text-center md:text-left lg:text-left xl:text-left font-bold text-2xl md:text-4xl lg:text-4xl xl:text-4xl">
              {t("skills.frontend")}
            </h2>
            <div className="w-full h-full md:h-[10em] lg:h-[10em] xl:h-[10em] flex flex-row gap-3 flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap md:gap-[1.5em] lg:gap-[1.5em] xl:gap-[1.5em] justify-center items-center md:justify-start md:items-start lg:justify-start lg:items-start xl:justify-start xl:items-start">
              <div className="h-[6em] w-[5em] md:h-full md:w-[8em] lg:h-full lg:w-[8em] xl:h-full xl:w-[8em] bg-[#051827] border-2 border-[#91dff9] shadow-[0px_0px_10px_skyblue] rounded-xl flex flex-col justify-center items-center transition-all duration-500 hover:scale-105 hover:border-[#f0f4f8] hover:shadow-[0px_0px_10px_white]">
                <img
                  className="w-[35%] h-[35%] md:w-[50%] md:h-[50%] lg:w-[50%] lg:h-[50%] xl:w-[50%] xl:h-[50%]"
                  src={react}
                  alt="react"
                />
                <h2 className="text-[#91dff9] font-bold text-[12px] md:text-xl lg:text-xl xl:text-xl">
                  React Js
                </h2>
              </div>
              <div className="h-[6em] w-[5em] md:h-full md:w-[8em] lg:h-full lg:w-[8em] xl:h-full xl:w-[8em] bg-[#051827] border-2 border-[#91dff9] shadow-[0px_0px_10px_skyblue] rounded-xl flex flex-col justify-center items-center transition-all duration-500 hover:scale-105 hover:border-[#f0f4f8] hover:shadow-[0px_0px_10px_white]">
                <img
                  className="w-[35%] h-[35%] md:w-[50%] md:h-[50%] lg:w-[50%] lg:h-[50%] xl:w-[50%] xl:h-[50%]"
                  src={bootstrap}
                  alt="bootstrap"
                />
                <h2 className="text-[#91dff9] font-bold text-[12px] md:text-xl lg:text-xl xl:text-xl">
                  Bootstrap
                </h2>
              </div>
              <div className="h-[6em] w-[5em] md:h-full md:w-[8em] lg:h-full lg:w-[8em] xl:h-full xl:w-[8em] bg-[#051827] border-2 border-[#91dff9] shadow-[0px_0px_10px_skyblue] rounded-xl flex flex-col justify-center items-center transition-all duration-500 hover:scale-105 hover:border-[#f0f4f8] hover:shadow-[0px_0px_10px_white]">
                <img
                  className="w-[35%] h-[35%] md:w-[50%] md:h-[50%] lg:w-[50%] lg:h-[50%] xl:w-[50%] xl:h-[50%]"
                  src={tailwindcss}
                  alt="tailwind"
                />
                <h2 className="text-[#91dff9] font-bold text-[12px] md:text-xl lg:text-xl xl:text-xl">
                  Tailwind CSS
                </h2>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-[#f0f4f8] text-center md:text-left lg:text-left xl:text-left font-bold text-2xl md:text-4xl lg:text-4xl xl:text-4xl">
              {t("skills.backend")}
            </h2>
            <div className="w-full h-full md:h-[10em] lg:h-[10em] xl:h-[10em] flex flex-row gap-3 flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap md:gap-[1.5em] lg:gap-[1.5em] xl:gap-[1.5em] justify-center items-center md:justify-start md:items-start lg:justify-start lg:items-start xl:justify-start xl:items-start">
              <div className="h-[6em] w-[5em] md:h-full md:w-[8em] lg:h-full lg:w-[8em] xl:h-full xl:w-[8em] bg-[#051827] border-2 border-[#91dff9] shadow-[0px_0px_10px_skyblue] rounded-xl flex flex-col justify-center items-center transition-all duration-500 hover:scale-105 hover:border-[#f0f4f8] hover:shadow-[0px_0px_10px_white]">
                <img
                  className="w-[35%] h-[35%] md:w-[50%] md:h-[50%] lg:w-[50%] lg:h-[50%] xl:w-[50%] xl:h-[50%]"
                  src={flask}
                  alt="flask"
                />
                <h2 className="text-[#91dff9] font-bold text-[12px] md:text-xl lg:text-xl xl:text-xl">
                  Flask
                </h2>
              </div>
              <div className="h-[6em] w-[5em] md:h-full md:w-[8em] lg:h-full lg:w-[8em] xl:h-full xl:w-[8em] bg-[#051827] border-2 border-[#91dff9] shadow-[0px_0px_10px_skyblue] rounded-xl flex flex-col justify-center items-center transition-all duration-500 hover:scale-105 hover:border-[#f0f4f8] hover:shadow-[0px_0px_10px_white]">
                <img
                  className="w-[35%] h-[35%] md:w-[50%] md:h-[50%] lg:w-[50%] lg:h-[50%] xl:w-[50%] xl:h-[50%]"
                  src={django}
                  alt="django"
                />
                <h2 className="text-[#91dff9] font-bold text-[12px] md:text-xl lg:text-xl xl:text-xl">
                  Django
                </h2>
              </div>
              <div className="h-[6em] w-[5em] md:h-full md:w-[8em] lg:h-full lg:w-[8em] xl:h-full xl:w-[8em] bg-[#051827] border-2 border-[#91dff9] shadow-[0px_0px_10px_skyblue] rounded-xl flex flex-col justify-center items-center transition-all duration-500 hover:scale-105 hover:border-[#f0f4f8] hover:shadow-[0px_0px_10px_white]">
                <img
                  className="w-[35%] h-[35%] md:w-[50%] md:h-[50%] lg:w-[50%] lg:h-[50%] xl:w-[50%] xl:h-[50%]"
                  src={nodedotjs}
                  alt="nodedotjs"
                />
                <h2 className="text-[#91dff9] font-bold text-[12px] md:text-xl lg:text-xl xl:text-xl">
                  Node Js
                </h2>
                <p className="text-[#c1c1c1] italic  text-[10px] md:text-[13px] lg:text-[13px] xl:text-[13px]">
                  {t("skills.aprendiendo")}
                </p>
              </div>
              <div className="h-[6em] w-[5em] md:h-full md:w-[8em] lg:h-full lg:w-[8em] xl:h-full xl:w-[8em] bg-[#051827] border-2 border-[#91dff9] shadow-[0px_0px_10px_skyblue] rounded-xl flex flex-col justify-center items-center transition-all duration-500 hover:scale-105 hover:border-[#f0f4f8] hover:shadow-[0px_0px_10px_white]">
                <img
                  className="w-[35%] h-[35%] md:w-[50%] md:h-[50%] lg:w-[50%] lg:h-[50%] xl:w-[50%] xl:h-[50%]"
                  src={express}
                  alt="express"
                />
                <h2 className="text-[#91dff9] font-bold text-[12px] md:text-xl lg:text-xl xl:text-xl">
                  Express Js
                </h2>
                <p className="text-[#c1c1c1] italic text-[10px] md:text-[13px]">
                  {t("skills.aprendiendo")}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-[#f0f4f8] text-center md:text-left lg:text-left xl:text-left font-bold text-2xl md:text-4xl lg:text-4xl xl:text-4xl">
              {t("skills.db")}
            </h2>
            <div className="w-full h-full md:h-[10em] lg:h-[10em] xl:h-[10em] flex flex-row gap-3 flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap md:gap-[1.5em] lg:gap-[1.5em] xl:gap-[1.5em] justify-center items-center md:justify-start md:items-start lg:justify-start lg:items-start xl:justify-start xl:items-start">
              <div className="h-[6em] w-[5em] md:h-full md:w-[8em] lg:h-full lg:w-[8em] xl:h-full xl:w-[8em] bg-[#051827] border-2 border-[#91dff9] shadow-[0px_0px_10px_skyblue] rounded-xl flex flex-col justify-center items-center transition-all duration-500 hover:scale-105 hover:border-[#f0f4f8] hover:shadow-[0px_0px_10px_white]">
                <img
                  className="w-[35%] h-[35%] md:w-[50%] md:h-[50%] lg:w-[50%] lg:h-[50%] xl:w-[50%] xl:h-[50%]"
                  src={sqlserver}
                  alt="sqlserver"
                />
                <h2 className="text-[#91dff9] font-bold text-[12px] md:text-xl lg:text-xl xl:text-xl">
                  SQL Server
                </h2>
              </div>
              <div className="h-[6em] w-[5em] md:h-full md:w-[8em] lg:h-full lg:w-[8em] xl:h-full xl:w-[8em] bg-[#051827] border-2 border-[#91dff9] shadow-[0px_0px_10px_skyblue] rounded-xl flex flex-col justify-center items-center transition-all duration-500 hover:scale-105 hover:border-[#f0f4f8] hover:shadow-[0px_0px_10px_white]">
                <img
                  className="w-[35%] h-[35%] md:w-[50%] md:h-[50%] lg:w-[50%] lg:h-[50%] xl:w-[50%] xl:h-[50%]"
                  src={sqlite}
                  alt="sqlite"
                />
                <h2 className="text-[#91dff9] font-bold text-[12px] md:text-xl lg:text-xl xl:text-xl">
                  SQLite
                </h2>
              </div>
              <div className="h-[6em] w-[5em] md:h-full md:w-[8em] lg:h-full lg:w-[8em] xl:h-full xl:w-[8em] bg-[#051827] border-2 border-[#91dff9] shadow-[0px_0px_10px_skyblue] rounded-xl flex flex-col justify-center items-center transition-all duration-500 hover:scale-105 hover:border-[#f0f4f8] hover:shadow-[0px_0px_10px_white]">
                <img
                  className="w-[35%] h-[35%] md:w-[50%] md:h-[50%] lg:w-[50%] lg:h-[50%] xl:w-[50%] xl:h-[50%]"
                  src={postgresql}
                  alt="postgresql"
                />
                <h2 className="text-[#91dff9] font-bold text-[12px] md:text-xl lg:text-xl xl:text-xl">
                  Postgre SQL
                </h2>
              </div>
              <div className="h-[6em] w-[5em] md:h-full md:w-[8em] lg:h-full lg:w-[8em] xl:h-full xl:w-[8em] bg-[#051827] border-2 border-[#91dff9] shadow-[0px_0px_10px_skyblue] rounded-xl flex flex-col justify-center items-center transition-all duration-500 hover:scale-105 hover:border-[#f0f4f8] hover:shadow-[0px_0px_10px_white]">
                <img
                  className="w-[35%] h-[35%] md:w-[50%] md:h-[50%] lg:w-[50%] lg:h-[50%] xl:w-[50%] xl:h-[50%]"
                  src={sqlalchemy}
                  alt="sqlalchemy"
                />
                <h2 className="text-[#91dff9] font-bold text-[12px] md:text-xl lg:text-xl xl:text-xl">
                  SQLAlchemy
                </h2>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-[#f0f4f8] text-center md:text-left lg:text-left xl:text-left font-bold text-2xl md:text-4xl lg:text-4xl xl:text-4xl">
              {t("skills.herramientas")}
            </h2>
            <div className="w-full h-full md:h-[10em] lg:h-[10em] xl:h-[10em] flex flex-row gap-3 flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap md:gap-[1.5em] lg:gap-[1.5em] xl:gap-[1.5em] justify-center items-center md:justify-start md:items-start lg:justify-start lg:items-start xl:justify-start xl:items-start">
              <div className="h-[6em] w-[5em] md:h-full md:w-[8em] lg:h-full lg:w-[8em] xl:h-full xl:w-[8em] bg-[#051827] border-2 border-[#91dff9] shadow-[0px_0px_10px_skyblue] rounded-xl flex flex-col justify-center items-center transition-all duration-500 hover:scale-105 hover:border-[#f0f4f8] hover:shadow-[0px_0px_10px_white]">
                <img
                  className="w-[35%] h-[35%] md:w-[50%] md:h-[50%] lg:w-[50%] lg:h-[50%] xl:w-[50%] xl:h-[50%]"
                  src={github}
                  alt="github"
                />
                <h2 className="text-[#91dff9] font-bold text-[12px] md:text-xl lg:text-xl xl:text-xl">
                  GitHub
                </h2>
              </div>
              <div className="h-[6em] w-[5em] md:h-full md:w-[8em] lg:h-full lg:w-[8em] xl:h-full xl:w-[8em] bg-[#051827] border-2 border-[#91dff9] shadow-[0px_0px_10px_skyblue] rounded-xl flex flex-col justify-center items-center transition-all duration-500 hover:scale-105 hover:border-[#f0f4f8] hover:shadow-[0px_0px_10px_white]">
                <img
                  className="w-[35%] h-[35%] md:w-[50%] md:h-[50%] lg:w-[50%] lg:h-[50%] xl:w-[50%] xl:h-[50%]"
                  src={vite}
                  alt="vite"
                />
                <h2 className="text-[#91dff9] font-bold text-[12px] md:text-xl lg:text-xl xl:text-xl">
                  Vite
                </h2>
              </div>
              <div className="h-[6em] w-[5em] md:h-full md:w-[8em] lg:h-full lg:w-[8em] xl:h-full xl:w-[8em] bg-[#051827] border-2 border-[#91dff9] shadow-[0px_0px_10px_skyblue] rounded-xl flex flex-col justify-center items-center transition-all duration-500 hover:scale-105 hover:border-[#f0f4f8] hover:shadow-[0px_0px_10px_white]">
                <img
                  className="w-[35%] h-[35%] md:w-[50%] md:h-[50%] lg:w-[50%] lg:h-[50%] xl:w-[50%] xl:h-[50%]"
                  src={vscode}
                  alt="vscode"
                />
                <h2 className="text-[#91dff9] font-bold text-[12px] md:text-xl lg:text-xl xl:text-xl">
                  VSCode
                </h2>
              </div>
              <div className="h-[6em] w-[5em] md:h-full md:w-[8em] lg:h-full lg:w-[8em] xl:h-full xl:w-[8em] bg-[#051827] border-2 border-[#91dff9] shadow-[0px_0px_10px_skyblue] rounded-xl flex flex-col justify-center items-center transition-all duration-500 hover:scale-105 hover:border-[#f0f4f8] hover:shadow-[0px_0px_10px_white]">
                <img
                  className="w-[35%] h-[35%] md:w-[50%] md:h-[50%] lg:w-[50%] lg:h-[50%] xl:w-[50%] xl:h-[50%]"
                  src={figma}
                  alt="figma"
                />
                <h2 className="text-[#91dff9] font-bold text-[12px] md:text-xl lg:text-xl xl:text-xl">
                  Figma
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
