const gulp = require("gulp");
var sass = require("gulp-sass");
const htmlmin = require("gulp-htmlmin");

gulp.task("clean", function() {
  del.sync("./build");
});

gulp.task("sass", function() {
  return gulp
    .src("src/sass/**/*.scss")
    .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
    .pipe(gulp.dest("build/css"));
});

gulp.task("sass:watch", function() {
  gulp.watch(["src/sass/**/*.sass", "src/sass/**/*.scss"], gulp.series("sass"));
});

gulp.task("copynormalize", function() {
  return gulp.src("src/sass/normalize.css").pipe(gulp.dest("build/css"));
});

gulp.task("copybootstrap", function() {
  return gulp.src("src/sass/bootstrap.min.css").pipe(gulp.dest("build/css"));
});

gulp.task("copyimages", function() {
  return gulp.src("src/img/**/*.*").pipe(gulp.dest("build/img"));
});

gulp.task("copyfonts", function() {
  return gulp.src("src/fonts/**/*.*").pipe(gulp.dest("build/fonts"));
});

gulp.task("htmlminify", () => {
  return gulp
    .src("src/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("build"));
});

gulp.task("htmlminify:watch", function() {
  gulp.watch("src/*.html", gulp.series("htmlminify"));
});

// gulp.task("startall", ["sass", "htmlminify", "copynormalize", "copyimages", "copyfonts"]);

gulp.task("startall:watch", function() {
  gulp.watch(["src/sass/**/*.sass", "src/sass/**/*.scss"], gulp.series("sass"));
  gulp.watch("src/*.html", gulp.series("htmlminify"));
  gulp.watch("src/fonts/**/*.*", gulp.series("copyfonts"));
  gulp.watch("src/img/**/*.*", gulp.series("copyimages"));
  gulp.watch("src/**/normalize.css", gulp.series("copynormalize"));
});
