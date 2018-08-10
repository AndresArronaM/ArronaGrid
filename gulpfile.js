const gulp          = require('gulp')                     ;
const postcss       = require('gulp-postcss')             ;
const cssnano       = require('cssnano')                  ;
const sass          = require('gulp-sass')                ;
const autoprefixer  = require('autoprefixer')             ;
const sourcemaps    = require('gulp-sourcemaps')          ;

var processors =[
  cssnano,
  autoprefixer({
    grid:true
  })
]

gulp.task('styles',()=>{

  gulp.src('./ArronaGrid.scss')
    .pipe(sass())
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./css'));
});

gulp.task('default', ()=>{
  gulp.watch('./**/*.scss', ['styles']);
});
