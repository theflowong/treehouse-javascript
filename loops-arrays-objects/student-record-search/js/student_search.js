var student;
var found;
var quit = false;
var output = "";

// loop through students
while (!quit) {
  found = false;
  var input = prompt("Enter a student's name to search for them. Type 'quit' to exit out of this prompt.");
  for (var i = 0; i < students.length; i++) {
    student = students[i];
    if (input.toLowerCase() === student.name.toLowerCase()) {
      found = true;
      output += "<br>" + convertToString(student);
    } else if (input === "quit") {
      quit = true;
      // exit out of prompt
    }
  }
  if (!found && (quit === false)) {
    output += "<br>The student " + input + " was not found.";
  }
}

printToPage(output);
