import softwareData from "../../data/software";

function ProjectContext({ project }) {
  const getSoftwareIcon = (softwareName) => {
    const software = softwareData.find(
      (item) => item.name.toLowerCase() === softwareName.toLowerCase()
    );

    return software?.icon;
  };

  return (
    <section id="project-context" className="relative bg-black px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-40">

      <div className="mx-auto w-full max-w-[1600px]">

        <div className="relative mb-[38px] w-fit">
          <h2 className="font-archivo text-[42px] font-black italic uppercase leading-none tracking-[-0.04em] sm:text-[50px] lg:text-[60px]">
            CONTEXTE
          </h2>

          <span className="absolute left-1/2 top-1/2 whitespace-nowrap font-burgues text-[65px] leading-none text-[#6A00FF] sm:text-[75px] lg:text-[85px]" style={{ transform: "translate(-50%, -50%)" }}>
            Le
          </span>
        </div>

        <div className="grid gap-20 lg:grid-cols-[1.4fr_0.6fr] lg:gap-32">

          <div className="max-w-[720px]">

            <p className="mb-8 text-[11px] font-bold italic text-[#6A00FF] sm:text-xs lg:text-sm">
              &lt;creator&gt;
            </p>

            <div className="space-y-7">

              <div>
                <p className="text-[11px] font-bold italic text-[#6A00FF] sm:text-xs lg:text-sm">
                  &lt;identity&gt;
                </p>

                <p className="ml-4 text-[11px] leading-[1.5] sm:text-xs lg:text-sm">
                  {project.context.identity}
                </p>

                <p className="text-[11px] font-bold italic text-[#6A00FF] sm:text-xs lg:text-sm">
                  &lt;/identity&gt;
                </p>
              </div>

              <div>
                <p className="text-[11px] font-bold italic text-[#6A00FF] sm:text-xs lg:text-sm">
                  &lt;type&gt;
                </p>

                <p className="ml-4 text-[11px] leading-[1.5] sm:text-xs lg:text-sm">
                  {project.context.client}
                </p>

                <p className="text-[11px] font-bold italic text-[#6A00FF] sm:text-xs lg:text-sm">
                  &lt;/type&gt;
                </p>
              </div>

              <div>
                <p className="text-[11px] font-bold italic text-[#6A00FF] sm:text-xs lg:text-sm">
                  &lt;description&gt;
                </p>

                <p className="ml-4 max-w-[650px] text-[11px] leading-[1.5] sm:text-xs lg:text-sm">
                  {project.context.description}
                </p>

                <p className="text-[11px] font-bold italic text-[#6A00FF] sm:text-xs lg:text-sm">
                  &lt;/description&gt;
                </p>
              </div>

              <div>
                <p className="text-[11px] font-bold italic text-[#6A00FF] sm:text-xs lg:text-sm">
                  &lt;challenge&gt;
                </p>

                <p className="ml-4 max-w-[650px] text-[11px] leading-[1.5] sm:text-xs lg:text-sm">
                  {project.context.challenge}
                </p>

                <p className="text-[11px] font-bold italic text-[#6A00FF] sm:text-xs lg:text-sm">
                  &lt;/challenge&gt;
                </p>
              </div>

            </div>

            <p className="mt-8 text-[11px] font-bold italic text-[#6A00FF] sm:text-xs lg:text-sm">
              &lt;/creator&gt;
            </p>

          </div>

          <div className="grid grid-cols-2 gap-8 lg:gap-12">

            <div>
              <h3 className="mb-8 whitespace-nowrap text-sm font-bold italic text-[#6A00FF] sm:text-base lg:text-xl">
                [ Logiciels ]
              </h3>

              <div className="flex flex-col items-start gap-4">
                {project.software.map((software) => {
                  const icon = getSoftwareIcon(software);

                  return (
                    <div key={software} className="flex h-7 items-center justify-center gap-2 rounded-full border border-white px-4">

                      <span className="whitespace-nowrap text-[9px] sm:text-[10px]">
                        {software}
                      </span>

                      {icon && (
                        <img
                          src={icon}
                          alt=""
                          className="h-3 w-3 object-contain"
                        />
                      )}

                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="mb-8 whitespace-nowrap text-sm font-bold italic text-[#6A00FF] sm:text-base lg:text-xl">
                [ Domaines ]
              </h3>

              <div className="flex flex-col items-start gap-4">
                {project.domains.map((domain) => (
                  <span key={domain} className="flex h-7 items-center rounded-full border border-white px-4 text-[9px] sm:text-[10px]">
                    {domain}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ProjectContext;