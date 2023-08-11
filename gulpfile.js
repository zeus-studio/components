const { src, dest, series } = require('gulp');
const path = require('path');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');

/**
 * 将 TypeScript 编译成 JavaScript，ts->js、tsx->jsx
 * @returns
 */
function compileTypescript() {
  return src(['src/**/*.ts', 'src/**/*.tsx'])
    .pipe(tsProject())
    .pipe(dest('src'))
}

exports.test = series(compileTypescript);
