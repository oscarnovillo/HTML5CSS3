/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var gulp = require('gulp');
var concat = require('gulp-concat');
var nano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require( 'gulp-util' );
var ftp = require( 'vinyl-ftp' );
var gulpDeployFtp = require('gulp-deploy-ftp');

gulp.task('default', ['css']);
gulp.task('css', function () {
    return gulp.src('./public_html/css/*.css')
        .pipe(nano())
    .pipe(concat('style.min.css'))
        .pipe(gulp.dest('./public_html/dist/css'));
});
//
//gulp.task('kk',function(){
//   
//
// 
//var options = {
//  user: 'quevedo1dam\quevedoftp',
//  password: 'Quevedo2015',
//  port: '21',
//  host: '23.101.62.6',
//  uploadPath: '/site/wwwroot'
//};
// 
//gulp.src('./public_html/index.html')
//  .pipe(gulpDeployFtp(options))
//  .pipe(gulp.dest('dest'));
//});
//
//gulp.task( 'deploy', function () {
//
//    var conn = ftp.create( {
//        host:     '23.101.62.6',
//        user:     'quevedo1dam/quevedoftp',
//        password: 'Quevedo2015',
//        log:      gutil.log
//    } );
//
//    var globs = [
//        'src/**',
//        'css/**',
//        'js/**',
//        'fonts/**',
//        '*.html'
//    ];
//
//    // using base = '.' will transfer everything to /public_html correctly
//    // turn off buffering in gulp.src for best performance
//
//    return gulp.src( globs, { cwd: './public_html', buffer: false } )
//        //.pipe( conn.newer( '/site/wwwroot' ) ) // only upload newer files
//        .pipe( conn.dest( '/site/wwwroot' ) );
//
//} );
//
