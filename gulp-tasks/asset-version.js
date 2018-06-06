const config = require('config');
const assetVersion = require('gulp-asset-version');
const replace = require('gulp-replace');

module.exports = function () {
    return this.gulp.src([
        `${config.get('html.index')}`,
    ])
        //.pipe(replace('"/', '"./'))
        .pipe(assetVersion())
        //.pipe(replace('"./', '"/'))
        .pipe(this.gulp.dest(`${config.get('html.root')}`));
};
