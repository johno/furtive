var gulp    = require('gulp');
var sass    = require('gulp-sass');
var rename  = require('gulp-rename');
var cssmin  = require('gulp-minify-css');
var prefix  = require('gulp-autoprefixer');

gulp.task('scss', function() {
  return gulp.src('scss/all.scss')
    .pipe(sass())
    .pipe(prefix("last 1 version", "> 1%", "ie 10"))
    .pipe(rename('furtive.css'))
    .pipe(gulp.dest('css'))
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
  gulp.watch('scss/*.scss', ['scss']);
});

gulp.task('default', ['scss', 'watch']);
