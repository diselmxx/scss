const config = require('config');

module.exports = function() {
    this.opts.browserSync.init({
        server: {
            baseDir: config.get('html.targetDir')
        }
    });

    this.gulp.watch(`${config.get('css.sourceDir')}/**/*.css`, ['css']);
    //this.gulp.watch(`${config.get('stylus.sourceDir')}/**/*.styl`, ['styles']);

    this.gulp.watch('./src/sass/**/*.scss', ['styles']);

    this.gulp.watch(`${config.get('html.sourceDir')}/**/*.html`, ['fileinclude']);
    //this.gulp.watch(`${config.get('html.targetDir')}/*.html`).on('change', this.opts.browserSync.reload);
    this.gulp.watch(`${config.get('js.targetDir')}/*.js`).on('change', this.opts.browserSync.reload);

    this.gulp.watch(`${config.get('js.targetDir')}/app.js`, ['minify-js']);

    this.gulp.watch(`${config.get('css.targetDir')}/*.min.css`, ['asset-version']);
    this.gulp.watch(`${config.get('js.targetDir')}/*.min.js`, ['asset-version']);
};
