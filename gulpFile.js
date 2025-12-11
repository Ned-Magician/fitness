const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const terser = require("gulp-terser");
const imagemin = require("gulp-imagemin");
const rename = require("gulp-rename");
const useref = require("gulp-useref");
const changed = require("gulp-changed");

// Compile SCSS -> CSS
function scssTask() {
  return src("src/assets/sass/**/*.scss", { sourcemaps: true })
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest("dist/css", { sourcemaps: "." }));
}

// Minify JS
function jsTask() {
  return src("src/assets/js/**/*.js")
    .pipe(terser())
    .pipe(dest("dist/js"));
}

// Copy images
function imgTask() {
  return src("src/assets/images/**/*")
    .pipe(imagemin())
    .pipe(dest("dist/images"));
}

// Copy HTML and fix paths
function htmlTask() {
  return src("src/fitness.html")
    .pipe(rename("index.html"))
    // Replace ../dist/ paths with direct paths inside dist/
    .pipe(useref())
    .pipe(dest("dist"));
}

// Watch files for development
function watchTask() {
  watch("src/assets/sass/**/*.scss", scssTask);
  watch("src/assets/js/**/*.js", jsTask);
  watch("src/assets/images/**/*", imgTask);
  watch("src/fitness.html", htmlTask);
}

// Build task
exports.build = series(htmlTask, scssTask, jsTask, imgTask);
exports.default = series(exports.build, watchTask);
