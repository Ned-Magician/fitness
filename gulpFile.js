const { src, dest, watch, series } = require("gulp");
const gulp = require("gulp");
const useref = require("gulp-useref");
const sass = require("gulp-sass")(require("sass"));
// const dartSass = gulpSass(dartSass);
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const terser = require("gulp-terser");
const changed = require("gulp-changed");
const imagemin = require("gulp-imagemin");
const rename = require("gulp-rename");

//------SASS Task--------
function scssTask() {
  return src("./src/assets/sass/**/*.scss", { sourcemaps: true })
    .pipe(useref())
    .pipe(changed("dist/scss"))
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest("./dist/css", { sourcemaps: "." }));
}

function htmlTask() {
  return src("src/fitness.html").pipe(rename("index.html")).pipe(dest("dist"));
}

function imgTask() {
  return src("src/assets/images/**/*").pipe(dest("dist/images"));
}

function jsTask() {
  return src("src/assets/js/**/*.js").pipe(terser()).pipe(dest("dist/js"));
}

//------Watch Task--------
function watchTask() {
  watch(["src/assets/sass/**/*.scss"], series(scssTask));
}

//------ Default Gulp Task--------
exports.build = series(htmlTask, scssTask, jsTask, imgTask);
exports.default = series(exports.build, watchTask);
