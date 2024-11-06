function evaluateGrade() {
    var gradeInput = document.getElementById("grade").value;
    var result = document.getElementById("result");
    result.classList.remove("error", "success");
    
    var grade = parseFloat(gradeInput);

    if (isNaN(grade) || grade < 0 || grade > 100) {
        result.textContent = "الرجاء إدخال درجة صحيحة بين 0 و 100";
        result.classList.add("error");
    } else {
        if (grade >= 85) {
            result.textContent = "ممتاز";
        } else if (grade >= 70) {
            result.textContent = "جيد جدا";
        } else if (grade >= 50) {
            result.textContent = "جيد";
        } else {
            result.textContent = "راسب";
        }
        result.classList.add("success");
    }
}