//On recupere le css le compile en un fichier puis le renvoie minifier dans public
var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');

gulp.task('build-css', function() {
return gulp.src('build/css/**/*.css')
.pipe(concat('styles.min.css'))
.pipe(cleanCSS({compatibility: 'ie8'}))
.pipe(gulp.dest('public/assets/css'));
});

//fonction watch de build css 
var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');

gulp.task('compile-css', function() {
return gulp.src('build/css/**/*.css')
.pipe(concat('styles.min.css'))
.pipe(cleanCSS({compatibility: 'ie8'}))
.pipe(gulp.dest('public/assets/css'));
});

gulp.task('build-css-watch', function () {
gulp.watch('build/css/**/*.css', gulp.series('compile-css'));
});

