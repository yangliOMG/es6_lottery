{
	let s = new Set();
	s.add(5);
	s.add(7);
	console.log('size',s.size)

	let array = [];
	array.push({t:1})



	let arr = [1,3,4,5,6]
	let s2  = new Set(arr);
	console.log('size2',s2.size)
}

{
	//WeakSet 的成员只能是对象，而不能是其他类型的值。
	let ws = new WeakSet();
}

{
	let map  = new Map()

	let arr = ['123']

	map.set(arr,456)

	console.log(map);

	const map2 = new Map([
	  ['name', '张三'],
	  ['title', 'Author']
	]);

	console.log(map2);
}


{
let ws = new WeakMap();
}

{
	//优先考虑map   考虑唯一性的集合，选择set  放弃obj、array
}