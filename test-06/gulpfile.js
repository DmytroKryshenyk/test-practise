const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src(['sass/**/*.sass', 'sass/**/*.scss'])
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('css'))
});

gulp.task('sass:watch', function() {
  gulp.watch(['sass/**/*.sass' , 'sass/**/*.scss'], ['sass']);
});
