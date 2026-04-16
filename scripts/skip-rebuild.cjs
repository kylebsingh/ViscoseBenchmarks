// Returning false tells electron-builder to skip the node_modules
// search and rebuild process entirely. This is safe because our app
// is fully bundled by Vite — no native modules are needed at runtime.
module.exports = async function () {
  return false;
};
