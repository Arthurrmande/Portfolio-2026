import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import projectPages from "../data/projectPages";
import ProjectHeader from "../components/project/ProjectHeader";
import ProjectHero from "../components/project/ProjectHero";
import ProjectContext from "../components/project/ProjectContext";
import ProjectIdentity from "../components/project/ProjectIdentity";
import ProjectGallery from "../components/project/ProjectGallery";
import Contact from "../components/Contact";

function ProjectPage() {
  const { id } = useParams();

  const project = projectPages.find(
    (project) => project.id === Number(id)
  );

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [id]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <ProjectHeader />

      <main className="bg-black">
        <ProjectHero project={project} />
        <ProjectContext project={project} />

        {project.identity && (
          <ProjectIdentity project={project} />
        )}

        <ProjectGallery project={project} />

        <div className="h-[120px] bg-gradient-to-b from-white to-[#6A00FF] sm:h-[150px] lg:h-[180px]"></div>

        <Contact />
      </main>
    </>
  );
}

export default ProjectPage;