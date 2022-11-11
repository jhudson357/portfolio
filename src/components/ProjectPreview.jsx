import { hyphenate } from "../utilities/hyphenateWords"

const ProjectPreview = ({project}) => {
  let projectUrl = '/projects/' + hyphenate(project.title)
  console.log(projectUrl)
  
  return (
    <div>
      <img
        src={project.image}
        alt={project.title}
      />
      <section>
        <h3>
          {project.title}
        </h3>
        <a href={projectUrl}>
          <button>Learn More</button>
        </a>
      </section>
    </div>
  )
}

export default ProjectPreview