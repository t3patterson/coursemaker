const courseFactory = require('../_lib/courseFactory')

function generateCourse(name){
  let course = courseFactory(name)
  course.generateSection('dev-foundations', 'Developer Foundations')
  course.generateAssignment('dev-foundations', 'growth-mindset', 'Growth Mindset')
  course.generateAssignment('dev-foundations', 'web-basics', 'Web Basics')

  course.generateSection('html-css-fundamentals', 'HTML CSS Fundamentals')
  course.generateSection('js-foundations', 'JavaScript Foundations')
  course.generateSection('frontend-foundations', 'Front End Foundations')


  // course.generateSection('frontend-fundamentals', 'Front End Fundamentals')
  // course.generateAssignment('frontend-fundamentals', 'html-basics', 'HTML Basics')
  // course.generateAssignment('frontend-fundamentals', 'css-basics', 'CSS Basics')


  return course
}

module.exports = generateCourse
