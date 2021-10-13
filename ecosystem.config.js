module.exports = {
    apps : [{
      name   : "api-sales",
      script : ".src/app.js",
      node_args: "-r dotenv/config -r ./register-paths.js",
      merge_logs: true,
      max_restarts: 20,
      instances: 4,
    }]
  }