// import {projects} from '../data/project.js'
import { useParams } from 'react-router-dom'
import { findProject } from '../utilities/findProject.js'

const ProjectDetails = () => {
  let { projectDetails } = useParams()
  console.log('project Id', projectDetails)
  let project = findProject(projectDetails)
  console.log('project', project)
  
  return (
    <div>
      {/* <img
        src={project.image}
        alt='Screenshot of the application'
      /> */}
      <section>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <a href={project.repositoryLink}>
          <button>GitHub Repository</button>
        </a>
        <a href={project.deploymentLink}>
          <button>Deployed App</button>
        </a>
      </section>
    </div>
  )
}

export default ProjectDetails