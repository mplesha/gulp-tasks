'use strict';

const gulp = require('gulp');
const browserify = require('gulp-browserify');
const concat = require('gulp-concat');
const envify = require('gulp-envify');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');

gulp.task('js', () => {
    gulp.src(['src/**/*.js'])
    .pipe(sourcemaps.init())
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(concat('main.js'))
    .pipe(envify(process.env))
    .pipe(browserify())
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('main/public/assets/'));
});
