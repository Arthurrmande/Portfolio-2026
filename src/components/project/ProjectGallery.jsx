function ProjectGallery({ project }) {
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
          <div
            key={index}
            className="flex items-center justify-center"
          >
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