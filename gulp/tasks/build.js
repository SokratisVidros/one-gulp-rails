import gulp         from 'gulp';
import gulpSequence from 'gulp-sequence';

gulp.task('build', cb => {
  const tasks = ['clean', 'images', ['sass', 'browserify']];

  if (process.env.RAILS_ENV === 'production') {
    tasks.push('rev', 'compress');

    if (process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY) {
      tasks.push('publish');
    }
  }

  tasks.push(cb);
  gulpSequence.apply(this, tasks);
});
