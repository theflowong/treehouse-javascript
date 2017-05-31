var output = '';

function convertToString(student) {
  var str = 
      "<h2>Name: " + student.name + "</h2>" +
      "<p>Track: " + student.track + "</p>" +
      "<p>Achievements: " + student.achievements + "</p>" +
      "<p>Points: " + student.points + "</p>";
  return str;
}

function printToPage(output) {
  var div = document.getElementById('output');
  div.innerHTML = output;
}

for (var i = 0; i < students.length; i++) {
  output += convertToString(students[i]);
}
printToPage(output);