var gulp = require("gulp");

var sass = require("gulp-sass");
var concatCss = require("gulp-concat-css");
var concat = require("gulp-concat");
var autoprefixer = require("gulp-autoprefixer");

var imagemin = require('gulp-imagemin');

var watch = require("gulp-watch");
var runSequence = require("run-sequence");

var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');

var minify = require("gulp-minify");
var util = require("gulp-util");

// *************************************************************

var path = {
  font: "src/fonts/*.*",
  customscss: "src/sass/**/*.scss",
  vendorscss: "src/sass/vendor/*.scss",
  tmp: "temporary/",
  dist: "src/dist/",
  vendorjs: "src/js/vendor/*.js",
  customjs: "src/js/*.js"
};

// ***************** STYLES ************************************
gulp.task("build-styles", function() {
  gulp
    // .src(path.customscss)
    .src("src/sass/style.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(concatCss("bundle.css"))
    .pipe(autoprefixer())
    .pipe(gulp.dest(path.dist));

  gulp
    .src(path.vendorscss)
    .pipe(sass().on("error", sass.logError))
    .pipe(concatCss("vendor.css"))
    .pipe(autoprefixer())
    .pipe(gulp.dest(path.dist));

});
// ***************** SCRIPTS ************************************
gulp.task("build-scripts", function() {

  gulp.src(path.vendorjs)
    .pipe(gulp.dest(path.dist + 'vendor/'));

  gulp.src([path.customjs, "!src/js/utils.js"])
    .pipe(gulp.dest(path.dist));

    gulp
      .src(["node_modules/babel-polyfill/dist/polyfill.min.js", "src/js/utils.js"])
      .pipe(concat("utils.js"))
      .pipe(
        babel({
          presets: ["@babel/env"]
        })
      )
      .pipe(gulp.dest(path.dist));
});

// ***************** FONT ************************************
gulp.task("build-fonts", function() {

  gulp.src(path.font)
    .pipe(gulp.dest(path.dist + 'fonts/'));

});

gulp.task("build-images", function() {

    gulp.src(['src/images/photos/**/*.jpg', "!src/images/photos/**/low/*.jpg"])
        .pipe(imagemin({verbose: true}))
        .pipe(gulp.dest('src/images/photos/**/*.jpg'))

});


// *************************************************************

gulp.task('sass:watch', function () {
  gulp.watch(path.customscss, ["build-styles"]);
});

gulp.task('build', ['build-styles', 'build-scripts', 'build-fonts']);