'use strict';

const gulp = require('gulp');
const fs = require('fs');
const path = require('path');
const tasksPath = path.join(__dirname, 'tasks');
const tasks = fs.readdirSync(tasksPath);

tasks.forEach(task => {
    require(path.join(tasksPath, path.basename(task, path.extname(task))));
});

gulp.task('default', ['proba', 'lint']);
