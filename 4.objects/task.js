// Задача 1
function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
    if (this.hasOwnProperty('marks')) {
        this.marks.push(...marksToAdd);
    }
}

Student.prototype.getAverage = function () {
    if (!this.hasOwnProperty('marks') || this.marks.length === 0) {
        return 0;
    } else {
        let average = this.marks.reduce((acc, item, index, arr) => {
            acc += item;
            if (index === arr.length -1) {
                return acc / arr.length;
            }
            return acc;
        }, 0)
        return average;
    }
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}
