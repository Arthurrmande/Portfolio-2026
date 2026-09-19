import { useEffect, useRef, useState } from "react";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const dragStart = useRef(null);

  const previousProject = () => {
    setActiveIndex((current) =>
      current === 0 ? projects.length - 1 : current - 1
    );
  };

  const nextProject = () => {
    setActiveIndex((current) =>
      current === projects.length - 1 ? 0 : current + 1
    );
  };

  const getPosition = (index) => {
    const previousIndex =
      (activeIndex - 1 + projects.length) % projects.length;

    const nextIndex =
      (activeIndex + 1) % projects.length;

    if (index === activeIndex) return "active";
    if (index === previousIndex) return "previous";
    if (index === nextIndex) return "next";

    const difference =
      (index - activeIndex + projects.length) % projects.length;

    if (difference < projects.length / 2) {
      return "hiddenRight";
    }

    return "hiddenLeft";
  };

  const handlePointerDown = (event) => {
    dragStart.current = event.clientX;
  };

  const handlePointerUp = (event) => {
    if (dragStart.current === null) return;

    const difference = event.clientX - dragStart.current;

    if (difference > 50) {
      previousProject();
    }

    if (difference < -50) {
      nextProject();
    }

    dragStart.current = null;
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === 0 ? projects.length - 1 : current - 1
        );
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((current) =>
          current === projects.length - 1 ? 0 : current + 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-white text-black"
    >

      {/* ========================================
          BACKGROUND GRILLE UNIQUE
      ======================================== */}
      <div
        className="absolute left-0 top-0 h-[850px] w-full sm:h-[950px] lg:h-[1050px]"
        style={{
          backgroundImage: "url('/images/background_projects.png')",
          backgroundSize: "100% auto",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      />


      {/* ========================================
          PROJETS
      ======================================== */}
      <div className="relative z-10 px-6 pt-40 pb-20 lg:px-20 lg:pt-52 lg:pb-24">

        <div className="mx-auto w-full max-w-[1600px]">

          {/* Titre */}
          <div className="relative mb-4 w-fit">
            <h2 className="font-archivo text-[48px] font-black italic leading-none tracking-[-0.05em] lg:text-[60px]">
              PROJETS
            </h2>

            <span
              className="absolute left-1/2 top-1/2 whitespace-nowrap font-burgues text-[70px] leading-none text-[#6A00FF] lg:text-[60px]"
              style={{ transform: "translate(-50%, -50%)" }}
            >
              Mes
            </span>
          </div>


          {/* Carousel */}
          <div
            className="relative mx-auto h-[330px] w-full touch-pan-y select-none sm:h-[400px] lg:h-[460px]"
            style={{
              perspective: "900px",
              perspectiveOrigin: "50% 50%",
              transformStyle: "preserve-3d",
            }}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                position={getPosition(index)}
                onClick={() => {
                  const position = getPosition(index);

                  if (position === "previous") {
                    previousProject();
                  }

                  if (position === "next") {
                    nextProject();
                  }
                }}
              />
            ))}
          </div>


          {/* Points */}
          <div className="flex items-center justify-center gap-2">
            {projects.map((project, index) => (
              <button
                key={project.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Afficher le projet ${index + 1}`}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-[#6A00FF]"
                    : "bg-black/30 hover:bg-black/60"
                }`}
              />
            ))}
          </div>

        </div>
      </div>


      {/* ========================================
          DÉGRADÉ VERS CONTACT
      ======================================== */}
      <div className="relative z-10 h-[450px] bg-gradient-to-b from-transparent via-[#c8a5ff] to-[#6A00FF] sm:h-[520px] lg:h-[600px]" />

    </section>
  );
}

export default Projects;