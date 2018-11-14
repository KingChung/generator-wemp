'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
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
