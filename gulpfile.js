const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const babel = require('gulp-babel');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const pipeline = require('readable-stream').pipeline;
const { watch, series } = require('gulp');
const image = require('gulp-image');
var webserver = require('gulp-webserver');


gulp.task('minify', () => {
  return gulp.src('*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./public'));
});

gulp.task('css', () => {
  return gulp.src('assets/styles/*.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('js', () => {
  return gulp.src('assets/js/app.js')
    .pipe(babel())
    .pipe(gulp.dest('./public/js'))
});

gulp.task('compress', function () {
  return gulp.src('assets/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./public/js'));
});

gulp.task('watch', function() {
  gulp.watch('assets/styles/*.css', gulp.parallel('css'));
  gulp.watch('*.html', gulp.parallel('minify'));
  gulp.watch('assets/js/*.js', gulp.parallel('js'));
  gulp.watch('assets/js/*.js', gulp.parallel('compress'));
});

gulp.task('image', function () {
  return gulp.src('assets/images/*')
   .pipe(image())
   .pipe(gulp.dest('./public/images'));
});

gulp.task('webserver', function() {
  gulp.src('public')
    .pipe(webserver({
      fallback: 'index.html'
    }));
});

