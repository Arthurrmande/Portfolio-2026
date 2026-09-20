import { useNavigate } from "react-router-dom";

function ProjectCard({ project, position, onClick }) {
  const navigate = useNavigate();

  const positions = {
    previous: {
      transform: "translate(-135%, -50%) rotateY(62deg)",
      opacity: 1,
      zIndex: 10,
      pointerEvents: "auto",
    },

    active: {
      transform: "translate(-50%, -50%) rotateY(0deg)",
      opacity: 1,
      zIndex: 30,
      pointerEvents: "auto",
    },

    next: {
      transform: "translate(35%, -50%) rotateY(-62deg)",
      opacity: 1,
      zIndex: 10,
      pointerEvents: "auto",
    },

    hiddenLeft: {
      transform: "translate(-225%, -50%) rotateY(70deg)",
      opacity: 0,
      zIndex: 0,
      pointerEvents: "none",
    },

    hiddenRight: {
      transform: "translate(125%, -50%) rotateY(-70deg)",
      opacity: 0,
      zIndex: 0,
      pointerEvents: "none",
    },
  };

  const handleClick = () => {
    if (position === "active") {
      navigate(`/projet/${project.id}`);
      return;
    }

    onClick();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="absolute left-1/2 top-1/2 aspect-square w-[68vw] max-w-[430px] shrink-0 cursor-pointer border-0 bg-transparent p-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:w-[48vw] lg:w-[27vw]"
      style={{
        ...positions[position],
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
        transformOrigin: "center center",
      }}
    >
      <img
        src={project.image}
        alt={`Projet ${project.id}`}
        draggable="false"
        className="block h-full w-full select-none object-cover"
      />
    </button>
  );
}

export default ProjectCard;