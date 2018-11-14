'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  async prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(`Welcome to the perfect ${chalk.red('generator-wemp')} generator!`));

    const answers = await this.prompt([
      {
        type: 'input',
        name: 'projectname',
        message: 'Your project name',
        default: this.appname
      },
      {
        type: 'input',
        name: 'username',
        message: 'Author username or organization',
      },
      {
        type: 'input',
        name: 'appid',
        message: 'Your MiniProgram appid'
      },
      {
        type: 'input',
        name: 'extAppId',
        message: 'How about the extAppId?'
      },
      {
        type: 'input',
        name: 'apiUrlRoot',
        message: 'If you use API Services, please enter root url?'
      }
    ]);

    this.answers = answers;

    this.log('app name', answers.name);
    this.log('username', answers.username);
    this.log('appId', answers.appId);
    this.log('extAppId', answers.extAppId);
    this.log('API root url', answers.apiUrlRoot);
  }

  writing() {
    const { projectname, appid, extAppId, apiUrlRoot } = this.answers;
    
    //Copy the configuration files
    this.fs.copyTpl(
        this.templatePath('project.config.json'),
        this.destinationPath('project.config.json'), {
            appid,
            projectname
        }
    );

    this.fs.copyTpl(
        this.templatePath('ext.json'),
        this.destinationPath('ext.json'), {
            extAppId,
            apiUrlRoot
        }
    );

    //Copy application files
    this.fs.copy(
      this.templatePath('pages'),
      this.destinationPath('pages')
    );

    this.fs.copy(
      this.templatePath('images'),
      this.destinationPath('images')
    );

    this.fs.copy(
      this.templatePath('utils'),
      this.destinationPath('utils')
    );
    
    const appFiles = ['js', 'json', 'wxss']
    appFiles.forEach(ext => {
      this.fs.copy(
        this.templatePath(`app.${ext}`),
        this.destinationPath(`app.${ext}`)
      );
    })
  }
};
