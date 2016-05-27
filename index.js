var cp = require('child_process');

var p = cp.fork(require.resolve('./worker.js'), {
	// Fails to create an ipc fork if execArgv is passed.
	// execArgv: ['--debug=1234']
	execArgv: ['--no-deprecation']
});

p.on('message', function (m) {
	console.log(m);
});

p.on('exit', function (code) {
	process.exit(code);
});

