var sum = 0;
    var count2 = 0;
function timr2() {
    console.log(document.getElementById("count2"))

    if(count2 < document.getElementById("count2").value)
    {setTimeout(Subtract, document.getElementById("num2").value * 1000);
    count2++;
    }
    else{
        count2 = 0;
    }
}
function Subtract() {
    var x = document.getElementById("demo2")
    var y = document.getElementById("digits2").value
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
