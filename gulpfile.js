const autoprefixer  = require('autoprefixer')               ;
const server        = require('browser-sync');
const cssnano       = require('cssnano')                    ;
const gulp          = require('gulp')                       ;
const plumber       = require('gulp-plumber')               ;
const postcss       = require('gulp-postcss')               ;
const rename        = require('gulp-rename')                ;
const sass          = require('gulp-sass')                  ;
const sourcemaps    = require('gulp-sourcemaps')            ;
const watch         = require('gulp-watch')                 ;
const tilder        = require('node-sass-tilde-importer')   ;

const serverOptions = {
    watch:true,
    notify:false,
    port:3000,
    server:{
        baseDir: './'
    }
},
reloadFiles = [
    './ArronaGrid.scss'
],
sassOptions = {
    import: tilder,
    sourceComments: true,
    outputStyle:'expanded'
},
postcssOptions = [
    autoprefixer,
    cssnano({
        core:true,
        zindex: false
    })
]

gulp.task('Server', () =>{
    server.init(
        serverOptions
    )
});

gulp.task('Dev',()=>{
    return gulp.src('./ArronaGrid.scss')
    .pipe(sourcemaps.init({loadMaps:true}))
    .pipe(plumber())
    .pipe(sass(sassOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./css'))
    .pipe(server.stream(reloadFiles))
})

gulp.task('Build', ()=>{
    return gulp.src('./ArronaGrid.scss')
    .pipe(plumber())
    .pipe(sass(sassOptions))
    .pipe(postcss(postcssOptions))
    .pipe(rename('ArronaGrid.min.css'))
    .pipe(gulp.dest('./css'))
    .pipe(server.stream(reloadFiles))
})


gulp.task('default', gulp.parallel('Server', 'Dev', (cb)=>{
    gulp.watch('index.html').on('change', server.reload);
    watch('./**/*.scss',gulp.series('Dev')).on('change',server.reload);
    cb()
}));
