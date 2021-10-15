module.exports = {
    apps : [{
      name   : "api-sales",
      script : "./src/app.ts",
      interoreter: 'node',
      interpreter_args: '--require ts-node/register --require tsconfig-paths/register',
      merge_logs: true,
      max_restarts: 20,
    }]
  }