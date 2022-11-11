import {projects} from '../data/project.js'
import ProjectList from '../components/ProjectList'

const Projects = () => {
  return (
    <>
      <h1>Projects</h1>
        {projects.map(project => 
          <ProjectList
            key={project.repositoryLink}
            project={project}
          />
        )}
    </>
  )
}

export default Projects