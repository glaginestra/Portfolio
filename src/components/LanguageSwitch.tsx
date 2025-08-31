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
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={isEnglish}
        onChange={toggleLanguage}
      />
      <div
        className="peer rounded-full outline-none duration-100 after:duration-500 w-20 h-10 bg-[#00355e] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#f0f4f8]
        after:absolute after:top-1 after:left-1 after:flex after:justify-center after:items-center after:h-8 after:w-8 after:rounded-full after:bg-white after:font-bold after:text-lg
        peer-checked:after:translate-x-10 after:content-['🇪🇸'] peer-checked:after:content-['🇺🇸']"
      ></div>
    </label>
  );
}
