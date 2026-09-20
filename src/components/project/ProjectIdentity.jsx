function ProjectIdentity({ project }) {
  return (
    <section id="project-identity" className="relative bg-black px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-40">

      <div className="mx-auto w-full max-w-[1600px]">

        <div className="relative mb-[38px] w-fit">
          <h2 className="font-archivo text-[42px] font-black italic uppercase leading-none tracking-[-0.04em] sm:text-[50px] lg:text-[60px]">
            L’IDENTITÉ
          </h2>

          <span className="absolute left-1/2 top-1/2 whitespace-nowrap font-burgues text-[65px] leading-none text-[#6A00FF] sm:text-[75px] lg:text-[85px]" style={{ transform: "translate(-50%, -50%)" }}>
            Visuel
          </span>
        </div>

        <div className="mb-24 lg:mb-32">

          <h3 className="mb-12 text-center text-sm font-bold italic text-[#6A00FF] sm:text-base lg:text-xl">
            [ Typographies ]
          </h3>

          <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-14 sm:grid-cols-2 lg:gap-32">

            {project.identity.fonts.map((font) => (
              <div key={font.name} className={`flex flex-col items-center text-center ${font.className}`}>

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

          <div className="grid grid-cols-2 justify-items-center gap-x-4 gap-y-6 sm:grid-cols-3 sm:gap-6 md:grid-cols-5 lg:grid-cols-10 lg:gap-4">

            {project.identity.colors.map((color) => {
              const lightText = ["#000000", "#D62828"].includes(color.hex);

              return (
                <div
                  key={color.hex}
                  className="flex aspect-[0.48] w-[105px] flex-col items-center justify-center rounded-tl-[999px] rounded-br-[999px] border border-white px-2 text-center sm:w-[120px] md:w-full"
                  style={{
                    backgroundColor: color.hex,
                    color: lightText ? "#FFFFFF" : "#000000",
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
            })}

          </div>

        </div>

      </div>

    </section>
  );
}

export default ProjectIdentity;