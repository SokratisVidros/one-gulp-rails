import gulp   from 'gulp';
import del    from 'del';
import config from '../config';

gulp.task('clean', cb => del([config.destPath], cb));
