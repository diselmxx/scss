const config = require('config');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

module.exports = function () {
    if (process.env.NODE_ENV === 'production') {
        return this.gulp.src(`${config.get("js.targetDir")}/app.js`)
            .pipe(rename('app.min.js'))
            .pipe(uglify())
            .pipe(this.gulp.dest(config.get('js.targetDir')));
    }

    return this.gulp.src(`${config.get("js.targetDir")}/app.js`)
        .pipe(rename('app.min.js'))
        .pipe(this.gulp.dest(config.get('js.targetDir')));
};
