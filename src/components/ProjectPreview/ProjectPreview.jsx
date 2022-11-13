import { hyphenate } from "../../utilities/hyphenateWords"
import styles from './ProjectPreview.module.css'

const ProjectPreview = ({project}) => {
  let projectUrl = '/projects/' + hyphenate(project.title)
  console.log(projectUrl)
  
  return (
    <div className={styles.projectPreviewContainer}>
      <img
        src={project.logo}
        alt={project.title}
      />
      <section className={styles.text}>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
      </section>
      <a href={projectUrl}>
        <button>Learn More</button>
      </a>
    </div>
  )
}

export default ProjectPreview