const basePath = process.cwd();
const { startCreating, buildSetup } = require(`${basePath}/src/main.js`);

(() => {
  console.log("Initializing art engine...")
  buildSetup();
  startCreating();
})();
