import Header from "../components/Header";
import Presentacion from "../components/Presentacion";
import About from "../components/About";
import Skills from "../components/Skills";
import Separador from "../components/Separador";
import SeparadorPresentacion from "../components/SeparadorPresentacion";
import Proyectos from "../components/Proyectos";
import ScrollToTop from "../components/ScrollToTop";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <ScrollToTop></ScrollToTop>
      <Header></Header>
      <Presentacion></Presentacion>
      <SeparadorPresentacion></SeparadorPresentacion>
      <About></About>
      <Separador></Separador>
      <Skills></Skills>
      <SeparadorPresentacion></SeparadorPresentacion>
      <Proyectos></Proyectos>
      <Contacto></Contacto>
      <Footer></Footer>
    </>
  );
}

export default Home;
