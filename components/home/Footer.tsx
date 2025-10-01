import { FaFacebookF, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-2 pt-4 pb-10">
      <div className="flex items-center gap-4 text-[1.9rem]">
        <a aria-label="Intgram" href="#">
          <FaInstagram />
        </a>
        <a aria-label="Facebook" href="#">
            <FaFacebookF />
        </a>
      </div>
      <div className="text-sm flex flex-col gap-2">
        <a href="#">info@pure-clean.ch</a>
        <p>Reinigungsfirma Zürich</p>
        <p>©2025 von PureClean</p>
      </div>
    </div>
  );
};

export default Footer;
