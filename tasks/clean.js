import gulp from 'gulp';
import del from 'del';
import args from './util/args';
//  拷贝 刷新后 清除

gulp.task('clean',()=>{
  return del(['server/public','server/views'])
})
