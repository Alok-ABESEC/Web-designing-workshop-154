function calculate() {
    let m1 = parseInt(document.getElementById("m1").value);
    let m2 = parseInt(document.getElementById("m2").value);
    let m3 = parseInt(document.getElementById("m3").value);
    let m4 = parseInt(document.getElementById("m4").value);
    let m5 = parseInt(document.getElementById("m5").value);

    let total = m1 + m2 + m3 + m4 + m5;
    let average = total / 5;

    let result;
    let grade;

    if (m1 < 35 || m2 < 35 || m3 < 35 || m4 < 35 || m5 < 35) {
        result = "Fail";
        grade = "F";
    } else {
        result = "Pass";

        if (average >= 90) {
            grade = "A+";
        } else if (average >= 80) {
            grade = "A";
        } else if (average >= 70) {
            grade = "B";
        } else if (average >= 60) {
            grade = "C";
        } else {
            grade = "D";
        }
    }

    document.getElementById("result").innerHTML =
        "<h3>Total: " + total + "</h3>" +
        "<h3>Average: " + average.toFixed(2) + "</h3>" +
        "<h3>Result: " + result + "</h3>" +
        "<h3>Grade: " + grade + "</h3>";
}