{
	let tell = function*(){
		yield 'a';
		yield 'b';
		return 'c';
	}
	let k = tell();
	console.log(k.next())
	console.log(k.next())

	console.log(k.next())

	console.log(k.next())

}

//!!!!!!!!!!!!!generator实例！！！！！！！！！！！
{
	let draw = function(count){
		console.log(`剩余${count}`)
	}

	let residue = function*(count){
		while(count>0){
			count--;
			yield draw(count);
		}
	}

	let star = residue(5);	//generator  

	let btn = document.createElement('button')
	btn.id = 'start';
	btn.textContent = '抽奖';
	document.body.appendChild(btn);
	document.getElementById('start').addEventListener('click',function(){
		star.next();
	},false)
}

{
	//长轮询
	let ajax = function*(){
		yield new Promise(function(resolve,reject){
			//接口位置
			setTimeout(function(){
				resolve({code:0})
			},200);


		})
	}

	let pull = function(){
		let generator = ajax();
		let step = generator.next();
		step.value.then(function(d){
			if(d.code!=0){
				setTimeout(function(){
					console.log('wait')
					pull()
				},1000)
			}else{
				console.log(d)
			}
		})
	}

	pull();
}