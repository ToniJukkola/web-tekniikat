// Tapahtumankäsittelijä inputille/hae painikkeella 
// luo HTTP/request inputin perusteella
function ok() {

    let uri ="http://universities.hipolabs.com/search?country=" + document.getElementById("inputvalue").value;
// HTTP request
let xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", uri, true); 
// send request
xmlhttp.send();

xmlhttp.onreadystatechange=function() {
    if(xmlhttp.readyState === 4 && xmlhttp.status === 200){ 
        document.getElementById("data").innerHTML ="<ul>";
        
        let domains = JSON.parse(xmlhttp.response);
        domains.forEach(element => {
            document.getElementById("data").innerHTML += "<li>" + element.web_pages  + element.name + "</li>";
            
        });
        document.getElementById("data").innerHTML += "</ul>";
        console.log(domains);
    }

}

}