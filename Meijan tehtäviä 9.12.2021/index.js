// HTTP request
let xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "http://universities.hipolabs.com/search?country=finland",true); 
// send request
xmlhttp.send();

xmlhttp.onreadystatechange=function() {
    if(xmlhttp.readyState === 4 && xmlhttp.status === 200){  
        
        let universities = JSON.parse(xmlhttp.response);
        document.getElementById("data").innerHTML = this.responseText;
        console.log(this.responseText);
    }

}
