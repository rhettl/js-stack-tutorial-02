'use strict';

const fs         = require('fs');
const path       = require('path');
const gulp       = require('gulp');
const webpack    = require('gulp-webpack');
const named      = require('vinyl-named');
const sass       = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const rm         = require('gulp-rimraf');


gulp.task('js', ['js:clean'], function () {
  return gulp.src('public/source/js/*.js')
    .pipe(named())
    .pipe(webpack({
      devtool: 'source-map',
      output:  {
        filename:          '[name].js',
        sourceMapFilename: '[name].js.map'
      },
      module:  {
        loaders: [
          {
            test:    /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader:  'babel-loader',
            query:   {
              presets: ['es2015']
            }
          }
        ]
      },
    }))
    .pipe(gulp.dest('public/build/js/'));
});
gulp.task('js:watch', ['js'], function () {
  gulp.watch(['public/source/js/**/*.js'], ['js']);
});
gulp.task('js:clean', function () {
  return gulp.src('./public/build/js/**/*')
    .pipe(rm({force: true}))
    ;
});


gulp.task('sass', ['sass:clean'], function () {
  return gulp.src(['public/source/styles/**/*.scss', '!public/source/styles/**/_*.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('public/build/styles/'));
});
gulp.task('sass:watch' ['sass'], function () {
  gulp.watch(['public/source/styles/**/*.scss'], ['sass', 'fonts']);
});
gulp.task('sass:clean', function () {
  return gulp.src('./public/build/styles/**/*')
    .pipe(rm({force: true}))
    ;
});


gulp.task('fonts', ['fonts:clean'], function () {
  return gulp.src(['./node_modules/font-awesome/fonts/*.*'])
    .pipe(gulp.dest('public/build/fonts/'));
});
gulp.task('fonts:clean', ['fonts'], function () {
  return gulp.src('./public/build/fonts/**/*')
    .pipe(rm({force: true}))
    ;
});

gulp.task('build', ['js', 'sass', 'fonts']);
gulp.task('watch', ['js:watch', 'sass:watch']);
gulp.task('default', ['watch']);
