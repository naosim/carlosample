// develop mode
const app = require(`${__dirname}/app.js`)
const bundle = require(`${__dirname}/bundle.js`)

const run = async () => {
  const outDir = await bundle()
  app(outDir);
}

run()