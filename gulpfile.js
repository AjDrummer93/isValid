var pkg = require('./package.json');

// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var karma = require('karma').server;
var debug = require('gulp-debug');
var livereload = require('gulp-livereload');

var paths = {
    scripts: __dirname + '/Web/js/**/*.js',
    html: __dirname + '/Web/index.html',
    css: __dirname + '/Web/css/**/*.css'
};

gulp.task('reload', function () {
    console.log("reload");
    livereload.changed("debug.html");
});

// Watch for file changes and re-run tests on each change
gulp.task('tdd', function (done) {
    livereload.listen();
    gulp.watch([__dirname + '/Web/specs/MainSpec.js', __dirname + '/Web/js/jquery.isValid.js'], ["reload"]);
    karma.start({
        configFile: __dirname + '/karma.conf.js'
    }, function() {
        done();
    });
});

// Default Task
gulp.task('default', ['tdd']);