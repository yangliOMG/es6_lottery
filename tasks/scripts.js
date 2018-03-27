import gulp from 'gulp';    //
import gulpif from 'gulp-if';   //if判断
import concat from 'gulp-concat';   //拼接
import webpack from 'webpack';  //打包
import gulpWebpack from 'webpack-stream';   //
import named from 'vinyl-named';    //文件重命名
import livereload from 'gulp-livereload';   //热更新
import plumber from 'gulp-plumber'; //处理文件信息流
import rename from 'gulp-rename';   //文件重命名
import uglify from 'gulp-uglify';   //js css压缩
import {log,colors} from 'gulp-util';   //命令行输出
import args from './util/args'; //命令行解析

gulp.task('scripts',()=>{
  return gulp.src(['app/js/index.js'])
    .pipe(plumber({
      errorHandle:function(){

      }
    }))
    .pipe(named())
    .pipe(gulpWebpack({
      module:{
        loaders:[{
          test:/\.js$/,
          loader:'babel'
        }]
      }
    }),null,(err,stats)=>{
      log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
        chunks:false
      }))
    })
    .pipe(gulp.dest('server/public/js'))//保存
    .pipe(rename({
      basename:'cp',
      extname:'.min.js'
    }))
    .pipe(uglify({compress:{properties:false},output:{'quote_keys':true}}))
    .pipe(gulp.dest('server/public/js'))
    .pipe(gulpif(args.watch,livereload()))
})
