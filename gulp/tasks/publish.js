import gulp       from 'gulp';
import awspublish from 'gulp-awspublish';
import cloudfront from 'gulp-cloudfront';
import config     from '../config';

const ENV = process.env;

const AWS_PARAMS = Object.freeze({
  params: {
    Bucket: 'bucket-name'
  },
  accessKeyId:     ENV.AWS_ACCESS_KEY_ID,
  secretAccessKey: ENV.AWS_SECRET_ACCESS_KEY,
  bucket:          ENV.AWS_S3_BUCKET || 'public',
  region:          ENV.AWS_S3_REGION || 'us-standard',
  distributionId:  ENV.CDN_DISTRIBUTION_ID
});

const publisher = awspublish.create(AWS_PARAMS);
const headers = {
  'Cache-Control': 'max-age=315360000,no-transform, public'
};

gulp.task('publish', () => {
  return gulp.src(`${config.destPath}/**/**.!(json|html|txt)`)
    .pipe(awspublish.gzip())
    .pipe(publisher.publish(headers))
    .pipe(publisher.cache())
    .pipe(awspublish.reporter())
    .pipe(cloudfront(AWS_PARAMS));
});
