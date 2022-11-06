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

//------SASS Task--------
function scssTask() {
  return src("./src/assets/sass/**/*.scss", { sourcemaps: true })
    .pipe(useref())
    .pipe(changed("dist/scss"))
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest("./dist/css", { sourcemaps: "." }));
}
//------JavaScript  Task--------
// function jsTask() {
//   return gulp
//     .src("src/assets/js/*.js", { sourcemaps: true })
//     .pipe(useref())
//     .pipe(terser())
//     .pipe(gulp.dest("dist/js", { sourcemaps: "." }));
// }
//------Minify Images Task--------
// function imgTask() {
//   const dist = "dist/images/*";
//   return gulp
//     .src("src/assets/images/**/*.+(png|jpg|gif|svg)")
//     .pipe(changed(dist))
//     .pipe(imagemin())
//     .pipe(gulp.dest("dist/images"));
// }
//------copy fonts Task--------
// function CopyTask() {
//   return gulp
//     .src("src/assets/fonts/**/*", { sourcemaps: true })
//     .pipe(changed("dist/fonts/**/*"))
//     .pipe(gulp.dest("dist/fonts", { sourcemaps: "." }));
// }

//------Watch Task--------
function watchTask() {
  watch(["src/assets/sass/**/*.scss"], series(scssTask));
}
//------ Default Gulp Task--------
exports.default = series(scssTask, watchTask);
