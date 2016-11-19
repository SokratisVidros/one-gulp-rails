import gulp         from 'gulp';
import uglify       from 'gulp-uglifyjs';
import cleanCSS     from 'gulp-clean-css';
import gulpSequence from 'gulp-sequence';
import config       from '../config';

gulp.task('compress:css', () => {
  gulp.src(`${config.destPath}/stylesheets/*.css`)
    .pipe(cleanCSS())
    .pipe(gulp.dest(`${config.destPath}/stylesheets/`));
});

gulp.task('compress:js', () => {
  gulp.src(`${config.destPath}/javascripts/*.js`)
    .pipe(uglify())
    .pipe(gulp.dest(`${config.destPath}/javascripts/`));
});

gulp.task('compress', cb => gulpSequence.apply(this, ['compress:css', 'compress:js', cb]));
