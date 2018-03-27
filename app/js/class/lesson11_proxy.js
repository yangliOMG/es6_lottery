{
	let obj = {
		time: '2017-03-11',
		name: 'net',
		_r : 123
	};

	//代理
	let monitor = new Proxy(obj,{
		//拦截对象属性的读取
		get(target,key){
			return target[key].replace('2017','2018')
		},
		//拦截对象设置属性
		set(target,key,value){
			if(key === 'name'){		//只允许修改name属性
				return target[key] = value
			}else{
				return target[key]
			}
		},
		//拦截key in obj 操作
		has(target,key){
			if(key === 'name'){		//只能正确返回name属性
				return target[key]  
			}else{
				return false;
			}
		},
		//拦截delete
		deleteProperty(target,key){
			if(key.indexOf('_')>-1){//带有_的属性会被删
				delete target[key]
				return true;
			}else{
				return target[key]
			}
		},
		//拦截 keys  getownpropertysymbol  getownpropertynames
		ownKeys(target){
			return Object.keys(target).filter(item => item!='time')//过滤掉time属性
		}
	})

	console.log(monitor.time);

	console.log('has','name' in monitor,'time' in monitor)
}

{
	let obj = {
		time: '2017-03-11',
		name: 'net',
		_r : 123
	};

	console.log('reflect',Reflect.get(obj,'time'))
}



//!!!!!!!!!!!!!proxy实例！！！！！！！！！！！
{
	function validator(target,validator){// ！！！！！！！！！！！！！！！！校验逻辑
		return new Proxy(target,{
			_validator:validator,
			set(target,key,value,proxy){
				if(target.hasOwnProperty(key)){
					let va = this._validator[key];
					if(!!va(value)){
						return Reflect.set(target,key,value,proxy)
					}else{
						throw Error(`不能设置${key}到${value}`)
					}
				}else{
					throw Error(`${key} 不存在`)
				}
			}
		})
	}

	const personValidators = { //！！！！！！！！！！校验规则
		name(val){
			return typeof val ==='string'
		},
		age(val){
			return typeof val === 'number' && val>18
		}
	}

	class Person{
		constructor(name,age){
			this.name = name;
			this.age = age;
			return validator(this,personValidators)
		}
	}

	const person = new Person('lilei',30)

	console.log(person)
	person.ages = 9
}