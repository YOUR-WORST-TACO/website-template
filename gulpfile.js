const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');
const rename = require('gulp-rename');

sass.compiler = require('sass');

gulp.task('sass', () => {
    gulp.src('styles/**/*.scss')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('public/css/'));
    return gulp.src('styles/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest('public/css/'));
});

gulp.task('sass:watch', () => {
    gulp.watch('styles/**/*.scss', gulp.series('sass'));
})
