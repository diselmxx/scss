const config = require('config');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

module.exports = function () {
    return this.gulp.src(`${config.get("vendor.sourceDir")}/*.js`)
        .pipe(concat('vendor.js'))
        .pipe(this.gulp.dest(config.get('vendor.targetDir')))
        .pipe(rename('vendor.min.js'))
        .pipe(uglify())
        .pipe(this.gulp.dest(config.get('vendor.targetDir')));
};
