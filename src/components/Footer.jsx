import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";

const socialLinks = [
  { href: "www.linkedin.com/in/ogabrieldias", icon: <img src="/icons/linkedin.svg" loading="lazy" alt="Linkedin" width="32" height="32" /> },
  { href: "https://github.com/ogabrieldias", icon: <img src="/icons/github.svg" loading="lazy" alt="Github" width="32" height="32" /> },
  { href: "https://www.instagram.com/_ogabrieldias/", icon: <img src="/icons/instagram.svg" loading="lazy" alt="Instagram" width="32" height="32" /> }
];

const Footer = () => {
  return (
    <footer className="w-screen bg-black py-4 text-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          Copyright © by Gabriel Bernardino Dias
        </p>

        <div className="flex justify-center gap-x-10 w-60px md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white transform transition-transform duration-300 ease-in-out hover:scale-120 hover:rotate-[360deg]"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          All rights reserved - 28/11/2025
        </a>
      </div>
    </footer>
  );
};

export default Footer;
