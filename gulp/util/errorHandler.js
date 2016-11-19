import notify from 'gulp-notify';

export default function (...args) {
  notify.onError({
    title: "Compile Error",
    message: "<%= error %>"
  }).apply(this, args);

  this.emit('end');
};
