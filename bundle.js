const Bundler = require('parcel-bundler')
module.exports = async function bundle(watch) {
  const outDir = `${__dirname}/www`
  const entryFile = `${__dirname}/src/index.html`
  const opts = {
    outDir,
    outFile: 'index.html',
    sourceMaps: true,
    hmr: false,
    watch: !(watch === false)
  }
  const bundler = new Bundler(entryFile, opts)
  await bundler.bundle()
  return outDir
}