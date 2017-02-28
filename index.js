var shell   = require('shelljs');
var command = shell.exec('sudo supervisorctl status');
var status  = command.stdout;

if (status.match(/FATAL/)) {
	process.exit(1);
}
