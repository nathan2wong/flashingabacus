var sum = 0;
var count = 0;
var pop = 0;
var meme = document.getElementById("demo");

function timr() {
    console.log(document.getElementById("count"));
    if (count < document.getElementById("count").value) {
        setTimeout(Adding, document.getElementById("num").value * 1000);
        count++;
    }
    else {
        count = 0;
    }
}

function Adding() {
    var x = document.getElementById("demo")
    var y = document.getElementById("digits").value
    pop = Math.floor(Math.random() * (Math.pow(10, y) - Math.pow(10, (y - 1))) + Math.pow(10, (y - 1)));
    sum += pop;
    x.innerHTML = pop;
    timr();
    meme.style.display = '';
}

function Reload() {
    sum = 0;
    pop = 0;
    count = 0;
    console.log(sum);
    console.log(pop);
    meme.style.display = 'none';
}

function Hiding() {
    alert(sum);
}

function Check() {
    if (document.getElementById("answercheck").value == sum) {
        confirm("congrats you got it right!");
        console.log("ok");
    }
    else {
        alert("Try again.");
    }
}
