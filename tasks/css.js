var gulp = require('gulp');
var sass = require('gulp-sass');

/*
 * gulp@3.x.xの書き方
 */

/*
// sass to css
gulp.task('sass', function(){
  gulp.src('./sass/*.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest('./css/'));
});

// watch
gulp.task('watch', ['sass'], function(){
  var watcher = gulp.watch('./sass/*.scss', ['sass']);
  watcher.on('change', function(event) {
  });
});
*/


/*
 * gulp@^4.x.xの書き方
 * ダメな書き方
 *     - callbackやstreamをreturnしないとダメ
 */
// sass to css
gulp.task('sass', function(){
  return gulp.src('./sass/*.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest('./css/'));
});

// watch
gulp.task('watch', function(){
  var watcher = gulp.watch('./sass/*.scss', gulp.series('sass'));
  watcher.on('change', function(event) {
  });
});
