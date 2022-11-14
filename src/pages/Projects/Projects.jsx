import {projects} from '../../data/project.js'
import ProjectList from '../../components/ProjectList'
import styles from './Projects.module.css'

const Projects = () => {
  return (
    <section className={styles.projectsContainer}>
      <h1>Projects.</h1>
      <div className={styles.projects}>
        {projects.map(project => 
          <ProjectList
            key={project.repositoryLink}
            project={project}
          />
        )}
      </div>
    </section>
  )
}

export default Projects