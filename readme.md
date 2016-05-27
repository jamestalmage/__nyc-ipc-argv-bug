# NYC or spawn-wrap bug when used with execArgv

It seems that either NYC or `spawn-wrap` is preventing ipc channel creation, but only when an execArgv option is provided.

To reproduce:

1. Clone this repo
2. `npm install`
3. `npm test`


You will see the simple test pass when used normally, but when wrapped with NYC, it fails.

If you uncomment the `execArgv: ['--no-deprecation']` line in `index.js`, it will pass, even with NYC.

The failure prints a stacktrace indicating that `process.send` does not exist in the child process. This indicates that, while the correct child process was forked, it happened without an IPC channel.

Seems like a bug.
