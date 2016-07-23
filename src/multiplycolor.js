var ans = 0;
var mul = 0;
var ligan = 0;
var branchdiv = document.getElementById('answer3');
var meme3 = document.getElementById("part1");
var what3 = document.getElementById('part2');
var lel = document.getElementById('part1.5');
var test3 = document.getElementById("test3");

function Multiply() {
    var x3 = document.getElementById("digits3").value;
    var y3 = document.getElementById("digits4").value;
    ligan = Math.floor(Math.random() * (Math.pow(10, y3) - Math.pow(10, (y3 - 1))) + Math.pow(10, (y3 - 1)));
    mul = Math.floor(Math.random() * (Math.pow(10, x3) - Math.pow(10, (x3 - 1))) + Math.pow(10, (x3 - 1)));
    ans = mul * ligan;
    meme3.innerHTML = mul;
    lel.innerHTML = "X";
    what3.innerHTML = ligan;
    branchdiv.style.display = '';
}

function Reload3() {
    ans = 0;
    console.log(ans);
    branchdiv.style.display = 'none';
    test3.style.background = 'white';
}

function Hiding3() {
    alert(ans);
}

function Check3() {
    if (document.getElementById("answercheck3").value == ans) {
        test3.style.background = '#18bc69';
    }
    else {
        test3.style.background = 'red';
    }
}