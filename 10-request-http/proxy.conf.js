const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'http://localhost:8000',
    secure: false, // sem https
    logLevel: 'debug',
    pathRewrite: { '^/api': '' }, // re-escrever a rota
  },
];

module.exports = PROXY_CONFIG;
