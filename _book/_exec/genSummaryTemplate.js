function _genSections(module){
  console.log(module)
  let assignmentsString = module.assignments
    .map(_genAssignmentTitles(module.sectionId))
    .join('\n')

  return (
`### ${module.sectionTitle}

${assignmentsString}
`)
}

function _genAssignmentTitles(sectionId){
  return (a) => {return `+ [${a.assignmentTitle}](./courseModules/${sectionId}/${a.assignmentId}/README.md)`}
}

function genTocString(course){
  return course.courseModules
    .map(_genSections)
    .join('\n')
}

function genSummaryTemplate(course){
  let template = `
# Summary

### Introduction

+ [Prework Outline](README.md)

----

${genTocString(course)}
`
  return template
}

module.exports = genSummaryTemplate

//shouldGenerate:
// # Summary
//
// ### Introduction
//
// + [Course Outline](README.md)
//
// ----
//
// ### HTML + CSS
//
// + [HTML - Rothko](./courseModules/01-html-css/html-basics-rothko/README.md)
// + [CSS Full Page Layout - MFAH](./courseModules/html-css/html-css-full-layout-mfah/README.md)
// + [CSS Responsive Layout](./courseModules/html-css/css-responsive-design-strange-beautiful/README.md)
//
// ### Javascript Fundamentals
// + [JS Basics - types, variables, functions](./courseModules/js-fundamentals/js-types-variables-functions/README.md)
// + [JS Arrays - basics](./courseModules/js-fundamentals/js-arrays-basics/README.md)
// + [JS Arrays - intermediate](./courseModules/js-fundamentals/js-arrays-intermediate/README.md)
// + [JS Objects - basics](./courseModules/js-fundamentals/js-objects-basics/README.md)
// + [JS Objects - intermediate](./courseModules/js-fundamentals/js-objects-intermediate/README.md)
