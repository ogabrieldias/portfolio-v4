import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { TiLocationArrow } from "react-icons/ti";

import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden" id="home">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        {/* Vídeo fixo hero-1 */}
        <video
          src="videos/hero-1.mp4"
          autoPlay
          loop
          muted
          className="absolute left-0 top-0 size-full object-cover object-center"
        />

        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          Di<b>A</b>s
        </h1>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              G<b>a</b>bri<b>e</b>l
            </h1>

            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              Desenvolvedor que transforma código em experiência! <br />
            </p>

            
            <Button
              id="realm-btn"
              title="Download CV"
              leftIcon={<TiLocationArrow />}
              containerClass="!bg-violet-300 flex-center gap-1 text-white"
              href="/curriculo/Currículo-Gabriel.pdf"
              download="Currículo-Gabriel"
            />
          </div>
        </div>
      </div>

      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
        Di<b>a</b>s
      </h1>
    </div>
  );
};

export default Home;
