const config = require('config');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const notify = require('gulp-notify');

module.exports = function () {
    return this.gulp.src(`${config.get('css.sourceDir')}/**/*.css`)
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(concat('build.min.css'))
        .pipe(this.gulp.dest(`${config.get('css.targetDir')}`))
        .pipe(this.opts.browserSync.stream())
        .pipe(notify('CSS Compiled'));
};
