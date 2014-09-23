var gulp    = require('gulp');
var sass    = require('gulp-sass');
var rename  = require('gulp-rename');
var cssmin  = require('gulp-minify-css');

gulp.task('scss', function() {
  return gulp.src('scss/all.scss')
    .pipe(sass())
    .pipe(rename('gray.css'))
    .pipe(gulp.dest('css'))
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('css'));
});

gulp.task('min', function() {
  return gulp.src('css/gray.scss')
    .pipe(cssmin())
    .pipe(rename('gray.min.css'))
    .pipe(gulp.dest('css'));
});

gulp.task('default', ['scss', 'min']);
