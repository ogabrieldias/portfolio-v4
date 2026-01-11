import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
          Bem vindo(a) ao meu portfólio!
        </p>

        <AnimatedTitle
          title="Cad<b>a</b> <br /> detalh<b>e </b>i<b>m</b>por<b>t</b>a"
          containerClass="mt-5 !text-black text-center"
        />


         <p className="text-gray-500 w-[70%] text-center ">
            Tenho 20 anos, mais de 33 certificações em tecnologia e estudo Engenharia de Software.
            Meu objetivo é atuar como desenvolvedor, transformando conhecimento em resultados reais.  
            Se busca energia, disciplina e vontade de inovar, aqui estou.
          </p>

        <div className="about-subtext mt-8">
          
         
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.jpg"
            loading="lazy"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default About;
