function test(){
	for (let i = 1; i <3; i++) {
		console.log(i);
	}
	
}
test();

{
	let a,b,rest;
	[a,b,...rest]  = [1,2,4,5,6,7]
	console.log(a,b,rest);
}

{
	let a,b;
	({a,b} = {a:1,b:2})
	console.log(a,b)
}

{
	let a,b,c,rest;
	[a,b,c=3] = [1,2]
	console.log(a,b,c)
}

{
	let a= 1,b = 2;
	[a,b] = [b,a];
	console.log(a,b)
}

{
	function f(){
		return [1,2,3,4,5]
	}
	let a,b,c;
	[a,,...b] = f()
	console.log(a,b)
}

{
	let metaData = {
		title:'abc',
		test:[{
			title:'tst',
			desc:'descript'
		}]
	}
	let {title:a,test:[{title:b}]} = metaData;
	console.log(a,b)
}

{
	let regex = new RegExp('xyz','i');
}

{
	let s= 'bbbb_bbb'
	let a1 = /b+/g;	//全局匹配
	let a2 = /b+/y;	//全局匹配
	console.log('one',a1.exec(s),a2.exec(s));
	console.log('two',a1.exec(s),a2.exec(s));
}

{
	let s = `\u{20BB7}`;
	console.log(s);
	console.log('test1',/^.$/.test(s));
	console.log('test2',/^.$/u.test(s));//大于两个的字节的字，要加上u
}