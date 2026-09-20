import { useEffect, useState } from "react";
import navigation from "../data/navigation";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-black px-6 py-6 lg:px-16">

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
                  {item.name}
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
                  src="/icons/icon_star.svg"
                  alt="star"
                  className="h-4 w-4"
                />
              )}

            </div>
          );
        })}
      </nav>

      <button
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Ouvrir le menu"
        className="ml-auto flex flex-col gap-1.5 lg:hidden"
      >
        <span className="h-px w-5 bg-white"></span>
        <span className="h-px w-5 bg-white"></span>
        <span className="h-px w-5 bg-white"></span>
      </button>

      {menuOpen && (
        <nav className="absolute top-full left-0 flex w-full flex-col items-center gap-6 bg-black px-6 py-10 lg:hidden">

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
                  {item.name}
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