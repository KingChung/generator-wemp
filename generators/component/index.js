'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  async prompting() {
    const answers = await this.prompt([
      {
        type: 'input',
        name: 'componentname',
        message: 'Component name'
      }
    ]);

    Object.keys(answers).forEach(k => {
      let input = answers[k]
      if(typeof input === 'string') {
        answers[k] = input.trim()
      }
    })
    this.answers = answers;

    this.log('Component name', answers.componentname);
  }

  writing() {
    const { componentname } = this.answers;
    
    this.fs.copy(
        this.templatePath('component'),
        this.destinationPath(`components/${componentname}`)
    );
  }
};
