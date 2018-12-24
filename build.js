// develop mode
const bundle = require(`${__dirname}/bundle.js`)

const run = async () => {
  const outDir = await bundle(false)
}

run()