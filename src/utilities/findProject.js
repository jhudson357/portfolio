import { projects } from "../data/project.js"
import { hyphenate } from "./hyphenateWords.js"

function findProject(projectName) {
  let project
  for(let i=0; i<projects.length; i++) {
    if(hyphenate(projects[i].title) === projectName) {
      project = projects[i]
    }
  }
  return project
}

// console.log(findProject('destinations'))

export {
  findProject
}