const gulp = require('gulp');
const sass = require('gulp-sass');
const webpack = require('gulp-webpack');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

const src = {
  'css':'./src/sass/**/*.scss',
  'js':'./src/js/**/*.js',
  'html':'./client/**/*.html'
}

const dest = {
  'css':'./client/css',
  'js':'./client/js'
}

//定义sass任务
gulp.task('sass', () => {
  return  gulp.src(src.css)
          .pipe(sass({outputStyle:'compressed'}).on('error', sass.logError))
          .pipe(gulp.dest(dest.css))
          .pipe(reload({stream:true}));
})

gulp.task('es6', () => {
  return gulp.src(src.js)
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest(dest.js))
        .pipe(reload({stream:true}));
})

gulp.task('server',['sass', 'es6'], () => {
  browserSync.init({
    proxy:'localhost:3000',
    notify:false
  })
  gulp.watch(src.html).on('change', reload);
  gulp.watch(src.css, ['sass']);
  gulp.watch(src.js, ['es6']);
})

gulp.task('default', ['server']);
