/**
 * 
17-2 Create a student object that has the first name value of Mark, last name value as Jacob, age as 31, and the id as A001234. Then initialise the word first to the variable sentence. Then assign it on another line to say the following: 

The new employee __first name__   __last name__ is __age__ years old. The employee ID is __empyloyee ID__.

Then console log the sentence.

 */

var student = {
    firstName: "Mark",
    lastName: "Jacob",
    age: 31,
    id: "A001234"
}

var sentence = "first";
sentence = `The new employee ${student.firstName} ${student.lastName} is ${student.age} years old. The employee ID is ${student.id}.`;

console.log(sentence);