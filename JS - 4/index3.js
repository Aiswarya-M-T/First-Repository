//Third task - print the streetName and city of the user (use destructure).
var user = {
    data: [
      {
        gender: 'Male',
        requestSource: 'Student',
        requestStatus: 'Pending',
        requestData: {
          educationInfo: [
            {
              userEmail: 'Doaulas@rrigg.com',
              qualification: 'College'
            }
          ],
          personalInfo: [
            {
              userFirstName: 'Doaul',
              userLastName: 'Doaulas',
              designation: 'Developer',
              location: {
                doorNumber: '2323',
                streetName: 'indra nager',
                city: 'kovilaptti'
              }
            }
          ]
        }
      },
      {
        gender: 'Female',
        requestSource: 'Student',
        requestStatus: 'Success',
        requestData: {
          educationInfo: [
            {
              userEmail: 'pooja@rrigg.com',
              qualification: 'College'
            }
          ],
          personalInfo: [
            {
              userFirstName: 'pooja',
              userLastName: 'kekar',
              designation: 'Tester',
              location: {
                doorNumber: '1236',
                streetName: 'gandhi gram',
                city: 'rajasthan'
              }
            }
          ]
        }
      }
    ]
  }
  var {data} = user
  var [firstDetail,secondDetail] = data
  var {requestData} = firstDetail
  var {educationInfo,personalInfo} = requestData
  var [details] = personalInfo
  var {userFirstName:firstUserFirstName,userLastName:firstUserLastName} = details
  var {location} = details
  var {streetName:firstUserStreet,city:firstUserCity} = location
  var {requestData} = secondDetail
  var {educationInfo,personalInfo} = requestData
  var [userDetails] = personalInfo
  var {userFirstName:secondUserFirstName,userLastName:secondUserLastName} = userDetails
  var {location:place} = userDetails
  var {streetName:secondUserStreet,city:secondUserCity} = place
  console.log(`User Name : ${firstUserFirstName} ${firstUserLastName} | Street : ${firstUserStreet} | City : ${firstUserCity}`)
  console.log(`User Name : ${secondUserFirstName} ${secondUserLastName} | Street : ${secondUserStreet} | City : ${secondUserCity}`)