import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { useTranslation } from "react-i18next";

export default function Typewriter() {
  const el = useRef<HTMLSpanElement>(null); // referencia al span
  const { t } = useTranslation();

  useEffect(() => {
    if (!el.current) return;

    const typed = new Typed(el.current, {
      strings: [t("presentacion.estudiante"), t("presentacion.desarrollador")],
      typeSpeed: 50, // velocidad de escritura
      backSpeed: 50, // velocidad de borrado
      loop: true, // repetir infinitamente
      showCursor: true, // cursor parpadeante
      cursorChar: "|", // caracter del cursor
    });

    // cleanup al desmontar
    return () => {
      typed.destroy();
    };
  }, [t]);

  return (
    <h2 className="font-titillium text-white italic text-xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl mt-0">
      <span ref={el}></span>
    </h2>
  );
}
