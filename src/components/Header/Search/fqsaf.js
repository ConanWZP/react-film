function canGetCount(n) {
   // let count = 0

    return function () {
     //   count++
        n--
        return n>=0 ? console.log('Yes') : console.log('No')
    }

}

const getOne = canGetCount(2);

getOne()
getOne()
getOne()
getOne()
getOne()
getOne()
