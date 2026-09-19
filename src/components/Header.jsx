import { useEffect, useState } from "react";
import navigation from "../data/navigation";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = navigation
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full px-6 py-6 lg:px-16 bg-black">

      {/* Navigation desktop */}
      <nav className="hidden items-center justify-center gap-10 lg:flex">
        {navigation.map((item, index) => {
          const isActive = activeSection === item.id;

          return (
            <div key={item.id} className="flex items-center gap-10">

              {/* Lien */}
              <a
                href={item.href}
                className={`group text-xs font-bold italic transition-colors duration-200 hover:text-[#6A00FF] ${isActive ? "text-[#6A00FF]" : "text-white"}`}
              >
                <span className={`transition-opacity duration-200 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                  [
                </span>

                {" "}
                {item.name}
                {" "}

                <span className={`transition-opacity duration-200 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                  ]
                </span>
              </a>

              {/* Étoile entre les liens */}
              {index < navigation.length - 1 && (
                <img src="/icons/icon_star.svg" alt="star" className="w-4 h-4"/>
              )}

            </div>
          );
        })}
      </nav>


      {/* Bouton menu mobile */}
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


      {/* Navigation mobile */}
      {menuOpen && (
        <nav className="absolute top-full left-0 flex w-full flex-col items-center gap-6 bg-black px-6 py-10 lg:hidden">

          {navigation.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`font-bold italic transition-colors duration-200 ${isActive ? "text-[#6A00FF]" : "text-white hover:text-[#6A00FF]"}`}
              >
                {isActive && "[ "}

                {item.name}

                {isActive && " ]"}
              </a>
            );
          })}

        </nav>
      )}

    </header>
  );
}

export default Header;