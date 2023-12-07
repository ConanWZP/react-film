


const a = (...arg) => {
    console.log(...arg)
}

function b() {
    console.log(...arguments)
}

console.log(a(1, 2, 3))

console.log(b(1,2,3,))


f()
//sayHi() // ошибка, даже если var
//hi() // ошибка, даже если var

//console.log(abc) // ошибка
console.log(dfe) // undefined

var dfe = 'dfe'
let abc = '123'

function f() {
    console.log('Привет')
}


const sayHi = function () {
    console.log('say hi')
}


const hi = () => {
    console.log('ку')
}