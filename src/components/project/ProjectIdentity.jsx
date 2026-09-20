import { useState } from "react";

function ProjectIdentity({ project }) {
  const [colorsOpen, setColorsOpen] = useState(false);

  const getTextColor = (hex) => {
    const darkColors = [
      "#000000",
      "#1A1A18",
      "#D62828",
      "#F6383F",
      "#E12114",
      "#0D7CB1",
      "#6E8D2C",
      "#334A9A",
      "#DE1B7B",
      "#714394",
      "#335AA6",
      "#7B4494",
    ];

    return darkColors.includes(hex.toUpperCase()) ? "#FFFFFF" : "#000000";
  };

  const ColorShape = ({ color, className = "" }) => (
    <div
      className={`flex aspect-[0.48] flex-col items-center justify-center rounded-tl-[999px] rounded-br-[999px] border border-white px-2 text-center ${className}`}
      style={{
        backgroundColor: color.hex,
        color: getTextColor(color.hex),
      }}
    >
      <p className="mb-3 text-[7px] font-normal sm:text-[8px] lg:mb-4 lg:text-[9px]">
        {color.hex}
      </p>

      <p className="mb-3 whitespace-nowrap text-[7px] font-normal sm:text-[8px] lg:mb-4 lg:text-[9px]">
        {color.rgb}
      </p>

      <p className="text-[7px] font-normal sm:text-[8px] lg:text-[9px]">
        {color.name}
      </p>
    </div>
  );

  const PlusButton = ({ className = "" }) => (
    <button
      type="button"
      onClick={() => setColorsOpen(true)}
      aria-label="Afficher toutes les couleurs"
      className={`group flex aspect-[0.48] cursor-pointer items-center justify-center rounded-tl-[999px] rounded-br-[999px] border border-white bg-black transition-colors duration-300 hover:bg-[#6A00FF] ${className}`}
    >
      <span className="font-archivo text-[40px] font-light leading-none transition-transform duration-300 group-hover:rotate-90 lg:text-[50px]">
        +
      </span>
    </button>
  );

  const MobileColors = () => (
    <div className="flex items-center justify-center gap-5 sm:hidden">
      <ColorShape
        color={project.identity.colors[0]}
        className="w-[105px] flex-none"
      />

      <PlusButton className="w-[105px] flex-none" />
    </div>
  );

  const ColorsPopup = () => {
    if (!colorsOpen) return null;

    return (
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-6 py-10 backdrop-blur-sm"
        onClick={() => setColorsOpen(false)}
      >
        <div
          className="relative max-h-[85vh] w-full max-w-[1100px] overflow-y-auto rounded-2xl bg-[#141414] px-6 py-10 sm:px-10 lg:px-14 lg:py-14"
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            onClick={() => setColorsOpen(false)}
            aria-label="Fermer"
            className="absolute right-6 top-5 cursor-pointer font-archivo text-[30px] font-light text-white transition-colors duration-200 hover:text-[#6A00FF]"
          >
            ×
          </button>

          <h3 className="mb-10 text-center font-archivo text-lg font-bold italic text-[#6A00FF] lg:text-xl">
            [ Toutes les couleurs ]
          </h3>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
            {project.identity.colors.map((color) => (
              <ColorShape
                key={color.hex}
                color={color}
                className="w-[90px] flex-none sm:w-[105px]"
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  if (project.identity.type === "cards") {
    const visibleColors = project.identity.colors.slice(0, 7);

    return (
      <section
        id="project-identity"
        className="relative bg-black px-6 pt-0 pb-24 text-white sm:px-10 lg:px-16 lg:pb-40"
      >
        <div className="mx-auto w-full max-w-[1600px]">

          <div className="relative mb-[70px] w-fit">
            <h2 className="font-archivo text-[42px] font-black italic uppercase leading-none tracking-[-0.04em] sm:text-[50px] lg:text-[60px]">
              L’IDENTITÉ
            </h2>

            <span
              className="absolute left-1/2 top-1/2 whitespace-nowrap font-burgues text-[65px] leading-none text-[#6A00FF] sm:text-[75px] lg:text-[85px]"
              style={{ transform: "translate(-50%, -50%)" }}
            >
              Visuel
            </span>
          </div>

          <div className="mb-24 lg:mb-32">

            <h3 className="mb-12 text-center text-sm font-bold italic text-[#6A00FF] sm:text-base lg:text-xl">
              [ Typographie ]
            </h3>

            <div className="flex justify-center">
              {project.identity.fonts.map((font) => (
                <div
                  key={font.name}
                  className={`flex flex-col items-center text-center ${font.className}`}
                >
                  <p className="mb-3 text-xl font-medium uppercase lg:text-2xl">
                    {font.name}
                  </p>

                  <p className="max-w-[180px] text-[10px] font-medium leading-[1.15] sm:text-xs">
                    {font.alphabet}
                  </p>
                </div>
              ))}
            </div>

          </div>

          <div>

            <h3 className="mb-12 text-center text-sm font-bold italic text-[#6A00FF] sm:text-base lg:text-xl">
              [ Couleurs ]
            </h3>

            <MobileColors />

            <div className="mx-auto hidden w-full max-w-[1200px] flex-wrap justify-center gap-5 sm:flex lg:flex-nowrap">

              {visibleColors.map((color) => (
                <ColorShape
                  key={color.hex}
                  color={color}
                  className="w-[120px] flex-none lg:w-[125px]"
                />
              ))}

              <PlusButton className="w-[120px] flex-none lg:w-[125px]" />

            </div>

          </div>

        </div>

        <ColorsPopup />
      </section>
    );
  }

  const hasCustomIdentity =
    project.identity.description && project.identity.patterns;

  if (hasCustomIdentity) {
    return (
      <section
        id="project-identity"
        className="relative bg-black px-6 pt-0 pb-24 text-white sm:px-10 lg:px-16 lg:pb-40"
      >
        <div className="mx-auto w-full max-w-[1600px]">

          <div className="relative mb-[70px] w-fit">
            <h2 className="font-archivo text-[42px] font-black italic uppercase leading-none tracking-[-0.04em] sm:text-[50px] lg:text-[60px]">
              L’IDENTITÉ
            </h2>

            <span
              className="absolute left-1/2 top-1/2 whitespace-nowrap font-burgues text-[65px] leading-none text-[#6A00FF] sm:text-[75px] lg:text-[85px]"
              style={{ transform: "translate(-50%, -50%)" }}
            >
              Visuel
            </span>
          </div>

          <div className="mb-24 grid grid-cols-1 gap-16 lg:mb-32 lg:grid-cols-2 lg:items-center lg:gap-24">

            <div>
              <h3 className="mb-8 text-sm font-bold italic text-[#6A00FF] sm:text-base lg:text-xl">
                [ Direction artistique ]
              </h3>

              <p className="max-w-[600px] text-[11px] leading-[1.6] text-white/70 sm:text-xs lg:text-sm">
                {project.identity.description}
              </p>
            </div>

            <div>
              <h3 className="mb-8 text-sm font-bold italic text-[#6A00FF] sm:text-base lg:text-xl">
                [ Typographie ]
              </h3>

              <div className="flex flex-col items-start">
                {project.identity.fonts.map((font) => (
                  <div key={font.name} className={font.className}>
                    <p className="mb-3 text-xl font-medium uppercase lg:text-2xl">
                      {font.name}
                    </p>

                    <p className="max-w-[220px] text-[10px] font-medium leading-[1.15] sm:text-xs">
                      {font.alphabet}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:items-center lg:gap-24">

            <div>
              <h3 className="mb-10 text-sm font-bold italic text-[#6A00FF] sm:text-base lg:text-xl">
                [ Couleurs ]
              </h3>

              <MobileColors />

              <div className="hidden grid-cols-3 justify-items-start gap-4 sm:grid sm:max-w-[500px] sm:gap-6">
                {project.identity.colors.map((color) => (
                  <ColorShape
                    key={color.hex}
                    color={color}
                    className="w-full max-w-[120px]"
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-10 text-sm font-bold italic text-[#6A00FF] sm:text-base lg:text-xl">
                [ Éléments graphiques ]
              </h3>

              <div className="grid grid-cols-4 gap-4 sm:max-w-[600px] sm:gap-6 lg:gap-8">
                {project.identity.patterns.map((pattern, index) => (
                  <div
                    key={index}
                    className="flex aspect-square items-center justify-center overflow-hidden"
                  >
                    <img
                      src={pattern}
                      alt=""
                      className="h-full w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        <ColorsPopup />
      </section>
    );
  }

  return (
    <section
      id="project-identity"
      className="relative bg-black px-6 pt-0 pb-24 text-white sm:px-10 lg:px-16 lg:pb-40"
    >
      <div className="mx-auto w-full max-w-[1600px]">

        <div className="relative mb-[38px] w-fit">
          <h2 className="font-archivo text-[42px] font-black italic uppercase leading-none tracking-[-0.04em] sm:text-[50px] lg:text-[60px]">
            L’IDENTITÉ
          </h2>

          <span
            className="absolute left-1/2 top-1/2 whitespace-nowrap font-burgues text-[65px] leading-none text-[#6A00FF] sm:text-[75px] lg:text-[85px]"
            style={{ transform: "translate(-50%, -50%)" }}
          >
            Visuel
          </span>
        </div>

        <div className="mb-24 lg:mb-32">

          <h3 className="mb-12 text-center text-sm font-bold italic text-[#6A00FF] sm:text-base lg:text-xl">
            [ Typographies ]
          </h3>

          <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-14 sm:grid-cols-2 lg:gap-32">
            {project.identity.fonts.map((font) => (
              <div
                key={font.name}
                className={`flex flex-col items-center text-center ${font.className}`}
              >
                <p className="mb-3 text-xl font-medium uppercase lg:text-2xl">
                  {font.name}
                </p>

                <p className="max-w-[150px] text-[10px] font-medium leading-[1.15] sm:text-xs">
                  {font.alphabet}
                </p>
              </div>
            ))}
          </div>

        </div>

        <div>

          <h3 className="mb-12 text-center text-sm font-bold italic text-[#6A00FF] sm:text-base lg:text-xl">
            [ Couleurs ]
          </h3>

          <MobileColors />

          <div className="hidden grid-cols-3 justify-items-center gap-6 sm:grid md:grid-cols-5 lg:grid-cols-10 lg:gap-4">
            {project.identity.colors.map((color) => (
              <ColorShape
                key={color.hex}
                color={color}
                className="w-[120px] md:w-full"
              />
            ))}
          </div>

        </div>

      </div>

      <ColorsPopup />
    </section>
  );
}

export default ProjectIdentity;