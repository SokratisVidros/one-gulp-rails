import gulp        from 'gulp';
import changed     from 'gulp-changed';
import imagemin    from 'gulp-imagemin';
import livereload   from 'gulp-livereload';
import config      from '../config';

const sourcePath = `${config.sourcePath}/images/**`;
const destPath = `${config.destPath}/images`;

gulp.task('images', () => {
  return gulp.src(sourcePath)
    .pipe(changed(destPath))
    .pipe(imagemin())
    .pipe(gulp.dest(destPath))
    .pipe(livereload());
});
