var arr = [1, 2, 3, 4, 5, 5, 6, 7, 8, 5, 9, 0];

for(var i = 0; i < arr.length; i++){ 
  if (arr[i] === 5) { 
    arr.splice(i, 1); 
    i--; 
  }
}

console.log(arr);
// [1, 2, 3, 4, 6, 7, 8, 9, 0];
