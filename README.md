#cp-lessons
app     前端目录
    -view
        -.ejs 当做html使用
server  服务器目录
tasks   构建工具（构建任务脚本）目录
    -util
        -args.js   处理命令行参数



express    脚手架工具      在/server中生成服务器代码


操作：
npm install gulp -g     //安装gulp  -g全局
npm install express-generator -g    //安装express

cd server
express -e .       // -e 使用一级模板引擎  . 当前目录      在server目录中初始化
npm install         //下载安装包

cd es6
npm init  //初始化package.json文件
touch .babelrc  //babel编译文件
touch gulpfile.babel.js     //gulp工具流  使用es6语法


npm install gulp gulp-if gulp-concat webpack webpack-stream vinyl-named gulp-livereload gulp-plumber 
gulp-rename  gulp-uglify gulp-util yargs gulp-live-server del gulp-util babel-loader babel-core 
babel-preset-env require-dir babel-preset-es2015 --save-dev
//引入包，可以再package.json中看见dependency

gulp --watch    //  启动项目  默认端口：http://localhost:3000/

npm install babel-polyfill --save-dev   //es7方法，处理兼容


//安装decirators修饰器
npm install babel-plugin-transform-decorators-legacy --save-dev
//.babelrc
{
  "presets": ["es2015"],
  "plugins": ["transform-decorators-legacy"]
}

//安装jquery
npm install jquery --save-dev

