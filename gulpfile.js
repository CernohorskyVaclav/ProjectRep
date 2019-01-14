const { src, dest, parallel } = require('gulp');
var csso = require('gulp-csso');

function html() {
    return src('./src/*.html')
        .pipe(dest('./build/'))
}
function css() {
    return src('./src/css/*.css')
        .pipe(csso())
        .pipe(dest('build/css'))
}

exports.default = parallel(html, css);