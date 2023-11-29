const one =['apple', 'banana'];
const two =['grape', 'peach'];
const three=['Wmelon', 'orange']

//기존 방법
const all = one.concat(two,three);
console.log(all);

// ES6 spread 연산자 활용 방법
const all2 = [...one, ...two];
console.log(all2);