var quo = 0;
    var con = 0;
    var trol = 0;
    var branchdiv = document.getElementById('quower3');
        var meme3 = document.getElementById("part1");
        var what3 = document.getElementById('part2');
        var lel = document.getElementById('part1.5');
function Multiply() {
    var x3 = document.getElementById("digits3").value;
    var y3 = document.getElementById("digits4").value;
    ligan = Math.floor(Math.random()*(Math.pow(10,y3)-Math.pow(10,(y3-1)))+Math.pow(10,(y3-1)));
    mul = Math.floor(Math.random()*(Math.pow(10,x3)-Math.pow(10,(x3-1)))+Math.pow(10,(x3-1)));
    quo = mul * ligan;
    //document.getElementById("quower").innerHTML = "";
    meme3.innerHTML = mul;
    lel.innerHTML= "X";
    what3.innerHTML = ligan;
    branchdiv.style.display = '';
}
function Reload3() {
    quo =0;
    console.log(quo);
    branchdiv.style.display = 'none';
  }
function Hiding3() {
    //if (document.getElementById("quower").innerHTML == "") {
        alert(quo)
         //document.getElementById("quower").innerHTML == quo;

   // }
   // else if (document.getElementById("quower").innerHTML == quo) {
  //         document.getElementById("quower").innerHTML = "";
  //      console.log("bad")
//    }
}
function Check3() {
    if (document.getElementById("quowercheck3").value == quo) {
        confirm("congrats you got it right!");
        console.log("ok");
    }
    else {
        alert("Try again.");
    }
}
