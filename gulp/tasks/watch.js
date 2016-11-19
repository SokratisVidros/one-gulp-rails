import gulp       from 'gulp';
import config     from '../config';
import watch      from 'gulp-watch';
import livereload from 'gulp-livereload';

gulp.task('watch', ['build'], cb => {
  livereload.listen();
  watch(`${config.sourcePath}/images`, () => gulp.start('images'));
  watch(`${config.sourcePath}/stylesheets`, () => gulp.start('sass'));
  watch(`${config.sourcePath}/javascripts`, () => gulp.start('browserify'));
});
