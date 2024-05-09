let count = 0; 

function checkAnswer1(answer) {
    const result = document.getElementById('result1');
    if (answer === 'a') {
        result.textContent = "ถูกต้อง PIM ย่อมาจาก PIM";
        result.style.color = 'green';
        count++;
    } else {
        result.textContent = "ผิด กรุณาตอบอีกครั้ง";
        result.style.color = 'red';
    }
}

function checkAnswer2(answer) {
    const result = document.getElementById('result2');
    const result3 = document.getElementById('result3');
    if (answer === 'd') {
        result.textContent = "ถูกต้อง CPRAM ก่อตั้งขึ้นเมื่อปี 2531 ";
        result.style.color = 'green';
        count++;
    } else {
        result.textContent = "ผิด กรุณาตอบอีกครั้ง";
        result.style.color = 'red';
    }
    result3.textContent = "คุณได้ทั้งหมด " + count + " คะแนน";
    count = 0;
}