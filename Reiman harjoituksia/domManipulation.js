// 3.11.2021 
// Harjoituksia

//harjoitus a.
var aelem = document.getElementById("content")
console.log(aelem.nodeName);
//harjoitus b.
var firstBasic = document.querySelector(".basic")
console.log(firstBasic.nodeName);
//harjoitus c.
var allitems = document.getElementsByTagName("li")
for(i of allitems){
    console.log(i.textContent);
}

// Harjoitus d.
var body = document.querySelector("body")
var allNodes = body.querySelectorAll("*");

for (x of allNodes) {
    console.log(x.nodeName)
}

// harjoitus e.
var article = document.querySelector("article")

for(i of article.querySelectorAll("li")){
    console.log
}

//harjoitus f.
for(i of allitems){
    i.textContent = "John Doe"
}
