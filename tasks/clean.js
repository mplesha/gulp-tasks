'use strict';

const gulp = require('gulp');
const clean = require('gulp-clean');

gulp.task('clean', () => {
    gulp.src('main/public/**/*')
    .pipe(clean());
});
