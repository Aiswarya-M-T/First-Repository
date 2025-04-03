//Fourth task - print the first name, doorNumber, streetName, pincode (use destructure)
var userDetails = [
    { firstName: 'suresh' },
    'lname',
    23,
    {
      cityCode: 'KVP',
      location: {
        doorNumber: '1236',
        streetName: 'gandhi gram'
      }
    },
    'tamilnadu',
    'india',
    '628502'
  ]
  var [firstValue,secondValue,thirdValue,fourthValue,fifthValue,sixthValue,seventhValue] = userDetails
  var {firstName:userName} = firstValue
  var {location} = fourthValue
  var {doorNumber:doorNo,streetName:street} = location
  console.log(`Name : ${userName} | Door number : ${doorNo} | Street : ${street} | Pincode : ${seventhValue}`)