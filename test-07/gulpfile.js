"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");
const htmlmin = require("gulp-htmlmin");

sass.compiler = require("node-sass");

gulp.task("sass", function() {
  return gulp
    .src(["src/sass/**/*.sass", "src/sass/**/*.scss"])
    .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
    .pipe(gulp.dest("build/css"));
});

gulp.task("minifyhtml", () => {
  return gulp
    .src("src/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("build"));
});

gulp.task("movefonts", function() {
  return gulp.src("src/fonts/**/*.*").pipe(gulp.dest("build/fonts"));
});

gulp.task("movenormalizecss", function() {
  return gulp.src("src/normalize.css").pipe(gulp.dest("build"));
});

gulp.task("moveimages", function() {
  return gulp.src("src/img/**/*.*").pipe(gulp.dest("build/img"));
});

gulp.task("watch", function() {
  gulp.watch(["src/sass/**/*.sass", "src/sass/**/*.scss"], gulp.series("sass"));
  gulp.watch("src/*.html", gulp.series("minifyhtml"));
  gulp.watch("src/fonts/**/*.*", gulp.series("movefonts"));
  gulp.watch("src/normalize.css", gulp.series("movenormalizecss"));
  gulp.watch("src/img/**/*.*", gulp.series("moveimages"));
});
