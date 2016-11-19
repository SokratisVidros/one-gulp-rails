import gutil        from 'gulp-util';
import prettyHrtime from 'pretty-hrtime';

let startTime;

export default {

  start(filepath) {
    startTime = process.hrtime();
    gutil.log('Bundling', `${gutil.colors.green(filepath)}...`);
  },

  watch(bundleName) {
    gutil.log('Watching files required by', gutil.colors.yellow(bundleName));
  },

  end(filepath) {
    const taskTime = process.hrtime(startTime);
    const prettyTime = prettyHrtime(taskTime);
    gutil.log('Bundled', gutil.colors.green(filepath), 'in', gutil.colors.magenta(prettyTime));
  }
};
