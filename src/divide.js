var quo = 0;
var con = 0;
var trol = 0;
var realans = 0;
var dank = document.getElementById('answer4');
var meme4 = document.getElementById("parta");
var what4 = document.getElementById('partc');
var lmao = document.getElementById('partb');

function Divide() {
    var x4 = document.getElementById("digits5").value;
    trol = Math.floor(Math.random() * (Math.pow(10, x4) - Math.pow(10, (x4 - 1))) + Math.pow(10, (x4 - 1)));
    con = Math.floor(Math.random() * (Math.pow(10, x4) - Math.pow(10, (x4 - 1))) + Math.pow(10, (x4 - 1)));
    quo = con * trol;
    meme4.innerHTML = quo;
    lmao.innerHTML = "÷";
    what4.innerHTML = trol;
    dank.style.display = '';
    realans = quo / trol;
}

function Reload4() {
    quo = 0;
    realans = 0;
    console.log(quo);
    dank.style.display = 'none';
}

function Hiding4() {
    alert(realans);
}

function Check4() {
    if (document.getElementById("answercheck4").value == realans) {
        confirm("congrats you got it right!");
        console.log("ok");
    }
    else {
        alert("Try again.");
    }
}