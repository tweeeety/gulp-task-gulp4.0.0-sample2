var gulp = require('gulp');
var dir = require( 'require-dir' );
dir( './tasks', { recurse: true } );

/*
 * gulp@3.x.xの書き方
 */
/*
gulp.task('default', ['hoge', 'sass']);
//*/

/*
 * gulp@^4.x.xの書き方
 */
///*
gulp.task('default', gulp.series(['hoge', 'sass']));
//*/
