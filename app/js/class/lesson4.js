{
	console.log('s',`\u{20BB7}`)	//大于ffff的用大括号
}

{
	let s = '𠮷';
	console.log('length',s.length);
	console.log('0',s.charAt(0))
	console.log('1',s.charAt(1))
	console.log('at0',s.charCodeAt(0))
	console.log('at1',s.charCodeAt(1))


}

{
	let s = '𠮷abc';
	for(let i=0;i<s.length;i++){
		console.log(s[i]);
	}
	for(let code of s){
		console.log(code);
	}
}

{
	let str = "string";
	console.log('include',str.includes("c"))
	console.log('startsWith',str.startsWith("str"))
	console.log('endsWith',str.endsWith("ng"))

}

{
	let name = "list"
	let info = "hello wor"
	let m = `i am ${name},${info}`
	console.log(m)
}
{
	//string.raw()使用频率不高
}