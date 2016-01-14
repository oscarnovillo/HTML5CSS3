/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var gulp = require('gulp');
var concat = require('gulp-concat');
var nano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', ['css']);
gulp.task('css', function () {
    return gulp.src('./public_html/css/*.css')
        .pipe(nano())
    .pipe(concat('style.min.css'))
        .pipe(gulp.dest('./public_html/dist/css'));
});

