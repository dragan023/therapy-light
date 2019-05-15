const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

function sassTask() {
    return gulp.src('./scss/**/*.scss', {sourceMaps : true} )
    .pipe(sass())
    .pipe(gulp.dest('./dist/css'), {sourceMaps : true} )
    .pipe(browserSync.stream());
}

function sassWatch() {
    browserSync.init({
        server: {
            baseDir : './'
        }
    });
    gulp.watch('./scss/**/*.scss', sassTask);
    gulp.watch('./*.html').on('change', browserSync.reload);
}
exports.init = gulp.series(sassTask, sassWatch);