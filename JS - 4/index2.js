//Second task - print the rank and grade of the student (use destructure).
var object = {
    data: [
      {
        name: 'Ajay',
        personal: {
          age: '25',
          native: 'nellai',
          education: {
            rank: '2',
            grade: 'B'
          },
          interest: {
            hobby: 'book reading'
          }
        }
      },
      {
        name: 'vicky',
        personal: {
          age: '26',
          native: 'chennai',
          education: {
            rank: '3',
            grade: 'D'
          },
          interest: {
            hobby: 'playing'
          }
        }
      },
      {
        name: 'muthu',
        personal: {
          age: '35',
          native: 'madurai',
          education: {
            rank: '5',
            grade: 'F'
          },
          interest: {
            hobby: 'writing'
          }
        }
      }
    ]
  };
  var {data} = object
  var [firstPosition,secondPosition,thirdPosition] = data
  var {name:firstStdName,personal} = firstPosition
  var {education} = personal
  var {rank:firstStdRank,grade:firstStdGrade} = education
  var {name:secondStdName,personal} = secondPosition
  var {education} = personal
  var {rank:secondStdRank,grade:secondStdGrade} = education
  var {name:thirdStdName,personal} = thirdPosition
  var {education} = personal
  var {rank:thirdStdRank,grade:thirdStdGrade} = education
  console.log(`${firstStdName}'s rank is ${firstStdRank}`)
  console.log(`${firstStdName}'s grade is ${firstStdGrade}`)
  console.log(`${secondStdName}'s rank is ${secondStdRank}`)
  console.log(`${secondStdName}'s grade is ${secondStdGrade}`)
  console.log(`${thirdStdName}'s rank is ${thirdStdRank}`)
  console.log(`${thirdStdName}'s grade is ${thirdStdGrade}`)