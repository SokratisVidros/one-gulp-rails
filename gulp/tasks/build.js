import gulp         from 'gulp';
import gulpSequence from 'gulp-sequence';

gulp.task('build', cb => {
  const tasks = ['clean', 'images', ['sass', 'browserify']];

  if (process.env.RAILS_ENV === 'production') {
    tasks.push('rev');
    tasks.push('compress');
  }

  tasks.push(cb);
  gulpSequence.apply(this, tasks);
});
