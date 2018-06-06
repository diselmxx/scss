const config = require('config');
const spritesmith = require('gulp.spritesmith');

module.exports = function () {
    return this.gulp.src(config.get('sprite.path')).pipe(spritesmith({
        imgName: config.get('sprite.imgName'),
        cssName: config.get('sprite.cssName'),
        retinaSrcFilter: config.get('sprite.retinaSrcFilter'),
        retinaImgName: config.get('sprite.retinaImgName'),
        imgPath: config.get('sprite.imgPath'),
        retinaImgPath: config.get('sprite.retinaImgPath')
    })).pipe(this.gulp.dest(config.get('sprite.resultPath')));
};
