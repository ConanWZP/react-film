const memoizer = (func) => {
    let cache = {}
    return (...n) => {
        const hash = JSON.stringify(n);
        if (cache[hash] != undefined) {
            console.log(`<= Fetching: "${n}" from cache`)
            return cache[hash]
        } else {
            console.log(`=> Write: "${hash}" in cache`)
            console.log(...n)
            let result = func(...n)
            console.log(cache)
            cache[hash] = result
            console.log(cache)
            console.log(hash)
            return result
        }
    }
}


// myFunc - любая наша функция с разным количеством аргументов и разной логикой
let myFunc = (x, y, z, f) => {
    return x*101 - y*20 + z - f
}

const myFuncMem = memoizer(myFunc)

console.log('myFuncMem:', myFuncMem(10, 5, 50, 40))
console.log('myFuncMem:', myFuncMem(10, 5, 50, 40))

/*
console.log('myFuncMem:', myFuncMem(10))
console.log('myFuncMem:', myFuncMem(10))
console.log('myFuncMem:', myFuncMem(10))

console.log('\n')

console.log('myFuncMem:', myFuncMem(11))
console.log('myFuncMem:', myFuncMem(11))
console.log('myFuncMem:', myFuncMem(11))

console.log('\n')

console.log('myFuncMem:', myFuncMem('Vasya'))
console.log('myFuncMem:', myFuncMem('Vasya'))
console.log('myFuncMem:', myFuncMem('Vasya'))
*/

/*
const memoizer2 = (func) => {
    let cache = {}
    return (...n) => {
        if (cache[n[0]] != undefined) {
            console.log(`<= Fetching: "${n[0]}" from cache`)
            return cache[n[0]]
        } else {
            console.log(`=> Write: "${n[0]}" in cache`)
            let result = func(...n)
            cache[n[0]] = result
            return result
        }
    }
}


let myFunc2 = (x, y, z) => {
    return { x, y, z }
}

const myFuncMem2 = memoizer2(myFunc2)

console.log('\n')
console.log('myFuncMem2:', myFuncMem(1, 'Vasya'))
console.log('myFuncMem2:', myFuncMem(1, 'Vasya'))
console.log('myFuncMem2:', myFuncMem(2, 'Vasya'))
console.log('myFuncMem2:', myFuncMem(2, 'Vasya'))*/
