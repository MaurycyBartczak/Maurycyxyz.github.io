function czas(){
    //DEC 31, 2021 00:00:00
    var data = new Date("DEC 31, 2021 00:00:00").getTime();
    var now = new Date().getTime();
    var czas_do = data - now;
    var dzien = Math.floor(czas_do / (1000 * 60 * 60 * 24));
    var godziny = Math.floor((czas_do / (1000 * 60 * 60)) % 24);
    var minuty = Math.floor((czas_do % (1000 * 60 * 60)) / (1000 * 60));
    var sekundy = Math.floor((czas_do % (1000 * 60)) / 1000);
    var s2 = sekundy+1
    document.getElementById("czas").innerHTML = dzien+" dni "+godziny+" godziny "+minuty+" minuty "+s2+" sekundy";
    if(czas_do<172800000){
        document.getElementById("czas").style.color = "orange";
    }
    if (czas_do < 600000){
        document.getElementById("czas").style.color = "red";
    }
    if (czas_do < 0) {
        document.getElementById("czas").style.color = "red";
        document.getElementById("czas").innerHTML = "Nowy Rok!!";
      }
setTimeout("czas()",1000);
}

czas();

function teraz(){
    var data1 = new Date();
    var sekundy1 = data1.getSeconds();
    var minuty1 = data1.getMinutes();
    var godziny1 = data1.getHours();
    var dzien1 = data1.getDate();
    var miesiac1 = data1.getMonth()+1;
    var rok1 = data1.getFullYear();
    document.getElementById("teraz").innerHTML = rok1+"/"+miesiac1+"/"+dzien1+"/"+godziny1+":"+minuty1+":"+sekundy1;
    setTimeout("teraz()",1000);
}

teraz()

