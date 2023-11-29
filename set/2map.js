// map함수에 itme매게변수가 뭐지
let arr=[1,2,3]
let arr2=[];

for(i=0; i<arr.length; i++){
    arr2.push(arr[i]*2);
}
console.log("arr: "+arr)
console.log("arr2: "+arr2)

// value는 arr에 있는 배열값을 가져온다. ㄱ
const res1 = arr.map((value) => {
    return value *2;
});
console.log("res1: "+res1)

const res2 = arr.map((value) => value *2);
console.log("res2: "+res2)

// value,index에 매개변수 이름은 다른걸로 해도 되고 순서에 맞게 선언해주면 된다. ㄱ
const res3 = arr.map((value,index) => index);
console.log("arr3_index "+ res3)

const items=[{id:1, name:'Kossie'}, {id:2, name: 'Coder'}]

// const result = items.map((item)=>{id: item.id});
// console.log(result)

const result = items.map((item)=>{
    return {id: item.id}
});
console.log(result)