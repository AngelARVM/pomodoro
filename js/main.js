var minutes= 25;
var seconds = "00";
var boolean = true
var x = "#f05454"

var click = new Audio("media/click.mp3")
var bell = new Audio("media/bell.mp3")

function template(){

  document.getElementById("minutos").innerHTML = minutes;
  document.getElementById("segundos").innerHTML = seconds;
}

function cambiarFondo(x){
    var body = document.getElementById('body')
    console.log(x)
    body.style.backgroundColor = x
}


function start() {
    minutes = minutes
    click.play()



    seconds = 59

    document.getElementById("minutos").innerHTML = minutes;
    document.getElementById("segundos").innerHTML = seconds;

    var minutes_interval = setInterval(minutesTimer, 60000) //default 60000
    var seconds_interval = setInterval(secondsTimer, 1000) // default 1000

    function minutesTimer(){
        minutes = minutes -1;
        document.getElementById("minutos").innerHTML = minutes;
    }

    function secondsTimer(){
        seconds = seconds -1;
        document.getElementById("segundos").innerHTML = seconds;

        if (seconds <= 0){
            if (minutes <= 0){
              clearInterval(minutes_interval)
              clearInterval(seconds_interval)

              bell.play();
            }
            seconds= 60
        }
    }
    cambiarFondo(x);
    if (boolean == true){
        minutes = 24
        x = "#30475e"
        document.getElementById("done").innerHTML = "Work!"
        document.getElementById("done").classList.add("work")
    }else{
        minutes = 4
        x = "#f05454"
        document.getElementById("done").innerHTML = "Break!"
        document.getElementById("done").classList.add("rest")
    }

    document.getElementById("minutos").innerHTML = minutes;
    document.getElementById("segundos").innerHTML = seconds;
    template()
    boolean=!boolean
    console.log(boolean)

}
