{
	let ajax = function(num){
		console.log('zhixing')
		return new Promise(function(resolve,reject){
			if(num>5){
				resolve()
			}else{
				throw new Error('chucuole')
			}
		})
	}

	ajax(6).then(function(){
		console.log('log',6)
	}).catch(function(err){
		console.log('catch',err)
	})

	ajax(3).then(function(){
		console.log('log',3)
	}).catch(function(err){
		console.log('catch',err)
	})
}
