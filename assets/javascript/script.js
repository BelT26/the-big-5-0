var countDownDate = new Date("Oct 23, 2021 12:00:00").getTime();

var updateCounter = setInterval(function() {
    var now = new Date().getTime();
    var timeleft = countDownDate - now;
    
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = `DAYS: ${days} `
    document.getElementById("hours").innerHTML = `HOURS: ${hours} `
    document.getElementById("mins").innerHTML = `MINS: ${minutes} ` 
    document.getElementById("secs").innerHTML = `SECS: ${seconds} `    

    // Display the message when countdown is over
    if (timeleft < 0) {
        clearInterval(myfunc);
        document.getElementById("days").innerHTML = ""
        document.getElementById("hours").innerHTML = "" 
        document.getElementById("mins").innerHTML = ""
        document.getElementById("secs").innerHTML = ""
        document.getElementById("end").innerHTML = "TIME UP!!";
    }

}, 1000)

