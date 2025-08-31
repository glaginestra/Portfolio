import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <footer
      className=" w-full h-16 bg-[#051827] flex justify-center items-center text-white"
      style={{ fontFamily: "Titillium Web" }}
    >
      <p>&copy;{t("footer.texto")}</p>
    </footer>
  );
}

export default Footer;
