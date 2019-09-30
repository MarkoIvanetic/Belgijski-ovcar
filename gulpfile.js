var gulp = require("gulp");

var sass = require("gulp-sass");
var concatCss = require("gulp-concat-css");
var concat = require("gulp-concat");
var autoprefixer = require("gulp-autoprefixer");

var watch = require("gulp-watch");
var runSequence = require("run-sequence");

const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');

var minify = require("gulp-minify");
var util = require("gulp-util");

// *************************************************************

var path = {
  customscss: "src/css/*.scss",
  vendorscss: "src/css/vendor/*.scss",
  tmp: "temporary/",
  dist: "dist/",
  vendorjs: "src/js/vendor/*.js",
  customjs: "src/js/*.js"
};

// ***************** STYLES ************************************
gulp.task("build-styles", function() {
  gulp
    .src(path.customscss)
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
    // .pipe(minify({noSource: true}))
    .pipe(concat('vendor.js'))
      .pipe(
        babel({
          presets: ["@babel/env"]
        })
      )
    .pipe(gulp.dest(path.dist));

  if (util.env.production) {
    gulp
      .src(path.customjs)
      .pipe(concat('custom.js'))
      .pipe(
        babel({
          presets: ["@babel/env"]
        })
      )
      .pipe(gulp.dest(path.dist));
  } else {
    gulp
      .src(path.customjs)
      // .pipe(concat('custom.js'))
      // .pipe(sourcemaps.init())
      // .pipe(
      //   babel({
      //     presets: ["@babel/env"]
      //   })
      // )
      // .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(path.dist));
  }
});


// *************************************************************

gulp.task('sass:watch', function () {
  gulp.watch(path.customscss, ["build-styles"]);
});

gulp.task('build', ['build-styles', 'build-scripts']);