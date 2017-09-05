
const Course = function(title){
  this.courseTitle = title
  this.courseModules = []
}

Course.prototype.generateSection = function(sectionId, sectionTitle){
  let newObj = {
    sectionTitle: sectionTitle,
    sectionId: sectionId,
    assignments: []
  }

  this.courseModules = [ ...this.courseModules, newObj ]
}

Course.prototype.generateAssignment = function(sectionId, assignmentId, assignmentTitle){
  if(!sectionId) throw Error('Section Name is required')

  let sectionIndex
  let courseModule = this.courseModules.find((course, i)=>{
    if(course.sectionId === sectionId){
      sectionIndex = i
      return true
    }
  })

  if(typeof sectionIndex !== 'undefined'){
    let assignmentObj = { assignmentTitle, assignmentId }
    this.courseModules[sectionIndex].assignments = [
      ...this.courseModules[sectionIndex].assignments,
       assignmentObj
    ]
  }

}

module.exports = function(title){ return new Course(title) }
