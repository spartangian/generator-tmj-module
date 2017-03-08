'use strict';

var generator = require('yeoman-generator'),
    chalk = require('chalk'),
    error = require('./../error'),
    constants = require('./../constants'),
    hasOption = false;

module.exports = generator.extend({
    initializing: function () {
        error(this, 'routes');
        var options = ['plain'];
        this.argument('name', { type: String, required: true });
        this.argument('module', { type: String, required: true });
        if (this.options.option !== undefined) {
            if (options.includes(this.options.option)) {
                hasOption = true;
            } else {
                console.log(chalk.red('Error:\n  - ') + 'Invalid option');
                process.exit(1);
            }
        }
    },
    executing: function () {
        var data = {
            name: this.args.shift(),
            module: this.args.shift(),
            year: new Date().getFullYear()
        };

        if (hasOption) {
            this.fs.copyTpl(
                this.templatePath('plain.js'),
                this.destinationPath(constants.module.path + data.module + '/server/' + data.name + '.routes.js'),
                data
            );
        } else {
            this.fs.copyTpl(
                this.templatePath('routes.js'),
                this.destinationPath(constants.module.path + data.module + '/server/' + data.name + '.routes.js'),
                data
            );
        }
    }
});
