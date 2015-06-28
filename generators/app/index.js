'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.NamedBase.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the astonishing ' + chalk.red('Angulares6') + ' generator!'
    ));

    var prompts = [{
      name:'appName',
      message:'What is your application name?'
    },{
      type: 'confirm',
      name: 'addDemo',
      message: 'Would you like to add a demo?',
      default: false
    }];

    this.prompt(prompts, function (props) {
      this.appName = props.appName;
      this.addDemo = props.addDemo;

      done();
    }.bind(this));
  },

  scaffoldFolders : function () {
    this.mkdir(this.name);
  },

  copyAllFiles : function () {

    var context = {
      module_name : this.appName,
      content : this.name
    };

    var fileBase = this.name;
    this.template("./app/_Module.html", fileBase+"/"+fileBase+".html",context);
    this.template("./app/_ModuleController.js", fileBase+"/"+fileBase+"Controller.js",context);
    this.template("./app/_ModuleService.js", fileBase+"/"+fileBase+"Service.js",context);
  }
});
