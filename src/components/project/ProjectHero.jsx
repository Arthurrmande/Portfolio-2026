function ProjectHero({ project }) {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black px-6 text-white">

      <div className="relative flex max-w-[1000px] items-center justify-center text-center">
        <h1 className="relative z-10 max-w-[900px] font-archivo text-[38px] font-black italic uppercase leading-[0.9] tracking-[-0.04em] sm:text-[52px] md:text-[64px] lg:text-[80px]">
          {project.number}. {project.title}
        </h1>

        <span
          className="absolute left-1/2 top-1/2 z-20 whitespace-nowrap font-burgues text-[90px] leading-none text-[#6A00FF] sm:text-[120px] md:text-[150px] lg:text-[190px] lg:[@media(max-height:850px)]:text-[165px]"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          Projet
        </span>
      </div>

      <div className="absolute left-[5%] top-1/2 hidden -translate-y-1/2 flex-col items-center gap-1 lg:flex">
        <p className="font-archivo text-[8px] font-bold uppercase">
          Arthur
        </p>

        <img src="/icons/icon_planete.svg" alt="" className="h-4 w-4" />
      </div>

      <div className="absolute right-[5%] top-1/2 hidden -translate-y-1/2 flex-col items-center gap-1 lg:flex">
        <p className="font-archivo text-[8px] font-bold uppercase">
          Mandé
        </p>

        <img src="/icons/icon_planete.svg" alt="" className="h-4 w-4" />
      </div>

      <a href="#project-context" className="absolute bottom-[8%] left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="font-archivo text-[8px] font-bold uppercase">
          Scroll
        </span>

        <span className="text-lg leading-none">
          ↓
        </span>
      </a>

    </section>
  );
}

export default ProjectHero;