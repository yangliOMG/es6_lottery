{
	let obj = {
		start : [1,6,3],
		end:[7,8,9],
		[Symbol.iterator](){
			let self = this;
			let index = 0;
			let arr  = self.start.concat(self.end);
			let len = arr.length;
			return {
				next(){
					if(index<len){
						return {
							value:arr[index++],
							done:false
						}
					}else{
						return {
							value:arr[index++],
							done:true
						}
					}
				}
			}
		}
	}

	for(let v of obj){
		console.log(v)
	}
}