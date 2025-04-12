var students = ["John", "Doe", "Alice", "Smith"];
console.log(students);
// output: ["John", "Doe", "Alice", "Smith"]

//check the element one by one
console.log(students[0]); // John
console.log(students[1]); // Doe
console.log(students[2]); // Alice
console.log(students[3]); // Smith
//loop
for (let i = 0; i < students.length; i++) {
    console.log("Student", i, ":", students[i]);
}
//change one of the element
students[2] = "Bob"; // Replaces "Alice" with "Bob"
console.log(students);
//output:["John", "Doe", "Bob", "Smith"]

//try index beyond array size
console.log(students[10]); // undefined (not an error, just undefined)
students[10] = "Zara";
console.log(students); 
//output:["John", "Doe", "Bob", "Smith", empty × 6, "Zara"]




var students = ["John", "Doe", "Alice", "Smith"];
console.log("Original:", students);

students.push("Brian");//add to end
console.log("After push:", students);
//output:["John", "Doe", "Alice", "Smith", "Brian"]

students.unshift("Kelly");//add to start
console.log("After unshift:", students);
//output:["Kelly", "John", "Doe", "Alice", "Smith", "Brian"]

let removedLast = students.pop();//remove from end
console.log("After pop:", students);
console.log("Removed with pop:", removedLast);
/*output:["Kelly", "John", "Doe", "Alice", "Smith"]
"Removed with pop: Brian"*/

let removedFirst = students.shift();//remove from start
console.log("After shift:", students);
console.log("Removed with shift:", removedFirst);
/*output:["John", "Doe", "Alice", "Smith"]
"Removed with shift: Kelly"*/

students.sort();
console.log("After sort:", students);
//output:["Alice", "Doe", "John", "Smith"]


