var gulp = require('gulp');
var runSequence = require('run-sequence');
var concatCss = require('gulp-concat-css');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');

var path = {
    css: 'css/**/*.css',
    dist: 'dist/',
    js: 'js/**/*.js',
    img: 'images/**/*.*'
};


gulp.task('build-css', function() {
    return gulp.src(path.css)
        .pipe(concatCss("bundle.css"))
        .pipe(gulp.dest(path.dist));
});
gulp.task('build-autoprefixer', function() {
    return gulp.src(path.dist + 'bundle.css')
        .pipe(autoprefixer())
        .pipe(gulp.dest(path.dist));
});
gulp.task('minify-css', () => {
    return gulp.src(path.dist + 'bundle.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest(path.dist));
});

// *****************************************************

gulp.task('compile', function(callback) {
    return runSequence(
        'build-css',
        callback
    );
});

gulp.task('build', function(callback) {
    return runSequence(
        'build-css', 'build-autoprefixer', 'minify-css',
        callback
    );
});