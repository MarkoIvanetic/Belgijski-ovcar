var gulp = require('gulp');
var watch = require('gulp-watch');
var minify = require('gulp-minify');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var runSequence = require('run-sequence');
var concatCss = require('gulp-concat-css');
var autoprefixer = require('gulp-autoprefixer');
var clean = require('gulp-clean');
var order = require("gulp-order");

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
gulp.task("styles", function() {
  gulp
    .src(path.scss)
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest(path.tmp));

  gulp
    .src(path.css)
    .pipe(gulp.dest(path.tmp));

  gulp
    .src(path.tmp + "/*.css")
    .pipe(concatCss("bundle.css"))
    .pipe(gulp.dest(path.dist));

  gulp
    .src(path.tmp + "/vendor/*.css")
    .pipe(concatCss("vendor.css"))
    .pipe(gulp.dest(path.dist));

  gulp
    .src([path.dist + "bundle.css", path.dist + "vendor.css"])
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

gulp.task('build-scripts', function() {
  gulp.src(path.customjs)
    .pipe(order([
    "src/js/pedigree_data.js",
    "src/js/rodovnice.js"
  ]))
  .pipe(concat("rodovnice.js"))
  .pipe(gulp.dest(path.dist));
  
});
// *****************************************************
gulp.task('clean-temp', function() {
    return gulp.src('temporary/', {read: false})
        .pipe(clean({force: true}));
});
// *****************************************************

gulp.task('sass:watch', function () {
  gulp.watch(path.scss, ["build-style"]);
});


gulp.task('build-style', function(callback) {
    return runSequence('clean-temp', 'styles', callback);
});

gulp.task('build', function(callback) {
    return runSequence('clean-temp', 'sass', 'copy-css', ['build-css-custom', 'build-css-vendor'], ['build-autoprefixer', 'build-custom'], callback);
});

gulp.task('build-full', function(callback) {
    return runSequence('clean-temp', 'sass', 'copy-css', ['build-css-custom', 'build-css-vendor'], ['build-autoprefixer', 'build-vendor', 'build-custom'], 'minify-vendor', callback);
});
