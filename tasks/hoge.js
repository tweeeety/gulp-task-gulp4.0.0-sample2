var gulp = require('gulp');

/*
 * gulp@3.x.xの書き方
 */
/*
gulp.task('hoge', function() {
  console.log('i am hoge!!');
});
*/

/*
 * gulp@^4.x.xの書き方
 * ダメな書き方
 *     - callbackやstreamをreturnしないとダメ
 */
/*
gulp.task('hoge', function(callback) {
  console.log('i am hoge!!');
});
*/

/*
 * gulp@^4.x.xの書き方
 * OKな書き方
 *     - callbackをやstreamをreturnすれば通る
 */
///*
gulp.task('hoge', function(callback) {
  console.log('i am hoge!!');
  callback();
});
//*/
