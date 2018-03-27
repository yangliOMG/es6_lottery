{
	let a3 = Symbol.for('a3');
}

{
	let a1 = Symbol.for('abc');
	let obj = {
		a1:'123',
		['abc']:345,
		'c':456
	}
	console.log(obj)



	//for in    for of  取不到symbol
	Object.getOwnPropertySymbols(obj).forEach()//取symbol变量

	Reflect.ownKeys(obj).forEach()//取所有key
}