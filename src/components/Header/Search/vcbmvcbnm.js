

function createIncrement() {
    let count = 0
   // console.log('Вызываюсь', count)
    function increment() {
        count ++

    }
    let message = `Count is ${count}`;

    function logg() {
       // let message = `Count is ${count}`;

        console.log(message)
    }

    return [increment, logg]

}

const [increment, logg] = createIncrement()

increment()
increment()
increment()
logg()
