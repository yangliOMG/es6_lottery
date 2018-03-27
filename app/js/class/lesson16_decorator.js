{
	let readonly = function(target,name,descriptor){
		descriptor.writable = false;
		return descriptor
	}

	class Test{
		@readonly
		time(){
			return '201712312'
		}
	}

	let test = new Test();

	// test.time = function(){
	// 	console.log('rest')
	// };

	console.log(test.time());

	//第三方修饰器库  npm install core-decorators
}

//!!!!!!!!!!!!!decorator实例！！！！！！！！！！！
{
	//日志系统，埋点   -》广告的 点击统计、展示统计

	let log = (type) =>{	//埋点系统抽离出来了
		return function(target,name,descriptor){
			let src_method = descriptor.value;
			descriptor.value = (...arg)=>{
				src_method.apply(target,arg);
				console.info(`log ${type}`)
			}
		}
	}

	class AD{
		@log('show')
		show(){
			console.info('ad is show')
		}

		@log('click')
		click(){
			console.info('ad is click')
		}
	}

	let ad = new AD();
	ad.show();
	ad.click();
}
