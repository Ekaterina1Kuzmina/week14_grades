grades = [];

for (let i = 0; i < 12; i++) {
    grades.push(Math.round(Math.random()* 100) + 1);
};
console.log(`Все оценки: ${grades}`);

let divOne = document.createElement('div');
divOne.textContent = `Все оценки: ${grades}`;
document.body.append(divOne);


let sum = 0;
for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
    sum / grades.length;    
};
let averageGrade = Math.round(sum/grades.length);
console.log(`Средняя оценка по классу: ${averageGrade}`);
let divTwo = document.createElement('div');
divTwo.textContent = `Средняя оценка по классу: ${averageGrade}`;
document.body.append(divTwo);


let maxGrade = Math.max(...grades);
console.log(`Наивысший балл: ${maxGrade}`);
let divThree = document.createElement('div');
divThree.textContent = `Наивысший балл: ${maxGrade}`;
document.body.append(divThree);


let minGrade = Math.min(...grades);
console.log(`Наименьший балл: ${minGrade}`);
let divFour = document.createElement('div');
divFour.textContent = `Наименьший балл: ${minGrade}`;
document.body.append(divFour);


let positiveGrades = grades.filter((i) => {
    return i >= 60;
});
console.log(`Количествоpo студентов получивших положительную оценку: ${positiveGrades.length}`);
let divFive = document.createElement('div');
divFive.textContent = `Количествоpo студентов получивших положительную оценку: ${positiveGrades.length}`;
document.body.append(divFive);


let negativeGrades = grades.filter((i)=> {
    return i < 60;
});
console.log(`Количествоpo студентов получивших отрицательную оценку: ${negativeGrades.length}`);
let divSix = document.createElement('div');
divSix.textContent = `Количествоpo студентов получивших отрицательную оценку: ${negativeGrades.length}`;
document.body.append(divSix);


let letterGrades = grades.map((i) => {
    if (i >= 80) {
        return "A";
    } else if (i >= 60) {
        return "B";
    } else if (i >= 40) {
        return "C";
    } else if (i >= 20) {
        return "D";
    } else {
        return "E";
    }
});
console.log(`Буквенные оценки: ${letterGrades.join(", ")}`);
let divSeven = document.createElement('div');
divSeven.textContent = `Буквенные оценки: ${letterGrades.join(", ")}`;
document.body.append(divSeven);






