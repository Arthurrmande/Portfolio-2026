import { useLanguage } from "../context/LanguageContext";

function Hero() {
  const { language } = useLanguage();
  const base = import.meta.env.BASE_URL;

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6"
    >
      <div className="absolute left-[5%] top-[42%] hidden flex-col items-center lg:flex">
        <p className="text-[9px] font-bold uppercase">Arthur</p>

        <img src={`${base}icons/icon_planete.svg`} alt="" className="h-4 w-4" />
      </div>

      <div className="relative flex flex-col items-center text-center">
        <div className="mb-16 flex flex-col items-center lg:hidden">
          <p className="text-[8px] font-bold uppercase">Arthur</p>

          <img
            src={`${base}icons/icon_planete.svg`}
            alt=""
            className="h-4 w-4"
          />
        </div>

        <div className="relative">
          <h1 className="font-archivo text-[clamp(2.5rem,8vw,8rem)] font-black italic leading-[0.75] tracking-[-0.06em]">
            {language === "fr" ? (
              <>
                BIENVENUE
                <br />
                SUR MON
              </>
            ) : (
              <>
                WELCOME TO
                <br />
                MY
              </>
            )}
          </h1>

          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-burgues text-[clamp(5rem,13vw,13rem)] leading-none text-purple">
            Portfolio
          </span>
        </div>

        <div className="mt-16 flex flex-col items-center lg:hidden">
          <p className="text-[8px] font-bold uppercase">Mandé</p>

          <img
            src={`${base}icons/icon_planete.svg`}
            alt=""
            className="h-4 w-4"
          />
        </div>
      </div>

      <div className="absolute right-[5%] top-[42%] hidden flex-col items-center lg:flex">
        <p className="text-[9px] font-bold uppercase">Mandé</p>

        <img src={`${base}icons/icon_planete.svg`} alt="" className="h-4 w-4" />
      </div>

      <a
        href="#profile"
        className="absolute bottom-[8%] left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[8px] font-bold uppercase">Scroll</span>

        <span className="text-lg leading-none">↓</span>
      </a>
    </section>
  );
}

export default Hero;
