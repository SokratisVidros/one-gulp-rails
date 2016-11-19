import gulp         from 'gulp';
import shell        from 'gulp-shell';
import casperJs     from 'gulp-casperjs';
import gulpSequence from 'gulp-sequence';

gulp.task('e2e:db:setup', shell.task([
  'RAILS_ENV=development bundle exec rake db:migrate && bundle exec rake db:fixtures:load'
]));

gulp.task('e2e:start', () => gulp.src('./spec/index.js').pipe(casperJs()));

gulp.task('e2e', cb => gulpSequence.apply(this, [['e2e:db:setup', 'build'], 'e2e:start', cb]));
