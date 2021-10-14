module.exports = {
    apps : [{
      name   : "api-sales",
      script : "./src/app.js",
      node_args: "-r tsconfig-paths/register",
      merge_logs: true,
      max_restarts: 20,
      instances: 4,
    }]
  }