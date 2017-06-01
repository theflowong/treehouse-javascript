const convertToString = student => {
  let str =
      "<h2>Name: " + student.name + "</h2>" +
      "<p>Track: " + student.track + "</p>" +
      "<p>Achievements: " + student.achievements + "</p>" +
      "<p>Points: " + student.points + "</p>";
  return str;
}

const printToPage = output => divOutput.innerHTML = output;

const cycleThroughAllStudents = () => {
  let output = '';
  for (let i = 0; i < students.length; i++) {
    output += convertToString(students[i]);
  }
  printToPage(output);
}
