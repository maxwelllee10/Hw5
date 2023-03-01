
const studentList = [
  {
      firstName: "Allan",
      lastName: "Able",
      scores: [95, 85, 92, 98]
  },
  {
      firstName: "Amy",
      lastName: "Alexander",
      scores: [80, 88, 100]
  },
  {
      firstName: "Betty",
      lastName: "Barns",
      scores: [70, 80, 90, 100]
  },
  {
      firstName: "Bob",
      lastName: "Bones",
      scores: [75, 85, 95, 85]
  },
  {
      firstName: "Cindy",
      lastName: "Chase",
      scores: [95, 90, 92, 98]
  },
  {
      firstName: "Charles",
      lastName: "Chips",
      scores: [88, 99, 90]
  },
];

let classResults=[];
for(let i=0;i<studentList.length;i++){

let data={};
data.lastName=(studentList[i].lastName);
data.firstName=(studentList[i].firstName);

studentList.forEach( (scores, i, self) => self[i] = scores + 5 );
for(let j=0;j<studentList[i].scores.length;j++){
let val=studentList[i].scores[j];
sum+=val;
}

}
avgScore=sum/studentList[i].scores.length;
data.avgScore=(avgScore);
classResults.push(data);

console.log(`Full Name:${lastName}, ${firstName}`);
console.log(`Updates scores are: ${avgScore}`)
