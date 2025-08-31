import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitch from "./LanguageSwitch";

function HeaderProject() {
  const { t } = useTranslation();
  return (
    <header
      className=" top-0 left-0 w-full m-0 h-[10vh] shadow-[0px_0px_15px_white] fixed flex justify-between z-50 transition-colors duration-300 items-center bg-[#051827] text-white gap-15"
      style={{ fontFamily: "Titillium Web", padding: "0 2.5em" }}
    >
      <h2 className=" font-bold text-2xl">Gastón Nicolás Laginestra</h2>

      <div className="flex flex-row gap-[50px] justify-center items-center">
        <Link to="/">
          <h2 className=" font-bold text-2xl">{t("all_projects.inicio")}</h2>
        </Link>
        <LanguageSwitch></LanguageSwitch>
      </div>
    </header>
  );
}

export default HeaderProject;
