// Assignment 3: Conditional Logic Implementation

const score = 85;
let grade;

// if...else: determine the grade range
if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else {
    grade = "F";
}

// switch: display the grade determined above
let gradeLabel;

switch (grade) {
    case "A":
        gradeLabel = "A";
        break;
    case "B":
        gradeLabel = "B";
        break;
    case "C":
        gradeLabel = "C";
        break;
    case "D":
        gradeLabel = "D";
        break;
    default:
        gradeLabel = "F";
}

// ternary: determine pass/fail status
const status = score >= 60 ? "Passed" : "Failed";

console.log(`Score: ${score}`);
console.log(`Grade: ${gradeLabel}`);
console.log(`Status: ${status}`);
