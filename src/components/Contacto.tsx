import SocialMedia from "../components/SocialMedia";
import { FaEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Contacto() {
  const { t } = useTranslation();
  return (
    <section
      className=" w-full h-[300px] bg-[#051827] flex flex-col justify-start items-center text-white"
      style={{ fontFamily: "Titillium Web", padding: "2em 0" }}
    >
      <h2
        id="contacto"
        className="font-bold text-5xl text-center"
        style={{ marginBottom: "15px" }}
      >
        {t("contacto.titulo")}
      </h2>
      <SocialMedia></SocialMedia>
      <a
        href="mailto:gnlaginestra@gmail.com"
        className=" bg-[#f0f4f8] text-[#051827] rounded-[5px] w-[9.9em] flex flex-row justify-center items-center gap-4 font-bold text-xl  hover:scale-105 transition-all duration-300"
        style={{ padding: "10px 20px", marginTop: "20px" }}
      >
        <p>{t("contacto.contactar")}</p>
        <FaEnvelope></FaEnvelope>
      </a>
    </section>
  );
}

export default Contacto;
