//          9.12.2021
//      Web-tekniikat
//              OAMK

// HTTP request
let xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "https://yesno.wtf/api/",true);
// send request
xmlhttp.send();


xmlhttp.onreadystatechange=function() {
    if(xmlhttp.readyState === 4 && xmlhttp.status === 200){  
        
        let objAnswer = JSON.parse(xmlhttp.response);

        
        document.getElementById("answer").innerHTML = objAnswer.answer;
        document.getElementById("answer-image").setAttribute("src", objAnswer.image);
    }
  }

  function get_joke_of_the_day() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
	 if (this.readyState == 4 && this.status == 200) {
         let joke = JSON.parse(this.response);
	     // Access the result here
	     document.getElementById("joke").innerHTML = joke.contents.jokes[0].joke.text;
	 }
    };
    xhttp.open("GET", "https://api.jokes.one/jod?category=animal", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("X-JokesOne-Api-Secret", "YOUR API HERE");
    xhttp.send();
}

get_joke_of_the_day()
  