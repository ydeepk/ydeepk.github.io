/*eslint-env node */
/* file: gulpfile.js */

// grab gulp packages
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var eslint = require('gulp-eslint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');


// Gulp default tasks
gulp.task('default', ['serve']);


//  build css form sass
gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
});


gulp.task('scripts', function() {
    gulp.src('scripts/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('js/'));
});


// lint js with eslint
gulp.task('lint', function() {
    // ESLint ignores files with "node_modules" paths.
    // So, it's best to have gulp ignore the directory as well.
    // Also, Be sure to return the stream from the task;
    // Otherwise, the task may end before the stream has finished.
    return gulp.src(['', '!node_modules/**'])
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

// unit test javascript using jasmine Phantomjs


// static server + watchin scss/html files
gulp.task('serve', ['styles', 'lint'], function() {

    browserSync.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch('sass/**/*.scss', ['styles']);
    gulp.watch('scripts/**/*.js', ['lint']);
    gulp.watch('*.html').on('change', browserSync.reload);
});


/*
var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var cleanCss = require('gulp-clean-css');
var rev = require('gulp-rev');

gulp.task('pack-js', function () {
    return gulp.src(['assets/js/vendor/*.js', 'assets/js/main.js', 'assets/js/module*.js'])
        .pipe(concat('bundle.js'))
        .pipe(minify({
            ext:{
                min:'.js'
            },
            noSource: true
        }))
        .pipe(rev())
        .pipe(gulp.dest('public/build/js'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('public/build'));
});

gulp.task('pack-css', function () {
    return gulp.src(['assets/css/main.css', 'assets/css/custom.css'])
        .pipe(concat('stylesheet.css'))
        .pipe(cleanCss())
        .pipe(rev())
            .pipe(gulp.dest('public/build/css'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('public/build'));
});

gulp.task('default', ['pack-js', 'pack-css']);

*/
