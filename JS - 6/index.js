//Rest opreator
var obj = { one: 1, two: 2, three: 3, four: 4, five: 5 };
function check(obj) {
    var { three, ...rest } = obj
    console.log(rest)
}
check(obj)

// Destructure and Rest Opreator
var userDetails = {
    Name: 'kumar',
    age: 25,
    address: 2317,
    city: 'kovilpatti',
    personalInfo: [{ nickName: 'GK', email: 'kumar@mitrahsoft.com', phone: 123456 }]
};
function user(userDetails) {
    var {Name,age,address,city,...personalInfoRest} = userDetails;
    var {personalInfo} = personalInfoRest;
    var [info] = personalInfo;
    var { phone, ...infoRest } = info;
    var {nickName, email} = infoRest;
    console.log(`Nick Name : ${nickName}`);
    console.log(`Email ID : ${email}`);
}
user(userDetails)