const gulp = require("gulp");
const sass = require("gulp-sass");
const htmlmin = require("gulp-htmlmin");
var cssnano = require('gulp-cssnano');

// Таски для збору компіляції SASS в CSS
gulp.task("sass", function() {
  return gulp.src(["src/sass/**/*.sass", "src/sass/**/*.scss"])
    .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
    .pipe(gulp.dest("src/css"));
});

gulp.task("sass:watch", function() {
  gulp.watch(["src/sass/**/*.sass", "src/sass/**/*.scss"], ["sass"]);
});

// Такси для мініфікації HTML
gulp.task("htmlminify", () => {
  return gulp.src("src/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("build"));
});

gulp.task("htmlminify:watch", function (){
  gulp.watch("src/*.html", ['htmlminify']);
});

// Таски для мініфікації CSS

gulp.task('cssminify', ['sass'], function(){
  return gulp.src('src/css/*.css')
  .pipe(cssnano())
  .pipe(gulp.dest('build/css')); 
}); 

gulp.task("cssminify:watch", function (){
  gulp.watch("src/css/*.css", ['cssminify']);
});

// Такс для запуску всіх тасків, які ми вкажем
gulp.task('startall', ['sass', 'cssminify', 'htmlminify']);

gulp.task('startall:watch', function() {
  gulp.watch(["src/sass/**/*.sass", "src/sass/**/*.scss"], ["sass"]);
  gulp.watch("src/*.html", ['htmlminify']);
  gulp.watch("src/css/*.css", ['cssminify']);
});

// gulp.task("startall:watch", gulp.parallel('sass','htmlminify', 'cssminify'));

