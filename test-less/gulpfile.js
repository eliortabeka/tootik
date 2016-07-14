var
  gulp =   require('gulp'),
  less =   require('gulp-less'),
  cssmin = require('gulp-cssmin'),
  rename = require('gulp-rename')
;

var
  LESS = '../less/tootik.less',
  SUFFIX = '.min';

gulp.task('watch', function () {
  gulp.watch(LESS, ['less']);
});

gulp.task('less', function () {

  return gulp.src(LESS)
  .pipe(less().on('error', function (err) {
    console.log(err);
  }))
  .pipe(cssmin().on('error', function(err) {
    console.log(err);
  }))
  .pipe(rename({suffix: SUFFIX}))
  .pipe(gulp.dest('./'));

});

gulp.task('default', ['less', 'watch']);
