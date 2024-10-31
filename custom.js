function displayName(name = null) {
    return name;
}

function computeTwoNumber(num1, num2) {
    return num1 + num2;
}

function confirmSubmission() {
    if (confirm("Do you really want to submit?")) {
        alert(computeTwoNumber(10, 15));
    }
}

// Function to compute two numbers
function computeTwoNumbers(num1, num2) {
    return num1 + num2;
}

// Function to take two inputs and display the result
function inputTwoNumbers() {
    var firstNumber = parseInt(prompt("Enter first number"));
    var secondNumber = parseInt(prompt("Enter second number"));

    // Check if inputs are valid numbers
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        alert("Please enter valid numbers.");
    } else {
        // Call the compute function and display the result in an alert
        alert("The result is: " + computeTwoNumbers(firstNumber, secondNumber));
    }
}

// Function to check if a grade is pass or fail
function checkGrade() {
    var grade = parseInt(prompt("Enter your grade"));

    // Check if the input is a valid number
    if (isNaN(grade)) {
        alert("Please enter a valid number.");
    } else {
        if (grade >= 50) {
            alert("You passed.");
        } else {
            alert("You failed.");
        }
    }
}

function calculateGrade() {
    // Prompt inputs for name, total items, and total score
    var name = prompt("Enter your name:");
    var totalItem = parseInt(prompt("Enter the total number of items:"));
    var totalScore = parseInt(prompt("Enter your total score:"));

    // Check if inputs are valid numbers
    if (isNaN(totalItem) || isNaN(totalScore)) {
        alert("Please enter valid numbers for total items and total score.");
        return;
    } else {
        // Compute the final grade
        var result = -4 * (totalScore / totalItem) + 5;

        // Check the pass/fail status based on the result
        var status = checkResult(result);

        // Display result using alert
        alert("Your score: " + result.toFixed(2) + " - " + status);

        // Display result using document.write, console.log, and innerHTML
        document.write("Your name is: " + name + "<br>");
        document.write("Your total grade is: " + result.toFixed(2) + "<br>");
        document.write("Your Status is: " + status + "<br>");

        console.log("Name: " + name);
        console.log("Computed Score: " + result.toFixed(2));
        console.log("Status: " + status);

        // Display using innerHTML
        document.getElementById("result").innerHTML = "Computed Score: " + result.toFixed(2);
        document.getElementById("status").innerHTML = "Status: " + status;
    }

    // Function to check pass/fail status
    function checkResult(result) {
        return result >= 3.1 ? "You Failed" : "You Passed";
    }
}
