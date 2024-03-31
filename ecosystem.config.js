module.exports = {
  apps: [
    {
      name: 'deploy',
      script: 'dist/main.js',
      interpreter: 'node',
      watch: false,
      error_log: 'logs/deploy.err.log',
      out_log: 'logs/deploy.out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      max_memory_restart: '256M',
      min_uptime: '5s',
      max_restarts: 3,
      restart_delay: 2000,
      exec_mode: 'cluster',
      instances: 'max',
    },
    {
      name: 'deploy-worker',
      script: 'dist/main.js',
      interpreter: 'node',
      env: {
        NODE_ENV: 'production',
      },
      exec_mode: 'fork',
      instances: 1,
    },
  ],
};
