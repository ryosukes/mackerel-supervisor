var shell   = require('shelljs');
var command = shell.exec('sudo supervisorctl status');
var status  = command.output;

if (status.match(/FATAL/)) {
	process.exit(3);
} else {
	process.exit(0);
}
