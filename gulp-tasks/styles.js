const config = require('config');
const gulp = require('gulp');
const sass = require('gulp-sass');
//const stylus = require('gulp-stylus');
const autoprefixer = require('gulp-autoprefixer');
const postcss = require('gulp-postcss');
const lost = require('lost');
const rupture = require('rupture');
const tailwindcss = require('tailwindcss');

module.exports = function () {
    return gulp.src('./src/sass/bootstrap.scss')
    .pipe(sass().on('error', sass.logError))
    
    .pipe(postcss([
            tailwindcss('./tailwind.js'),
            lost()
        ]))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./src/css'));
};
