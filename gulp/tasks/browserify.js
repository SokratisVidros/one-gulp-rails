import gulp         from 'gulp';
import babelify     from 'babelify';
import browserify   from 'browserify';
import livereload   from 'gulp-livereload';
import source       from 'vinyl-source-stream';
import logger       from '../util/logger';
import errorHandler from '../util/errorHandler';
import config       from '../config';

const bundleSettings = {
  entries: `${config.sourcePath}/javascripts/application.js`,
  dest: `${config.destPath}/javascripts`,
  outputName: 'application.js',
  transform: [
    babelify
  ],
  extensions: ['.js'],
  fullPaths: false,
  debug: true
};

gulp.task('browserify', () => {
  const {outputName, dest, require, external} = bundleSettings;

  let b = browserify(bundleSettings);

  if (require) {
    b.require(require);
  }
  if (external) {
    b.external(external);
  }

  logger.start(outputName);

  return b
    .bundle()
    .on('error', errorHandler)
    .pipe(source(outputName))
    .pipe(gulp.dest(dest))
    .pipe(livereload());
});
