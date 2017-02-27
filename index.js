var shell  = require('shelljs');
var os     = require('os');

var command  = shell.exec('sudo supervisorctl status');
var statuses = command.output;

if (status.match(/FATAL/)) {
	process.exit(3);
} else {
	process.exit(0);
}
