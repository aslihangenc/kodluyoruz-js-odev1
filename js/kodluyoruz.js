let userName = prompt("Lütfen Adınızı Giriniz.")
document.getElementById('myName').innerHTML = userName

let myClock = document.getElementById('myClock')
function currentTime() {
    var nd = new Date();
    var s = nd.getSeconds();
    var m = nd.getMinutes();
    var h = nd.getHours();
    var d = nd.getDay();
    var currentDay = ""

    if ( d == 0) {
        currentDay = "Pazar"
    } else if (d == 1) {
        currentDay = "Pazartesi"
    } else if (d == 2) {
        currentDay = "Salı"
    } else if (d == 3) {
        currentDay = "Çarşamba"
    } else if (d == 4) {
        currentDay = "Perşembe"
    } else if (d == 5) {
        currentDay = "Cuma"
    } else {
        currentDay = "Pazartesi"
    } 
    myClock.innerHTML =`${("0"+h)}:${("0"+m)}:${("0"+s)} ${currentDay}`
}
currentTime()
setInterval(currentTime, 1000);
