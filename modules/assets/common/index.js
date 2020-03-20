const exportedAssets = {};

if (!__TEST__) {
  // Require all files from assets dir recursively addding them into assets.json
  let req = require.context('!file-loader?name=[hash].[ext]!./assets', true, /.*/);
  req.keys().map(key => {
    exportedAssets[`${key.replace('./', '')}`] = req(key);
  });
}

export default exportedAssets;
