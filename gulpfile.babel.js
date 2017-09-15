const gulp        = require('gulp'),
      requireDir  = require('require-dir');

requireDir('./gulp_task');

gulp.task('default', () => {
	const runSequence = require('run-sequence');
	return runSequence(
		[
			'version',
			'nav',
			'markd',
			'readme',
			'library-base'
		]
	)
});
