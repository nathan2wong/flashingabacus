var sum = 0;
    var count3 = 0;
function timr3() {
    console.log(document.getElementById("count3"))

    if(count3 < document.getElementById("count3").value)
    {setTimeout(Subtract, document.getElementById("num3").value * 1000);
    count3++;
    }
    else{
        count3 = 0;
    }
}
function Subtract() {
    var x = document.getElementById("demo3")
    var y = document.getElementById("digits3").value
    var pop = ((Math.round(Math.random())*2)-1)*(Math.floor(Math.random()*(Math.pow(10,y)-Math.pow(10,(y-1)))+Math.pow(10,(y-1))));
    sum += pop;
    x.innerHTML = pop;
    //document.getElementById("answer").innerHTML = "";
    timr2()
}
function Hiding2() {
    //if (document.getElementById("answer").innerHTML == "") {
        alert(sum)
         //document.getElementById("answer").innerHTML == sum;

   // }
   // else if (document.getElementById("answer").innerHTML == sum) {
  //         document.getElementById("answer").innerHTML = "";
  //      console.log("bad")
//    }
}
function Check2() {
    if (document.getElementById("answercheck2").value == sum) {
        confirm("congrats you got it right!");
        console.log("ok");
    }
    else {
        alert("Try again.");
    }
}
function Reload() {
    location.reload();
}
