const gulp = require("gulp");
const sass = require("gulp-sass");
const htmlmin = require("gulp-htmlmin");
// const cssnano = require("gulp-cssnano");

// Таски для збору компіляції SASS в CSS
gulp.task("sass", function() {
  return gulp
    .src(["src/sass/**/*.sass", "src/sass/**/*.scss"])
    .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
    .pipe(gulp.dest("build/css"));
});

gulp.task("sass:watch", function() {
  gulp.watch(["src/sass/**/*.sass", "src/sass/**/*.scss"], ["sass"]);
});

// Таски для мініфікації CSS 

// gulp.task("cssminify", ["sass"], function() {
//   return gulp
//     .src("build/css/*.css")
//     .pipe(cssnano())
//     .pipe(gulp.dest("build/css"));
// });

// gulp.task("cssminify:watch", function() {
//   gulp.watch("build/css/*.css", ["cssminify"]);
// });


// Такси для мініфікації HTML
gulp.task("htmlminify", () => {
  return gulp
    .src("src/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("build"));
});

gulp.task("htmlminify:watch", function() {
  gulp.watch("src/*.html", ["htmlminify"]);
});

// Таск, щоб перемістити картинки

gulp.task("moveimg", function() {
  return gulp
  .src("src/img/**/*.{jpg,png,jpeg,svg}")
  .pipe(gulp.dest("build/img"));
});

// Таск, щоб перемістити шрифти

gulp.task("movefonts", function() {
  return gulp
  .src("src/fonts/**/*.{eot,ttf,woff}")
  .pipe(gulp.dest("build/fonts"));
});

// Таск, щоб перемістити вказані нами файли
gulp.task("movefiles", function() {
  return gulp
  .src("src/normalize.css")
  .pipe(gulp.dest("build"))
});


// Такс для запуску всіх тасків, які ми вкажем
gulp.task("startall", ["sass", "htmlminify", "moveimg", "movefonts", "movefiles"]);

gulp.task("startall:watch", function() {
  gulp.watch(["src/sass/**/*.sass", "src/sass/**/*.scss"], ["sass"]);
  gulp.watch("src/*.html", ["htmlminify"]);
  // gulp.watch("src/css/*.css", ["cssminify"]);
  gulp.watch("src/img/**/*.{jpg,png,jpeg,svg}", ["moveimg"]);
  gulp.watch("src/fonts/**/*.{eot,ttf,woff}", ["movefonts"]);
  gulp.watch("src/normalize.css", ["movefiles"]);
});
