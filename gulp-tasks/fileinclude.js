const config = require('config');
const fileInclude = require('gulp-file-include');

module.exports = function () {
    return this.gulp.src([
        `${config.get('html.sourceDir')}/**/*.html`,
        `!${config.get('html.sourceDir')}/${config.get('html.includesDir')}/*.html`
    ], {base: config.get('html.sourceDir')}).pipe(fileInclude({
        prefix: '@@',
        basepath: `${config.get('html.sourceDir')}/${config.get('html.includesDir')}`
    })).pipe(this.gulp.dest(
        config.get('html.targetDir')
    ));
};
