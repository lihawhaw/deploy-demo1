module.exports = {
  apps: [
    {
      name: 'deploy-demo1',
      script: 'dist/main.js',
      interpreter: 'node',
      watch: false,
      error_log: 'logs/deploy-demo1.err.log',
      out_log: 'logs/deploy-demo1.out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      max_memory_restart: '256M',
      min_uptime: '5s',
      max_restarts: 3,
      restart_delay: 2000,
      instances: 1,
      exec_mode: 'fork'
    },
  ],
};
