"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");
const htmlmin = require("gulp-htmlmin");
const clean = require("gulp-clean");

gulp.task("sass", function() {
  return gulp
    .src(["./src/sass/**/*.scss", "./src/sass/**/*.sass"])
    .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
    .pipe(gulp.dest("build/css"))
});

gulp.task("htmlmin", () => {
  return gulp
    .src("./src/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("build"));
});

gulp.task("clean", function() {
  return gulp.src("./build", { read: false }).pipe(clean());
});

gulp.task("copy:fonts", function() {
  return gulp.src("./src/fonts/**/*.*").pipe(gulp.dest("./build/fonts"));
});

gulp.task("copy:img", function() {
  return gulp.src("./src/img/**/*.*").pipe(gulp.dest("./build/img"));
});

gulp.task("copy:normalize", function() {
  return gulp.src("./src/normalize.css").pipe(gulp.dest("./build"));
});


gulp.task("build", gulp.series("sass", "htmlmin", "copy:fonts", "copy:img", "copy:normalize"));

gulp.task("watch", function() {
  gulp.watch(["./src/sass/**/*.sass", "./src/sass/**/*.scss"], gulp.series("sass"));
  gulp.watch(["./src/*.html", "src/sass/**/*.scss"], gulp.series("htmlmin"));
  gulp.watch("./src/fonts/**/*.*", gulp.series("copy:fonts"));
  gulp.watch("./src/img/**/*.*", gulp.series("copy:img"));
  gulp.watch("./src/normalize.css", gulp.series("copy:normalize"));
});
