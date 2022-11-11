import ProjectPreview from "./ProjectPreview"

const ProjectList = ({project}) => {
  return (
    <div>
        <ProjectPreview 
          project={project}
        />
      <p>{project.description}</p>
    </div>
  )
}

export default ProjectList