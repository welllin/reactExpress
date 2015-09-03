var gulp = require('gulp'),
    LiveServer = require('gulp-live-server'),
    browserSync = require('browser-sync'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    reactify = require('reactify');

gulp.task('live-server', function(){
    var server = new LiveServer('server/main.js');
    server.start();
});

gulp.task('bundle', function(){
    return browserify({
        entries:'app/main.jsx',
        debug: true
    })
    .transform(reactify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./.tmp'));
});

gulp.task('serve', ['live-server'], function(){
    browserSync.init(null, {
        proxy: "http://localhost:7777",
        port:9001
    })
});