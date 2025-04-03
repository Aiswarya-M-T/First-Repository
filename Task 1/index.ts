var studentsDetail = [
  { "name": "JOHN", "age": 13, "rank": 2 },
  { "name": "HARRY", "age": 13, "rank": 1 },
  { "name": "VENOM", "age": 13, "rank": 10 },
  { "name": "MARK", "age": 13, "rank": 11 },
  { "name": "BROCK", "age": 13, "rank": 40 },
  { "name": "HENRY", "age": 13, "rank": "" },
  { "name": "TIM", "age": 13, "rank": 27 },
  { "name": "MARRY", "age": 13, "rank": 22 },
  { "name": "MANOJ", "age": 13, "rank": 12 }
]
interface students {
  name: string,
  age?: number,
  rank: number | string,
  grade?: string
}
var fetchGrade = (rank: number): string => {
  var result = '';
  switch (true) {
    case (rank <= 10):
      result = 'A+';
      break;
    case (rank <= 15):
      result = 'A';
      break;
    case (rank <= 25):
      result = 'B';
      break;
    case (rank > 25):
      result = 'C';
      break;
  }
  return result;
}
var filteredDetail: students[] = studentsDetail.filter((element) => element.rank != '');
var fetchStudentDetails = (stud: students): students => {
  stud.grade = fetchGrade(Number(stud.rank));
  return stud;
}
var updatedStudent: students[] = filteredDetail.map(fetchStudentDetails);
console.log(updatedStudent);