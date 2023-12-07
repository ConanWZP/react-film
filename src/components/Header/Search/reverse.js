const arr = ['a', 'b', 'c', 'd']
const array = []

for (let i = arr.length-1; i >= 0; i--) {
    array.push(arr[i])
}

console.log(array)