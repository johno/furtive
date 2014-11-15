var gulp    = require('gulp');
var sass    = require('gulp-sass');
var rename  = require('gulp-rename');
var cssmin  = require('gulp-minify-css');
var prefix  = require('gulp-autoprefixer');
var size    = require('gulp-size');
var uncss   = require('gulp-uncss');

gulp.task('scss', function() {
  return gulp.src('scss/all.scss')
    .pipe(sass())
    .pipe(size({ gzip: true, showFiles: true }))
    .pipe(prefix("last 1 version", "> 1%", "ie 10"))
    .pipe(rename('furtive.css'))
    .pipe(gulp.dest('css'))
    .pipe(cssmin())
    .pipe(size({ gzip: true, showFiles: true }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('css'));
});

gulp.task('uncss', function() {
  return gulp.src('css/furtive.min.css')
    .pipe(size({ gzip: true, showFiles: true }))
    .pipe(uncss({ html: ['index.html'] }))
    .pipe(rename('index.furtive.min.css'))
    .pipe(cssmin())
    .pipe(size({ gzip: true, showFiles: true }))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
  gulp.watch('scss/*.scss', ['scss']);
});

gulp.task('default', ['scss', 'watch']);
