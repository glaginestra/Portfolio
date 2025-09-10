import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function LanguageSwitch() {
  const { i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(i18n.language === "en");

  const toggleLanguage = () => {
    const newLang = isEnglish ? "es" : "en";
    i18n.changeLanguage(newLang);
    setIsEnglish(!isEnglish);
  };

  return (
    <label className="hidden relative sm:inline-flex md:inline-flex lg:inline-flex xl:inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={isEnglish}
        onChange={toggleLanguage}
      />
      <div
        className=" peer rounded-full outline-none duration-100 after:duration-500 w-18 h-8 md:w-18 md:h-8 lg:w-20 lg:h-10 xl:w-20 xl:h-10 bg-[#00355e] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#f0f4f8]
        after:absolute after:top-1 after:left-1 after:flex after:justify-center after:items-center after:h-6 after:w-6 md:after:h-6 md:after:w-6 lg:after:h-8 lg:after:w-8 xl:after:h-8 xl:after:w-8 after:rounded-full after:bg-white after:font-bold after:text-lg
        peer-checked:after:translate-x-10 after:content-['🇪🇸'] peer-checked:after:content-['🇺🇸']"
      ></div>
    </label>
  );
}
