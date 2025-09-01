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
      className="h-[86em] w-full bg-[#051827]"
      style={{ fontFamily: "Titillium Web", padding: "2em 4em" }}
    >
      <h2 className="text-[#f0f4f8] font-bold text-5xl">
        {t("skills.titulo")}
      </h2>
      <div className=" w-full h-auto" style={{ marginTop: "2em" }}>
        <h2
          className="text-[#f0f4f8] font-bold text-4xl"
          style={{ marginTop: "2em", marginBottom: "0.4em" }}
        >
          {t("skills.lenguajes")}
        </h2>
        <div
          className="w-full h-[10em] flex flex-row gap-[1.5em]"
          style={{ padding: "0.5em 1em" }}
        >
          <div className="h-full w-[8em] bg-[#051827] border-2 border-[#91dff9] shadow-[0px_0px_10px_skyblue] rounded-xl flex flex-col justify-center items-center transition-all duration-500 hover:scale-105 hover:border-[#f0f4f8] hover:shadow-[0px_0px_10px_white]">
            <img className="w-[50%] h-[50%]" src={python} alt="python" />
            <h2 className="text-[#91dff9] font-bold text-xl">Python</h2>
          </div>
          <div className="h-full w-[8em] bg-[#051827] border-2 border-[#91dff9] shadow-[0px_0px_10px_skyblue] rounded-xl flex flex-col justify-center items-center transition-all duration-500 hover:scale-105 hover:border-[#f0f4f8] hover:shadow-[0px_0px_10px_white]">
            <img
              className="w-[50%] h-[50%]"
              src={javascript}
              alt="javascript"
            />
            <h2 className="text-[#91dff9] font-bold text-xl">JavaScript</h2>
          </div>
          <div className="h-full w-[8em] bg-[#051827] border-2 border-[#91dff9] shadow-[0px_0px_10px_skyblue] rounded-xl flex flex-col justify-center items-center transition-all duration-500 hover:scale-105 hover:border-[#f0f4f8] hover:shadow-[0px_0px_10px_white]">
            <img
              className="w-[50%] h-[50%]"
              src={typescript}
              alt="typescript"
            />
            <h2 className="text-[#91dff9] font-bold text-xl">TypeScript</h2>
          </div>
          <div className="h-full w-[8em] bg-[#051827] border-2 border-[#91dff9] shadow-[0px_0px_10px_skyblue] rounded-xl flex flex-col justify-center items-center transition-all duration-500 hover:scale-105 hover:border-[#f0f4f8] hover:shadow-[0px_0px_10px_white]">
            <img className="w-[50%] h-[50%]" src={css3} alt="css" />
            <h2 className="text-[#91dff9] font-bold text-xl">CSS3</h2>
          </div>
          <div className="h-full w-[8em] bg-[#051827] border-2 border-[#91dff9] shadow-[0px_0px_10px_skyblue] rounded-xl flex flex-col justify-center items-center transition-all duration-500 hover:scale-105 hover:border-[#f0f4f8] hover:shadow-[0px_0px_10px_white]">
            <img className="w-[50%] h-[50%]" src={html5} alt="html5" />
            <h2 className="text-[#91dff9] font-bold text-xl">HTML5</h2>
          </div>
        </div>
        <h2
          className="text-[#f0f4f8] font-bold text-4xl"
          style={{ marginTop: "1em", marginBottom: "0.4em" }}
        >
          {t("skills.frontend")}
        </h2>
        <div
          className="w-full h-[10em] flex flex-row gap-[1.5em]"
          style={{ padding: "0.5em 1em" }}
        >
          <div className="h-full w-[8em] bg-[#051827] border-2 border-[#91dff9] shadow-[0px_0px_10px_skyblue] rounded-xl flex flex-col justify-center items-center transition-all duration-500 hover:scale-105 hover:border-[#f0f4f8] hover:shadow-[0px_0px_10px_white]">
            <img className="w-[50%] h-[50%]" src={react} alt="react" />
            <h2 className="text-[#91dff9] font-bold text-xl">React Js</h2>
          </div>
          <div className="h-full w-[8em] bg-[#051827] border-2 border-[#91dff9] shadow-[0px_0px_10px_skyblue] rounded-xl flex flex-col justify-center items-center transition-all duration-500 hover:scale-105 hover:border-[#f0f4f8] hover:shadow-[0px_0px_10px_white]">
            <img className="w-[50%] h-[50%]" src={bootstrap} alt="bootstrap" />
            <h2 className="text-[#91dff9] font-bold text-xl">Bootstrap</h2>
          </div>
          <div className="h-full w-[8em] bg-[#051827] border-2 border-[#91dff9] shadow-[0px_0px_10px_skyblue] rounded-xl flex flex-col justify-center items-center transition-all duration-500 hover:scale-105 hover:border-[#f0f4f8] hover:shadow-[0px_0px_10px_white]">
            <img className="w-[50%] h-[50%]" src={tailwindcss} alt="tailwind" />
            <h2 className="text-[#91dff9] font-bold text-xl">Tailwind CSS</h2>
          </div>
          {/* <div className="h-full w-[8em] bg-[#051827] border-2 border-[#91dff9] shadow-[0px_0px_10px_skyblue] rounded-xl flex flex-col justify-center items-center transition-all duration-500 hover:scale-105 hover:border-[#f0f4f8] hover:shadow-[0px_0px_10px_white]">
            <img className="w-[50%] h-[50%]" src={nextdotjs} alt="react" />
            <h2 className="text-[#91dff9] font-bold text-xl">Next Js</h2>
            <p className="text-[#c1c1c1] italic text-[13px]">
              {t("skills.aprendiendo")}
            </p>
          </div> */}
        </div>
        <h2
          className="text-[#f0f4f8] font-bold text-4xl"
          style={{ marginTop: "1em", marginBottom: "0.4em" }}
        >
          {t("skills.backend")}
        </h2>
        <div
          className="w-full h-[10em] flex flex-row gap-[1.5em]"
          style={{ padding: "0.5em 1em" }}
        >
          <div className="h-full w-[8em] bg-[#051827] border-2 border-[#91dff9] shadow-[0px_0px_10px_skyblue] rounded-xl flex flex-col justify-center items-center transition-all duration-500 hover:scale-105 hover:border-[#f0f4f8] hover:shadow-[0px_0px_10px_white]">
            <img className="w-[50%] h-[50%]" src={flask} alt="flask" />
            <h2 className="text-[#91dff9] font-bold text-xl">Flask</h2>
          </div>
          <div className="h-full w-[8em] bg-[#051827] border-2 border-[#91dff9] shadow-[0px_0px_10px_skyblue] rounded-xl flex flex-col justify-center items-center transition-all duration-500 hover:scale-105 hover:border-[#f0f4f8] hover:shadow-[0px_0px_10px_white]">
            <img className="w-[50%] h-[50%]" src={django} alt="django" />
            <h2 className="text-[#91dff9] font-bold text-xl">Django</h2>
          </div>
          <div className="h-full w-[8em] bg-[#051827] border-2 border-[#91dff9] shadow-[0px_0px_10px_skyblue] rounded-xl flex flex-col justify-center items-center transition-all duration-500 hover:scale-105 hover:border-[#f0f4f8] hover:shadow-[0px_0px_10px_white]">
            <img className="w-[50%] h-[50%]" src={nodedotjs} alt="nodedotjs" />
            <h2 className="text-[#91dff9] font-bold text-xl">Node Js</h2>
            <p className="text-[#c1c1c1] italic text-[13px]">Aprendiendo...</p>
          </div>
          <div className="h-full w-[8em] bg-[#051827] border-2 border-[#91dff9] shadow-[0px_0px_10px_skyblue] rounded-xl flex flex-col justify-center items-center transition-all duration-500 hover:scale-105 hover:border-[#f0f4f8] hover:shadow-[0px_0px_10px_white]">
            <img className="w-[50%] h-[50%]" src={express} alt="express" />
            <h2 className="text-[#91dff9] font-bold text-xl">Express Js</h2>
            <p className="text-[#c1c1c1] italic text-[13px]">Aprendiendo...</p>
          </div>
        </div>
        <h2
          className="text-[#f0f4f8] font-bold text-4xl"
          style={{ marginTop: "1em", marginBottom: "0.4em" }}
        >
          {t("skills.db")}
        </h2>
        <div
          className="w-full h-[10em] flex flex-row gap-[1.5em]"
          style={{ padding: "0.5em 1em" }}
        >
          <div className="h-full w-[8em] bg-[#051827] border-2 border-[#91dff9] shadow-[0px_0px_10px_skyblue] rounded-xl flex flex-col justify-center items-center transition-all duration-500 hover:scale-105 hover:border-[#f0f4f8] hover:shadow-[0px_0px_10px_white]">
            <img className="w-[50%] h-[50%]" src={sqlserver} alt="sqlserver" />
            <h2 className="text-[#91dff9] font-bold text-xl">SQL Server</h2>
          </div>
          <div className="h-full w-[8em] bg-[#051827] border-2 border-[#91dff9] shadow-[0px_0px_10px_skyblue] rounded-xl flex flex-col justify-center items-center transition-all duration-500 hover:scale-105 hover:border-[#f0f4f8] hover:shadow-[0px_0px_10px_white]">
            <img className="w-[50%] h-[50%]" src={sqlite} alt="sqlite" />
            <h2 className="text-[#91dff9] font-bold text-xl">SQLite</h2>
          </div>
          <div className="h-full w-[8em] bg-[#051827] border-2 border-[#91dff9] shadow-[0px_0px_10px_skyblue] rounded-xl flex flex-col justify-center items-center transition-all duration-500 hover:scale-105 hover:border-[#f0f4f8] hover:shadow-[0px_0px_10px_white]">
            <img
              className="w-[50%] h-[50%]"
              src={postgresql}
              alt="postgresql"
            />
            <h2 className="text-[#91dff9] font-bold text-xl">Postgre SQL</h2>
          </div>
          <div className="h-full w-[8em] bg-[#051827] border-2 border-[#91dff9] shadow-[0px_0px_10px_skyblue] rounded-xl flex flex-col justify-center items-center transition-all duration-500 hover:scale-105 hover:border-[#f0f4f8] hover:shadow-[0px_0px_10px_white]">
            <img
              className="w-[50%] h-[50%]"
              src={sqlalchemy}
              alt="sqlalchemy"
            />
            <h2 className="text-[#91dff9] font-bold text-xl">SQLAlchemy</h2>
          </div>
        </div>
        <h2
          className="text-[#f0f4f8] font-bold text-4xl"
          style={{ marginTop: "1em", marginBottom: "0.4em" }}
        >
          {t("skills.herramientas")}
        </h2>
        <div
          className="w-full h-[10em] flex flex-row gap-[1.5em]"
          style={{ padding: "0.5em 1em" }}
        >
          <div className="h-full w-[8em] bg-[#051827] border-2 border-[#91dff9] shadow-[0px_0px_10px_skyblue] rounded-xl flex flex-col justify-center items-center transition-all duration-500 hover:scale-105 hover:border-[#f0f4f8] hover:shadow-[0px_0px_10px_white]">
            <img className="w-[50%] h-[50%]" src={github} alt="github" />
            <h2 className="text-[#91dff9] font-bold text-xl">GitHub</h2>
          </div>
          <div className="h-full w-[8em] bg-[#051827] border-2 border-[#91dff9] shadow-[0px_0px_10px_skyblue] rounded-xl flex flex-col justify-center items-center transition-all duration-500 hover:scale-105 hover:border-[#f0f4f8] hover:shadow-[0px_0px_10px_white]">
            <img className="w-[50%] h-[50%]" src={vite} alt="vite" />
            <h2 className="text-[#91dff9] font-bold text-xl">Vite</h2>
          </div>
          <div className="h-full w-[8em] bg-[#051827] border-2 border-[#91dff9] shadow-[0px_0px_10px_skyblue] rounded-xl flex flex-col justify-center items-center transition-all duration-500 hover:scale-105 hover:border-[#f0f4f8] hover:shadow-[0px_0px_10px_white]">
            <img className="w-[50%] h-[50%]" src={vscode} alt="vscode" />
            <h2 className="text-[#91dff9] font-bold text-xl">VSCode</h2>
          </div>
          <div className="h-full w-[8em] bg-[#051827] border-2 border-[#91dff9] shadow-[0px_0px_10px_skyblue] rounded-xl flex flex-col justify-center items-center transition-all duration-500 hover:scale-105 hover:border-[#f0f4f8] hover:shadow-[0px_0px_10px_white]">
            <img className="w-[50%] h-[50%]" src={figma} alt="figma" />
            <h2 className="text-[#91dff9] font-bold text-xl">Figma</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
