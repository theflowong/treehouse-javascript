let student;
let found;
let quit = false;
let searchOutput = "";

// loop through students
while (!quit) {
  found = false;
  let input = prompt("Enter a student's name to search for them. Type 'quit' to exit out of this prompt.");
  for (let i = 0; i < students.length; i++) {
    student = students[i];
    if (input.toLowerCase() === student.name.toLowerCase()) {
      found = true;
      searchOutput += "<br>" + convertToString(student);
    } else if (input === "quit") {
      quit = true;
      // exit out of prompt
    }
  }
  if (!found && (quit === false)) {
    searchOutput += "<br>The student " + input + " was not found.";
  }
}

printToPage(searchOutput);
