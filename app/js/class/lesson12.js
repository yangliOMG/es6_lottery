{
	class Parent{
		constructor(name = 'mukewang'){
			this.name = name;
		}
	}
	let v_parent = new Parent('v');
	console.log(v_parent)
}

{
	class Parent{
		constructor(name = 'mukewang'){
			this.name = name;
		}
	}
	
	class Child extends Parent{

	}
	console.log(new Child())
}

{
	class Parent{
		constructor(name = 'mukewang'){
			this.name = name;
		}
	}
	
	class Child extends Parent{
		constructor(name = 'child'){
			super(name)	//super要放在this的前面
			this.type = 'child'
		}
	}
	console.log(new Child())
}

{
	class Parent{
		constructor(name = 'mukewang'){
			this.name = name;
		}

		//getter函数 和 setter函数 
		//是属性，不是方法
		get longName(){
			return 'ml'+ this.name
		}
		set longName(value){
			this.name = value
		}
	}
	
	let v = new Parent()
	console.log(v.longName)
	v.longName = 'asd'
	console.log(v.longName)

}

{
	class Parent{
		constructor(name = 'mukewang'){
			this.name = name;
		}
		//静态方法
		static tell(){
			console.log('tell')
		}
	}
	//静态属性
	Parent.type = 'test';
	
	
	Parent.tell()
	console.log(Parent.type)
}
