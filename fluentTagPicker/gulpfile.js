'use strict';

/**
 * How to use this file:
 *
 * gulp packprod
 * gulp packdev
 * gulp dev
 *
 */
const build = require('@microsoft/sp-build-web');
const gulp = require('gulp');
const gulpSequence = require('gulp-sequence');

if (process.argv.indexOf('packprod') !== -1) {
	// Add ship options before last args
	// Because require ('gulp') add --color to process.args
	process.argv.splice(process.argv.length-1, 0, '--ship');
}

build.addSuppression(`Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe.`);

// Create clean distribution package
gulp.task('packprod', gulpSequence('clean', 'bundle', 'package-solution'));

// Create development package
gulp.task('packdev', gulpSequence('clean', 'bundle', 'package-solution'));

// Start server in development mode
gulp.task('dev', () => {
	process.argv.splice(process.argv.length-1, 0, '--nobrowser');

	gulp.start('serve');
});

build.initialize(gulp);
