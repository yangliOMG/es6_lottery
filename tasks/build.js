import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';
//把所有任务串起

gulp.task('build',gulpSequence('clean','css','pages','scripts',['browser','serve']));
