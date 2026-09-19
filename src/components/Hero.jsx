function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6"
    >

      {/* Prénom gauche */}
      <div className="absolute left-[5%] top-[42%] hidden lg:flex flex-col items-center">
        <p className="text-[9px] font-bold uppercase">
          Arthur
        </p>

        <img src="/icons/icon_planete.svg" alt="planete" className="w-4 h-4"/>
      </div>


      {/* Contenu central */}
      <div className="relative flex flex-col items-center text-center">

        {/* Arthur mobile */}
        <div className="mb-16 flex flex-col items-center lg:hidden">
          <p className="text-[8px] font-bold uppercase">
            Arthur
          </p>

          <img src="/icons/icon_planete.svg" alt="planete" className="w-4 h-4"/>
        </div>


        {/* Titre */}
        <div className="relative">

          <h1 className="font-archivo text-[clamp(2.5rem,8vw,8rem)] font-black italic leading-[0.75] tracking-[-0.06em]">
            BIENVENUE
            <br />
            SUR MON
          </h1>

          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-burgues text-[clamp(5rem,13vw,13rem)] leading-none text-purple">
            Portfolio
          </span>

        </div>


        {/* Mandé mobile */}
        <div className="mt-16 lg:hidden flex flex-col items-center"> 
          <p className="text-[8px] font-bold uppercase">
            Mandé
          </p>

          <img src="/icons/icon_planete.svg" alt="planete" className="w-4 h-4"/>
        </div>

      </div>


      {/* Nom droite desktop */}
      <div className="absolute right-[5%] top-[42%] hidden lg:flex flex-col items-center">
        <p className="text-[9px] font-bold uppercase">
          Mandé
        </p>

        <img src="/icons/icon_planete.svg" alt="planete" className="w-4 h-4"/>
      </div>


      {/* Scroll */}
      <a
        href="#profile"
        className="
          absolute
          bottom-[8%]
          left-1/2
          flex
          -translate-x-1/2
          flex-col
          items-center
          gap-2
        "
      >
        <span className="text-[8px] font-bold uppercase">
          Scroll
        </span>

        <span className="text-lg leading-none">
          ↓
        </span>
      </a>

    </section>
  );
}

export default Hero;