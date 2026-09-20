function ProjectGallery({ project }) {
  if (project.gallery.type === "cards") {
    const cards = project.gallery.cards;
    const cards2 = project.gallery.cards2;

    return (
      <section id="gallery" className="w-full overflow-hidden bg-white">

        <div className="grid w-full grid-cols-1 md:grid-cols-2">
          {project.gallery.mockups.map((mockup, index) => (
            <div
              key={index}
              className="aspect-[4/3] w-full overflow-hidden bg-[#F2F2F2]"
            >
              <img
                src={mockup}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="overflow-hidden bg-[#141414] py-12 sm:py-16 lg:py-20">

          <div className="project-cards-marquee mb-8 sm:mb-10 lg:mb-12">
            <div className="project-cards-track">

              {[...cards, ...cards].map((card, index) => (
                <img
                  key={index}
                  src={card}
                  alt=""
                  className="h-[190px] w-auto flex-none rounded-[8px] object-contain sm:h-[240px] lg:h-[300px]"
                />
              ))}

            </div>
          </div>

          <div className="project-cards-marquee">
            <div className="project-cards-track project-cards-track-reverse">

              {[...cards2, ...cards2].map((card, index) => (
                <img
                  key={index}
                  src={card}
                  alt=""
                  className="h-[190px] w-auto flex-none rounded-[8px] object-contain sm:h-[240px] lg:h-[300px]"
                />
              ))}

            </div>
          </div>

        </div>

      </section>
    );
  }

  if (project.gallery.type === "beer") {
    return (
      <section id="gallery" className="w-full overflow-hidden bg-white">

        <div className="grid h-auto w-full grid-cols-1 md:h-[420px] md:grid-cols-2">
          {project.gallery.posters.map((image, index) => (
            <div
              key={index}
              className={`h-[320px] w-full overflow-hidden sm:h-[380px] md:h-full ${
                index === 1 ? "bg-[#1A1A18]" : ""
              }`}
            >
              <img
                src={image}
                alt=""
                className={`h-full w-full ${
                  index === 1 ? "object-contain" : "object-cover"
                }`}
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 bg-white px-4 py-10 sm:px-10 sm:py-16 lg:px-20 lg:py-24">
          {project.gallery.bottles.white.map((image, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={image}
                alt=""
                className="w-[80%] max-w-[350px] object-contain"
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 bg-[#1A1A18] px-4 py-10 sm:px-10 sm:py-16 lg:px-20 lg:py-24">
          {project.gallery.bottles.black.map((image, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={image}
                alt=""
                className="w-[80%] max-w-[350px] object-contain"
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 bg-[#F6383F] px-4 py-10 sm:px-10 sm:py-16 lg:px-20 lg:py-24">
          {project.gallery.bottles.red.map((image, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={image}
                alt=""
                className="w-[80%] max-w-[350px] object-contain"
              />
            </div>
          ))}
        </div>

      </section>
    );
  }

  return (
    <section id="gallery" className="w-full overflow-hidden bg-black">

      <div className="grid w-full grid-cols-1 md:grid-cols-2">
        <img
          src={project.gallery.top[0]}
          alt=""
          className="h-full w-full object-cover"
        />

        <img
          src={project.gallery.top[1]}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex w-full items-center justify-center bg-[#D62828] px-4 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
        <div className="aspect-[9/12] w-full max-w-[500px] overflow-hidden sm:aspect-video sm:max-w-[900px]">
          <iframe
            src={project.gallery.video}
            title="Vidéo du projet"
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      <div className="grid w-full grid-cols-6 items-center bg-[#0083F1] px-3 py-5 sm:px-8 sm:py-6 lg:px-16 lg:py-8">
        {project.gallery.objects.map((object, index) => (
          <div key={index} className="flex items-center justify-center">
            <img
              src={object}
              alt=""
              className="h-auto w-[65%] max-w-[75px] object-contain"
            />
          </div>
        ))}
      </div>

      <div className="grid w-full grid-cols-1 md:grid-cols-[60%_40%]">

        <div className="flex items-center justify-around bg-[#F7B500] px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
          {project.gallery.bottom.slice(0, 3).map((image, index) => (
            <img
              key={index}
              src={image}
              alt=""
              className="w-[29%] object-contain"
            />
          ))}
        </div>

        <div className="flex items-center justify-around bg-[#00D542] px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
          {project.gallery.bottom.slice(3, 5).map((image, index) => (
            <img
              key={index}
              src={image}
              alt=""
              className="w-[42%] object-contain"
            />
          ))}
        </div>

      </div>

    </section>
  );
}

export default ProjectGallery;