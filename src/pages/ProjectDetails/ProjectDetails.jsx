// import {projects} from '../data/project.js'
import { useParams } from 'react-router-dom'
import { findProject } from '../../utilities/findProject.js'
import styles from './ProjectDetails.module.css'

const ProjectDetails = () => {
  let { projectDetails } = useParams()
  console.log('project Id', projectDetails)
  let project = findProject(projectDetails)
  console.log('project', project)
  
  return (
    <div className={styles.projectDetailsContainer}>
      <div className={styles.content}>
        
        <div className={styles.projectHeader}>
          <h1>{project.title}</h1>
        </div>

        <p>
          {project.description}
          <br />[<a className={styles.btn} href={project.repositoryLink}>GitHub Repository</a>]
        </p>

        <a href={project.deploymentLink} className={styles.launchBtn}>
          <button>Launch App</button>
        </a>

        <div className={styles.technologiesContainer}>
          <h3>Technologies Used</h3>
          <div className={styles.technologies}>
            {project.technologies.map(technology => 
              <div key={technology} className={styles.technology}>
                {technology}
              </div>
            )}
          </div>
        </div>

        <div className={styles.imgContainer}>
          <img
            src={project.image}
            alt='Screenshot of the application'
            className={styles.projectImg}
          />
        </div>

      </div>
    </div>
  )
}

export default ProjectDetails