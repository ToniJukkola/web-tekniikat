// JS-tiedosto ostoskorille
// Bootstrap tehtävä.

let countDownDate = new Date("Aug 11, 2022 15:37:25").getTime();

let x = setInterval(function() {

    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    
    document.getElementById("kello").innerHTML = "<h3>" + days + "d " + hours + "h "
  + minutes + "m " + seconds + "s " + "</h3>" ;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("kello").innerHTML = "Perillä";
  }
}, 1000);