//Basic Array Methods
//ARRAY إنشاء 
let numbers = [1, 2, 3, 4, 5];
let students = ["Lian", "Ahmad", "Ghada", "Ayham", "Nataly"];

// join(): تقوم هذه الدالة بتحويل عناصر المصفوفة إلى سلسلة نصية مع وضع فاصل محدد بين العناصر
let joinedStudents = students.join("-");
console.log("After join:", joinedStudents);
// الناتج يصبح "Lian-Ahmad-Ghada-Ayham-Nataly"

// toString(): تحويل المصفوفة إلى نص
let numbersString = numbers.toString();
console.log("After toString:", numbersString);
//"1,تصبح "2,3,4,5

// push(): اضافة عنصر جديد في نهاية المصفوفة
students.push("Sarah");
console.log("After push:", students);
// تصبح ["Lian", "Ahmad", "Ghada", "Ayham", "Nataly", "Sarah"]

// pop(): إزالة العنصر الأخير من المصفوفة
let removedStudent = students.pop();
console.log("After pop:", students, "Removed:", removedStudent);
// تصبح ["Lian", "Ahmad", "Ghada", "Ayham"]

// concat(): تقوم بدمج مصفوفتين أو أكثر معًا في مصفوفة جديدة
let combined = numbers.concat(students);
console.log("After concat:", combined);
// الناتج يكون [1, 2, 3, 4, 5, "Lian", "Ahmad", "Ghada", "Ayham", "Nataly"]

// shift(): إزالة العنصر الأول من المصفوفة
let shiftedNumber = numbers.shift();
console.log("After shift:", numbers, "Removed:", shiftedNumber);
// بعد الإزالة: [2, 3, 4, 5]
