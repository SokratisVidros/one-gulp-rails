import gulp         from 'gulp';
import rev          from 'gulp-rev';
import revReplace   from 'gulp-rev-replace';
import gulpSequence from 'gulp-sequence';
import config       from '../config';

function replaceJsIfMap (filename) {
  return `/assets/${filename}`;
}

gulp.task('rev:assets', () => {
  return gulp.src(`${config.destPath}/**/**.!(json|html|txt)`)
    .pipe(rev())
    .pipe(gulp.dest(config.destPath))
    .pipe(rev.manifest())
    .pipe(gulp.dest(config.destPath));
});

gulp.task('rev:replace', () => {
  const manifest = gulp.src(`${config.destPath}/rev-manifest.json`);
  return gulp.src([
      'public/index.html',
      'public/assets/**/**'
    ], {base: './'})
    .pipe(revReplace({
      manifest,
      modifyUnreved: replaceJsIfMap,
      modifyReved: replaceJsIfMap
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('rev', cb => gulpSequence.apply(this, ['rev:assets', 'rev:replace', cb]));
