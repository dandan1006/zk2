var gulp=require('gulp');
var server=require('gulp-webserver');
gulp.task('server',function(){
	return gulp.src('src')
	.pipe(server({
		port:8888,
		proxies:[{
			source:'/users',
			target:'http://localhost:3000/users'
		}]
	}))
})