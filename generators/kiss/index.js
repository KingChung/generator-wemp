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
        message: 'Which page would you like to use kiss component?'
      },
      {
        type: 'input',
        name: 'componentname',
        message: 'Which component would you like to use?' 
      }
    ]);

    this.answers = answers;
  }

  writing() {
    const { pagename, componentname } = this.answers;

    if( ! this.fs.exists(this.destinationPath(`pages/${pagename}/index.js`))) {
      this.log(`Page ${pagename} is not exists!`)
      return false
    }

    if( ! this.fs.exists(this.templatePath(`components/${componentname}/index.js`))) {
      this.log(`Component ${componentname} is not exists!`)
      return false
    } 
    
    this.fs.copy(
        this.templatePath(`components/${componentname}`),
        this.destinationPath(`components/${componentname}`)
    );
    
    const pagePath = this.destinationPath(`pages/${pagename}/index.json`);
    const pageConfig = this.fs.readJSON(pagePath)
    
    fs.writeFile(pagePath, jsonFormat({
      ...pageConfig,
      usingComponents: {
        ...(pageConfig.usingComponents || {}),
        [componentname]: `/components/${componentname}/index`
      }
    }), (err) => {
      if (err) throw err;
    })
  }
};
