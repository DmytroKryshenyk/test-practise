const htmlmin = require("gulp-htmlmin");
const cssnano = require("gulp-cssnano");

gulp.task("htmlminify", function() {
  return gulp
    .src("./src/index.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("./dist"));
});

gulp.task("cssminify", function() {
  return gulp
    .src("./src/css/styles.css")
    .pipe(cssnano())
    .pipe(gulp.dest("./dist/css"));
});
