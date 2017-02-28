var shell   = require('shelljs');
var command = shell.exec('sudo supervisorctl status');
var status  = command.stdout;

if (status.match(/FATAL|STOPPED|EXITED/)) {
	process.exit(1);
}
