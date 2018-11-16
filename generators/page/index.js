'use strict';
const Generator = require('yeoman-generator');
const fs = require('fs')
const jsonFormat = require('json-format')

module.exports = class extends Generator {
  async prompting() {
    const answers = await this.prompt([
      {
        type: 'input',
        name: 'pagename',
        message: 'Page name'
      }
    ]);

    Object.keys(answers).forEach(k => {
      let input = answers[k]
      if(typeof input === 'string') {
        answers[k] = input.trim()
      }
    })

    console.log(answers)
    this.answers = answers;

    this.log('page name', answers.pagename);
  }

  writing() {
    const { pagename } = this.answers;
    
    this.fs.copy(
        this.templatePath('page'),
        this.destinationPath(`pages/${pagename}`)
    );
    
    const appPath = this.destinationPath('app.json');
    const appConfig = this.fs.readJSON(appPath)
    let pages = appConfig.pages || []
    
    fs.writeFile(appPath, jsonFormat({
      ...appConfig,
      pages: pages.concat([
        `pages/${pagename}/index`
      ]) 
    }), (err) => {
      if (err) throw err;
    })
  }
};
