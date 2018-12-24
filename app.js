const carlo = require('carlo');

module.exports = async (outDir) => {
  carlo.launch({
    args:['--disable-web-security']// use cross domain
  }).then(async app => {
    app.serveFolder(outDir)
    app.on('exit', () => process.exit())
    await app.load('index.html')
  });
}