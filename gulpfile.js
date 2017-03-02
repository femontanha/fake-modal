'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var server = require('gulp-server-livereload');
var normalize = require('node-normalize-scss').includePaths;
var autoprefixer = require('gulp-autoprefixer');

gulp.task('webserver', ['watch'], function() {
  gulp.src('./')
    .pipe(server({
      defaultFile: 'index.html',
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

gulp.task('sass', function () {
  return gulp.src('./assets/scss/**/*.scss')
    .pipe(sass({
      includePaths: [].concat(normalize),
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest('./assets/css-min/'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./assets/scss/**/*.scss', ['sass']);
});

gulp.task('prefixer', function () {
  gulp.src('assets/css-min/app.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('assets/css-min'))
});

gulp.task('default', [ 'sass', 'webserver' ]);
gulp.task('watch', [ 'sass:watch' ]);
