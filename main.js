
const students = [
    { name: "Ruslan", age: 20, score: 85, isActive: true },
    { name: "Asema", age: 17, score: 92, isActive: true },
    { name: "Samir", age: 22, score: 45, isActive: false },
    { name: "Adilet", age: 19, score: 70, isActive: true }
];

console.log(students);
console.log("Количество студентов: " + students.length);
console.log("Имя первого студента: " + students[0].name);
console.log("Возраст первого студента: " + students[0].age);

for (let i = 0; i < students.length; i++) {
    if (students[i].score >= 80 && students[i].score <= 100) {
        console.log(students[i].name + ": Отлично");
    } else if (students[i].score >= 60) {
        console.log(students[i].name + ": Хорошо");
    } else if (students[i].score >= 40) {
        console.log(students[i].name + ": Удовлетворительно");
    } else {
        console.log(students[i].name + ": Не сдал");
    }
}

for (let i = 0; i < students.length; i++) {
    console.log("Студент: " + students[i].name);
    console.log("Возраст: " + students[i].age);
    console.log("Баллы: " + students[i].score);

    if (students[i].isActive === true) {
        console.log("Статус: Активен");
    } else {
        console.log("Статус: Неактивен");
    }

    console.log("");
}

function checkStudent(student) {
    console.log("Имя: " + student.name);
    console.log("Баллы: " + student.score);

    if (student.score >= 80 && student.score <= 100) {
        console.log("Результат: Отлично");
    } else if (student.score >= 60) {
        console.log("Результат: Хорошо");
    } else if (student.score >= 40) {
        console.log("Результат: Удовлетворительно");
    } else {
        console.log("Результат: Не сдал");
    }

    console.log("");
}

for (let i = 0; i < students.length; i++) {
    checkStudent(students[i]);
}

students[0].age = 21;
students[2].score = 65;
students[2].isActive = true;

students[students.length] = {
    name: "Meerim",
    age: 18,
    score: 95,
    isActive: true
};

console.log("Студенты после изменений:");
console.log(students);

console.log("Студенты с баллами 80 и выше:");

for (let i = 0; i < students.length; i++) {
    if (students[i].score >= 80) {
        console.log(students[i].name);
    }
}

console.log("Активные студенты:");

for (let i = 0; i < students.length; i++) {
    if (students[i].isActive === true) {
        console.log(students[i].name);
    }
}

let passedCount = 0;

for (let i = 0; i < students.length; i++) {
    if (students[i].score >= 60) {
        passedCount++;
    }
}

console.log("Количество сдавших: " + passedCount);

function getAverageScore(students) {
    let sum = 0;

    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].score;
    }

    return sum / students.length;
}

console.log("Средний балл: " + getAverageScore(students));
