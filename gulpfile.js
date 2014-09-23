var gulp    = require('gulp');
var sass    = require('gulp-sass');
var rename  = require('gulp-rename');
var cssmin  = require('gulp-minify-css');

gulp.task('scss', function() {
  return gulp.src('scss/all.scss')
    .pipe(sass())
    .pipe(rename('furtive.css'))
    .pipe(gulp.dest('css'))
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('css'));
});

gulp.task('min', function() {
  return gulp.src('css/furtive.scss')
    .pipe(cssmin())
    .pipe(rename('furtive.min.css'))
    .pipe(gulp.dest('css'));
});

gulp.task('default', ['scss', 'min']);
