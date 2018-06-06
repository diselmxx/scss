const config = require('config');
const browserify = require('browserify');
const babelify = require('babelify');
const vueify = require('vueify');
const envify = require('envify');
const rename = require('gulp-rename');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const notify = require('gulp-notify');

module.exports = function () {
    return browserify({
        entries: `${config.get("js.sourceDir")}/bootstrap.js`,
        debug: false,
    })
        .transform(babelify)
        .transform(vueify)
        .transform(envify, {global: true, _: 'purge'})
        .bundle()
        .pipe(source(`bootstrap.js`))
        .pipe(buffer())
        .pipe(rename('app.js'))
        .pipe(this.gulp.dest(config.get('js.targetDir')))
        .pipe(notify('JS Compiled'));
};
