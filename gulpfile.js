var gulp    = require('gulp');
var sass    = require('gulp-sass');
var gstylus = require('gulp-stylus');
var rename  = require('gulp-rename');
var cssmin  = require('gulp-minify-css');
var prefix  = require('gulp-autoprefixer');
var size    = require('gulp-size');
var uncss   = require('gulp-uncss');
var header  = require('gulp-header');
var gutil   = require('gulp-util');
var rework  = require('gulp-rework');
var grid    = require('rework-flex-grid');
var replace = require('gulp-replace');
var clean   = require('gulp-clean');
var a11y    = require('a11y');

var pkg = require('./package.json');
var banner = ['/**',
              ' * <%= pkg.name %> - <%= pkg.description %>',
              ' * @author <%= pkg.author %>',
              ' * @version v<%= pkg.version %>',
              ' * @link <%= pkg.homepage %>',
              ' * @license <%= pkg.license %>',
              ' */\n\n'].join('\n');

gulp.task('scss', function() {
  return gulp.src('scss/all.scss')
    .pipe(sass())
    .pipe(size({ gzip: true, showFiles: true }))
    .pipe(prefix("last 2 versions"))
    .pipe(rename('furtive.css'))
    .pipe(header(banner, { pkg : pkg } ))
    .pipe(gulp.dest('css'))
    .pipe(cssmin({ keepSpecialComments: 0 }))
    .pipe(size({ gzip: true, showFiles: true }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('css'));
});

gulp.task('stylus', function() {
  return gulp.src('stylus/all.styl')
    .pipe(gstylus())
    .pipe(size({ gzip: true, showFiles: true }))
    .pipe(prefix("last 2 versions"))
    .pipe(rename('furtive.css'))
    .pipe(header(banner, { pkg : pkg } ))
    .pipe(gulp.dest('css'))
    .pipe(cssmin({ keepSpecialComments: 0 }))
    .pipe(size({ gzip: true, showFiles: true }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('css'));
});

gulp.task('rework-grid', function() {
  return gulp.src('scss/_grid.scss')
    .pipe(replace(/\.*/, ''))
    .pipe(clean())
    .pipe(rework(
      grid({
        numColumns: 6,
        classNames: {
          grid: 'grd',
          row: 'row',
          col: 'col'
        }
      })
    ))
    .pipe(gulp.dest('scss'));
});

gulp.task('rework-grid-styl', function() {
  return gulp.src('stylus/_grid.styl')
    .pipe(replace(/\.*/, ''))
    .pipe(clean())
    .pipe(rework(
      grid({
        numColumns: 6,
        classNames: {
          grid: 'grd',
          row: 'row',
          col: 'col'
        }
      })
    ))
    .pipe(gulp.dest('stylus'));
});

gulp.task('uncss', function() {
  return gulp.src('css/furtive.min.css')
    .pipe(size({ gzip: true, showFiles: true }))
    .pipe(uncss({ html: ['index.html'] }))
    .pipe(rename('site/index.furtive.min.css'))
    .pipe(cssmin())
    .pipe(size({ gzip: true, showFiles: true }))
    .pipe(gulp.dest('./'));
});

gulp.task('a11y', function() {
  a11y('http://furtive.co', function(err, reports) {
    if (err) {
      gutil.log(gutil.colors.red('gulp a11y error: ' + err));
      return;
    }

    reports.audit.forEach(function(report) {
      if (report.result === 'FAIL') {
        gutil.log(displaySeverity(report), gutil.colors.red(report.heading), report.elements);
      }
    });
  });
});

function displaySeverity(report) {
  if (report.severity == 'Severe') {
    return gutil.colors.red('[' + report.severity + '] ');
  } else if (report.severity == 'Warning') {
    return gutil.colors.yellow('[' + report.severity + '] ');
  } else {
    return '[' + report.severity + '] ';
  }
}

gulp.task('watch', function() {
  gulp.watch(['scss/*.scss','stylus/*.styl'], ['scss','stylus']);
});

gulp.task('default', ['scss', 'stylus', 'watch']);
