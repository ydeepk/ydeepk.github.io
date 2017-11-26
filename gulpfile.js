/*eslint-env node */
/* file: gulpfile.js */

/*
  When something bad happens you have three choices.
  You can either let it define you, let it destroy you, or you can let it strengthen you.
*/

/*
   color #eff4ff,  #2b5797, #da532c
*/

// grab gulp packages
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create(),
    eslint = require('gulp-eslint'),
    concat = require('gulp-concat'),
    minify = require('gulp-minify'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    cleancss = require(''),
    rev = require(''),
    htmlmin = require('gulp-htmlmin');


//  build css form sass
gulp.task('styles', function() {
    gulp.src('build/style/**/*.scss')
        .pipe(sass({
          outputStyle: 'compressed'
      }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest('dist/style/'))
        .pipe(browserSync.stream());
});

// minify js
gulp.task('scripts',function(){
  gulp.src('build/scripts/*.js')
  .pipe(concat('index.js'))
  .pipe(uglify())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('dist/scripts/'))
});


// lint js with eslint
gulp.task('lint', function() {
    // ESLint ignores files with "node_modules" paths.
    // So, it's best to have gulp ignore the directory as well.
    // Also, Be sure to return the stream from the task;
    // Otherwise, the task may end before the stream has finished.
    return gulp.src(['build/scripts/**/*.js', '!node_modules/**'])
        // eslint() attaches the lint output to the "eslint" property
        // of the file object so it can be used by other modules.
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe(eslint.failAfterError());
});


// optimize images
gulp.task('optimizeimg',function() {
  return gulp.src('build/assets/*').pipe(
    imagemin({
      progressive:true,
      use:[pngquant()]
    })
  ).pipe(gulp.dest('dist/assets/'));
});

// compress html
gulp.task('minify', function() {
  return gulp.src('build/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist/'));
});

// static server + watchin scss/html files
gulp.task('serve', ['minify','styles', 'lint', 'scripts'], function() {

    browserSync.init({
        server: {
            baseDir: './dist/'
        }
    });

    gulp.watch('build/style/**/*.scss', ['styles']);
    gulp.watch('build/scripts/**/*.js', ['lint']);
    gulp.watch('build/*.html').on('change', browserSync.reload);

    return gulp.log('GULP is Running.');
});


// Gulp default tasks
gulp.task('default', ['serve']);

/*
  # using packages

  var concat = require('gulp-concat');

  gulp.task('scripts', function() {
    return gulp.src('./lib/*.js')
      .pipe(concat('all.js'))
      .pipe(gulp.dest('./dist/'));
  });



  var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');

gulp.task('minify-css', function() {
  return gulp.src('styles/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});




var minify = require('gulp-minify');

gulp.task('compress', function() {
  gulp.src('lib/*.js')
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.js'
        },
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('dist'))
});




var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');

gulp.task('compress', function (cb) {
  pump([
        gulp.src('lib/*.js'),
        uglify(),
        gulp.dest('dist')
    ],
    cb
  );
});

*/
