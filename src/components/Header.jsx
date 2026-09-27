import { useEffect, useState } from "react";
import navigation from "../data/navigation";
import { useLanguage } from "../context/LanguageContext";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { language, toggleLanguage } = useLanguage();
  const base = import.meta.env.BASE_URL;

  useEffect(() => {
    const handleScroll = () => {
      const detectionPosition =
        window.scrollY + window.innerHeight * 0.3;

      let currentSection = "home";

      navigation.forEach((item) => {
        const section = document.getElementById(item.id);

        if (!section) return;

        if (section.offsetTop <= detectionPosition) {
          currentSection = item.id;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const LanguageToggle = () => (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={language === "fr" ? "Passer en anglais" : "Switch to French"}
      className="relative flex h-[26px] w-[58px] shrink-0 items-center rounded-full border border-white/30 bg-white/5 p-[2px] transition-colors duration-300 hover:border-[#6A00FF]"
    >
      <span
        className={`absolute left-[2px] top-[2px] h-[20px] w-[26px] rounded-full bg-[#6A00FF] transition-transform duration-300 ${
          language === "fr" ? "translate-x-0" : "translate-x-[26px]"
        }`}
      ></span>

      <span
        className={`relative z-10 flex w-1/2 items-center justify-center font-archivo text-[8px] font-bold transition-colors duration-300 ${
          language === "fr" ? "text-white" : "text-white/40"
        }`}
      >
        FR
      </span>

      <span
        className={`relative z-10 flex w-1/2 items-center justify-center font-archivo text-[8px] font-bold transition-colors duration-300 ${
          language === "en" ? "text-white" : "text-white/40"
        }`}
      >
        EN
      </span>
    </button>
  );

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-black px-6 py-6 lg:px-16">

      <nav className="hidden items-center justify-center gap-10 lg:flex">
        {navigation.map((item, index) => {
          const isActive = activeSection === item.id;

          return (
            <div key={item.id} className="flex items-center gap-10">

              <a
                href={item.href}
                className="group"
              >
                <p
                  className={`font-archivo text-xs font-bold italic transition-colors duration-200 group-hover:text-[#6A00FF] ${
                    isActive ? "text-[#6A00FF]" : "text-white"
                  }`}
                >
                  <span
                    className={`transition-opacity duration-200 ${
                      isActive
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    [
                  </span>

                  {" "}
                  {item.name[language]}
                  {" "}

                  <span
                    className={`transition-opacity duration-200 ${
                      isActive
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    ]
                  </span>
                </p>
              </a>

              {index < navigation.length - 1 && (
                <img
                  src={`${base}icons/icon_star.svg`}
                  alt=""
                  className="h-4 w-4"
                />
              )}

            </div>
          );
        })}

        <LanguageToggle />
      </nav>

      <div className="ml-auto flex items-center justify-end gap-6 lg:hidden">

        <LanguageToggle />

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={language === "fr" ? "Ouvrir le menu" : "Open menu"}
          className="flex flex-col gap-1.5"
        >
          <span className="h-px w-5 bg-white"></span>
          <span className="h-px w-5 bg-white"></span>
          <span className="h-px w-5 bg-white"></span>
        </button>

      </div>

      {menuOpen && (
        <nav className="absolute left-0 top-full flex w-full flex-col items-center gap-6 bg-black px-6 py-10 lg:hidden">

          {navigation.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="group"
              >
                <p
                  className={`font-archivo font-bold italic transition-colors duration-200 group-hover:text-[#6A00FF] ${
                    isActive ? "text-[#6A00FF]" : "text-white"
                  }`}
                >
                  {isActive && "[ "}
                  {item.name[language]}
                  {isActive && " ]"}
                </p>
              </a>
            );
          })}

        </nav>
      )}

    </header>
  );
}

export default Header;