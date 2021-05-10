const marks = [73, 67, 40, 33];

function gradingStudentsByUsingMap(marks) {
    const NewGrades = []
    marks.map(item => {
        if(item >= 38){
            const diff = 5 - (item%5)
            if(diff < 3){
                NewGrades.push(item + diff);
            } else {
                NewGrades.push(item);
            }
        } else {
            NewGrades.push(item);
        }
    })
    return NewGrades;
}

function gradingStudents(marks) {
    for (let i = 0; i < marks.length; i++) {
        if (marks[i] >= 38) {
            const diff = 5 - (marks[i] % 5);

            if (diff < 3) {
                marks[i] = marks[i] + diff;
            }
        }
    }
    console.log(marks);
}

gradingStudents(marks);