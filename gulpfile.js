var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('sass', function () {
	return gulp.src('src/sass/*.sass')
	.pipe(sass({outputStyle: 'compressed', sourceComments: 'map'}, {errLogToConsole: true}))
	.pipe(prefix("last 2 versions", "> 1%", "ie 8", "Android 2", "Firefox ESR"))
	.pipe(gulp.dest('public/assets/css'))
	.pipe(reload({stream:true}));
});

gulp.task('browser-sync', function() {
	browserSync.init(null, {
		server: {
			baseDir: "./public/"
		},
    notify: false
	});
});

gulp.task('default', ['sass', 'browser-sync'], function () {
	gulp.watch("src/sass/**", ['sass']);
	gulp.watch(["public/js/**/*.js", "public/*.html"], reload);
});
