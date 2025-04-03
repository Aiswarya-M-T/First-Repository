//First task - Print all the names and age of all the users using destructuring.
var obj = {
    data: [
      {
        name: 'kamaraj',
        age: '23',
        native: 'KVP'
      },
      {
        name: 'KumarSTR',
        age: '45',
        native: 'TVL'
      },
      {
        name: 'Inbaraj',
        age: '32',
        native: 'MDU'
      }
    ]
  };
var {data} = obj
var [firstIndex,secondIndex,thirdIndex] = data
var {name:firstName,age:firstNameAge} = firstIndex
var{name:secondName,age:secondNameAge} = secondIndex
var{name:thirdName,age:thirdNameAge} = thirdIndex
console.log(`Person name : ${firstName}`)
console.log(`${firstName}'s  age is ${firstNameAge}`)
console.log(`Person name : ${secondName}`)
console.log(`${secondName}'s  age is ${secondNameAge}`)
console.log(`Person name : ${thirdName}`)
console.log(`${thirdName}'s  age is ${thirdNameAge}`)