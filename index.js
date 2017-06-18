const fs = require('fs-extra')
const prettyRender = require('prettyjson').render
const chalk = require('chalk')

const genCourse = require('./exec/genCourse')
const genSummaryTemplate = require('./exec/genSummaryTemplate.js')

let course =  genCourse('fullstack-js')
let templateString = genSummaryTemplate(course)


fs.writeFile('./SUMMARY.md', templateString )
  .then((cool)=>{
    console.log(chalk.green('Course Written'))
  })
