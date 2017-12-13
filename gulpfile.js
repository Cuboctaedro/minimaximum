var gulp = require('gulp');
var postcss = require('gulp-postcss');
var tailwindcss = require('tailwindcss');


gulp.task('css', function () {
    return gulp.src('./css/styles.css')
    .pipe(postcss([
        tailwindcss('./css/tailwind.js')
    ]))
    .pipe(gulp.dest('./static/css'));
});