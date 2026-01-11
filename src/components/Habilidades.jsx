// Habilidades.jsx
import React from "react";

import AnimatedTitle from "./AnimatedTitle";
import CircleTitle from "./CircleTitle";

const skills = [
  { name: "HTML5", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML5" /> },
  { name: "CSS3", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS3" /> },
  { name: "JavaScript", icon: <i className="devicon-javascript-plain colored"></i> },
  { name: "React", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" /> },
  { name: "Bootstrap", icon: <i className="devicon-bootstrap-plain colored"></i> },
  { name: "Tailwind", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind" /> },
  { name: "DaisyUI", icon: <img src="https://img.daisyui.com/images/daisyui/mark-static.svg" alt="DaisyUI" /> },
  { name: "Python", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" /> },
  { name: "Npm", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" alt="Npm" /> },
  { name: "Postman", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" alt="Postman" /> },
  { name: "MySQL", icon: <i className="devicon-mysql-original colored"></i> },
  { name: "PostgreSQL", icon: <i className="devicon-postgresql-plain colored"></i> },
  { name: "Firebase", icon: <i className="devicon-firebase-plain colored"></i> },
  { name: "Git", icon: <i className="devicon-git-plain colored"></i> },
  { name: "GitHub", icon: <i className="devicon-github-original"></i> },
  { name: "Figma", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" alt="Figma" /> },
  { name: "Visual Studio Code", icon: <i className="devicon-vscode-plain colored"></i> },
  { name: "PowerShell", icon: <i className="devicon-powershell-plain"></i> },
  { name: "Windows", icon: <i className="devicon-windows11-original colored"></i> },
  { name: "Linux", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" alt="Linux" /> },
  { name: "Kali Linux", icon: <i className="devicon-kalilinux-original colored"></i> },
  { name: "Azure", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" alt="Azure" /> },
];

export default function Habilidades() {
  return (
    <section id="habilidades" className="bg-[var(--bg-color-figma)] py-10">
      {/* Título */}
      <div className="flex flex-col items-center mb-6">
        <CircleTitle />
        <AnimatedTitle
          title="H<b>a</b>bili<b>d</b>ad<b>e</b>s"
          containerClass="!text-black text-center"
        />
      </div>

      {/* Detalhes decorativos */}
      <div className="flex justify-center items-center mb-10">
        <div className="w-16 h-1 bg-[var(--text-color-figma)]"></div>
        <div className="w-8 h-1 bg-[var(--bg-color-header)] mx-2"></div>
        <div className="w-16 h-1 bg-[var(--text-color-figma)]"></div>
      </div>

      {/* Skills */}
      <div className="w-full flex flex-wrap p-4 gap-y-8 gap-x-28 justify-center box-border mt-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group bg-[#171717] text-white/80 flex items-center justify-center 
                       px-11 py-5 rounded-xl cursor-pointer border-[3px] border-[white] 
                       outline outline-[3px] outline-transparent 
                       transition duration-500 ease-in-out 
                       hover:rotate-6 hover:scale-110 hover:bg-[#3c3c3c] hover:outline-[#12121b]"
          >
            <div
              className="text-[2rem] mr-4 h-8 w-8 flex cursor-pointer 
                        transition-transform duration-500 ease-in-out 
                        group-hover:rotate-[360deg] group-hover:scale-125">
              {skill.icon}
            </div>
            <span className="text-xl text-center">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
