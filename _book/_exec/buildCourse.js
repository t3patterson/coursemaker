const fs = require('fs-extra')
const prettyRender = require('prettyjson').render
const chalk = require('chalk')
const path = require('path')

const genCourseObject = require('./genCourseObject')
const genSummaryTemplate = require('./genSummaryTemplate.js')

let course =  genCourseObject('fullstack-js')
let templateString = genSummaryTemplate(course)


fs.writeFile(path.resolve(__dirname, '..', 'SUMMARY.md'), templateString )
  .then((cool)=>{
    console.log(chalk.green('Course Written'))
  })
