/* eslint-disable import/no-extraneous-dependencies */

import gulp from 'gulp';

import babelify from 'babelify';
import browserify from 'browserify';
import gutil from 'gulp-util';
import rimraf from 'gulp-rimraf';
import source from 'vinyl-source-stream';

const config = {
  entryFile: './src/main.js',
  outputDir: './lib',
  outputFile: './ElectronWebView.js',
};

gulp.task('build', () =>
  browserify(config.entryFile, {
    extensions: ['jsx'],
    standalone: 'ElectronWebView',
  }).transform(babelify)
    .bundle()
    .on('error', gutil.log)
    .pipe(source(config.outputFile))
    .pipe(gulp.dest(config.outputDir))
);

gulp.task('clean', () =>
  gulp.src('./lib/**/*')
    .pipe(rimraf())
);

gulp.task('watch', () => {
  gulp.watch('./src/**/*', ['build']);
});
