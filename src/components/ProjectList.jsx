import ProjectPreview from "./ProjectPreview/ProjectPreview"

const ProjectList = ({project}) => {
  return (
    <div>
        <ProjectPreview 
          project={project}
        />
    </div>
  )
}

export default ProjectList