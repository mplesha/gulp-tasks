'use strict';

const gulp = require('gulp');

gulp.task('images', () => {
    gulp.src(['src/images/**/*'])
    .pipe(gulp.dest('main/public/assets/images'));
});
