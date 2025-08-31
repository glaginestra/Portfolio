import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function SocialMedia() {
  return (
    <div
      className="flex flex-row w-[15em] h-auto justify-around items-center"
      style={{ padding: "8px 10px" }}
    >
      <a
        href="https://www.instagram.com/gasty_l03"
        target="_blank"
        rel="noopener noreferrer"
        className="w-auto h-auto rounded-[7px] shadow-[0px_0px_10px_rgb(255,255,255,0.5)] text-white bg-[#051827] hover:text-white hover:bg-[#C13584] hover:scale-105 transition-all duration-500"
        style={{ padding: "8px" }}
      >
        <FaInstagram size={35} className="text-current"></FaInstagram>
      </a>
      <a
        href="https://www.linkedin.com/in/gastón-laginestra-713ab0249"
        target="_blank"
        rel="noopener noreferrer"
        className="w-auto h-auto rounded-[7px] shadow-[0px_0px_10px_rgb(255,255,255,0.5)] text-white bg-[#051827] hover:text-white hover:bg-[#0e76a8] hover:scale-105 transition-all duration-500"
        style={{ padding: "8px" }}
      >
        <FaLinkedin size={35} className="text-current"></FaLinkedin>
      </a>
      <a
        href="https://github.com/glaginestra"
        target="_blank"
        rel="noopener noreferrer"
        className="w-auto h-auto rounded-[7px] shadow-[0px_0px_10px_rgb(255,255,255,0.5)] text-white bg-[#051827] hover:text-white hover:bg-[#24292e] hover:scale-105 transition-all duration-500"
        style={{ padding: "8px" }}
      >
        <FaGithub size={35} className="text-current"></FaGithub>
      </a>
    </div>
  );
}

export default SocialMedia;
