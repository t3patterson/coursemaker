const courseFactory = require('./courseFactory')

let course = courseFactory('fullstack-js')
course.generateSection('html-css', 'HTML + CSS')
course.generateSection('js-fundamentals', 'JS Fundamentals')

course.generateAssignment('html-css', 'html-basics-rothko', 'HTML Basics - Rothko')
course.generateAssignment('html-css', 'html-css-full-layout-mfah', 'HTML/CSS Layout - MFAH')
course.generateAssignment('html-css', 'css-responsive-design-strange-beautiful', 'CSS Responsive Design - Strange|Beautiful')

course.generateAssignment('js-fundamentals', 'js-types-variables-functions', 'CSS Responsive Design - Strange|Beautiful')
course.generateAssignment('js-fundamentals', 'js-arrays-basics', 'JS Arrays - Basic')
course.generateAssignment('js-fundamentals', 'js-arrays-intermediate', 'JS Arrays - Intermediate')
course.generateAssignment('js-fundamentals', 'js-objects-basics', 'JS Objects - Basic')
course.generateAssignment('js-fundamentals', 'js-objects-intermediate', 'JS Objects - Intermediate')

console.log(JSON.stringify(course,null,2))
module.exports = course
