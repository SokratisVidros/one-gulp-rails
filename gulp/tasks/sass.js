import gulp         from 'gulp';
import sass         from 'gulp-sass';
import sourcemaps   from 'gulp-sourcemaps';
import autoprefixer from 'gulp-autoprefixer';
import livereload   from 'gulp-livereload';
import errorHandler from '../util/errorHandler';
import config       from '../config';

const sourcePath = `${config.sourcePath}/stylesheets/**/*.{sass,scss}`;
const destPath = `${config.destPath}/stylesheets`;

gulp.task('sass', () => {
  return gulp.src(sourcePath)
    .pipe(sourcemaps.init())
    .pipe(sass({
      indentedSyntax: true,
      imagePath: '/assets/images'
    }))
    .on('error', errorHandler)
    .pipe(autoprefixer({ browsers: ['last 2 version'] }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(destPath))
    .pipe(livereload());
});
