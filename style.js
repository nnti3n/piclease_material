var sass = require('node-sass');
var result = sass.renderSync({
  file: 'css/main.scss',
  outputStyle: 'compressed',
  outFile: 'css/main.css',
  sourceMap: true, // or an absolute or relative (to outFile) path
});