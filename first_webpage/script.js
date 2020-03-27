const fullName = 'Babalola Damilola';
console.log("My name is " + fullName);
const courses = ['HTML', 'CSS', 'JavaScript']
console.log(courses);
if (courses.length % 2 === 0) { 
    for (let i = 0; i <= 200; i += 2) {
        console.log(i)
    }
} else if (courses.length % 2 === 1) {
    for (let i = 1; i <= 200; i += 2) {
        console.log(i)
    }
}