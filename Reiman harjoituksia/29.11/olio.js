// 29.11.

//let name = "Toni";

//testi(fname);

//function testi(n){
 //   n = "Liisa";
//}

//console.log(fname);


let courses =[];

document.querySelector("save").addEventListener("click", addCourse);
document.getElementById("print").addEventListener("click", showAll);

function addCourse(){
    //haetaan tiedot kentistä
    let cname = document.getElementById("course").value; 
    let snum = document.getElementById("studentnum").value; 
    // luodaan tiedoista olio
    let course = {
        course_name: cname,
        studentnum: snum
    }
    //lisätään olio taulukkoon
    courses.push(course)
    console.log(courses)
}

function showAll(){
    courses.forEach( course => {
        let li = document.createElement("li");
        li.textContent = "Course" + course.course_name + "has" + course.studentnum + " students registered";

        document.querySelector("ul").appendChild(li);
    } );
}







//let person = {
//    fname: "Toni", 
//    lname: "Jukkola",
//    age: 22
//}
//
//let copyPerson = person;
//
//copyPerson.fname= "Tontsa";
//
//console.log(person);
//
//function testi(p){
//    p.age = 50; 
//}
//
//let persons = [
//    {
//        fname:"Tiina",
//        lname:"Kumula",
//        age:33
//    },
//    {
//        fname:"Juuso",
//        lname:"Kumula",
//        age:17
//    },
//    person
//];

//persons.forEach( p => console.log( p.fname ) );