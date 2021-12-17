import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import mozjpeg from 'imagemin-mozjpeg';
import optipng from 'imagemin-optipng';
import imageminGifsicle from 'imagemin-gifsicle';
// import imageminSvgo from 'imagemin-svgo';


gulp.task('imagemin', () => {
	return gulp.src('img_raw/**')
		.pipe(imagemin([
			imageminGifsicle({ optimizationLevel: 3 }), // value 0-3 *Note: sometimes all three values give diff compression sizes.
			mozjpeg({ quality: 75 }), // (add value 0-100) percentage out of 100 
			optipng({ optimizationLevel: 5 }), // (add value 0-7)  4-7 takes too long respectively , compression from 0-3 is probably enough
		]))
		.pipe(gulp.dest('images'))
});


// gulp.task('svgmin', () => {
// 	return (async () => {
// 		await imagemin(['img_raw/**'], {
// 			destination: 'images',
// 			plugins: [
// 				imageminSvgo({
// 					plugins: [
// 						{ name: 'removeViewBox' },
// 						{ cleanupIDs: false }
// 					]
// 				})
// 			]
// 		});

// 		console.log('Images optimized');
// 	})();
// });



