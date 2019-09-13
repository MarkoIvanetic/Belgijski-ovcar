var gulp = require('gulp');
var watch = require('gulp-watch');
var minify = require('gulp-minify');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var runSequence = require('run-sequence');
var concatCss = require('gulp-concat-css');
var autoprefixer = require('gulp-autoprefixer');

sass.compiler = require('node-sass');

var path = {
    css: 'src/css/**/*.css',
    scss: 'src/css/**/*.scss',
    tmp: 'temporary/',
    dist: 'dist/',
    vendorjs: 'src/js/vendor/*.js',
    customjs: 'src/js/*.js'
};

// *****************************************************
gulp.task('sass', function () {
  return gulp.src(path.scss)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(path.tmp));
});
gulp.task('copy-css', function() {
   gulp.src(path.css)
   .pipe(gulp.dest(path.tmp));
});
gulp.task('build-css', function() {
    return gulp.src([path.tmp + '/vendor/*.css', path.tmp + '/*.css'])
        .pipe(concatCss("bundle.css"))
        .pipe(gulp.dest(path.dist));
});
gulp.task('build-autoprefixer', function() {
    return gulp.src(path.dist + 'bundle.css')
        .pipe(autoprefixer())
        .pipe(gulp.dest(path.dist));
});

// *****************************************************
gulp.task('build-vendor', function() {
  return gulp.src(path.vendorjs)
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest(path.dist));
});
gulp.task('build-custom', function() {
  return gulp.src(path.customjs)
    .pipe(concat('custom.js'))
    .pipe(gulp.dest(path.dist));
});
gulp.task('minify-vendor', function() {
  gulp.src(path.dist+'vendor.js')
    .pipe(minify())
    .pipe(gulp.dest(path.dist))
});
// *****************************************************

gulp.task('sass:watch', function () {
  gulp.watch(path.scss, ['sass', 'copy-css', 'build-css']);
});


gulp.task('build', function(callback) {
    return runSequence(['sass', 'copy-css', 'build-css', 'build-autoprefixer'], ['build-custom'], callback);
});

gulp.task('build-full', function(callback) {
    return runSequence(['sass', 'copy-css', 'build-css', 'build-autoprefixer'], ['build-vendor', 'build-custom'], ['minify-vendor'], callback);
});
