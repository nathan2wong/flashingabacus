var sum2 = 0;
    var count2 = 0;
        var meme2 = document.getElementById("demo2");
function timr2() {

    console.log(document.getElementById("count2"));

    if(count2 < document.getElementById("count2").value) {
      setTimeout(Subtract, document.getElementById("num2").value * 1000);
      count2++;
    }
    else{
        count2 = 0;
    }
}
function Subtract() {
    var x2 = document.getElementById("demo2")
    var y2 = document.getElementById("digits2").value
    var pop2 = ((Math.round(Math.random())*2)-1)*(Math.floor(Math.random()*(Math.pow(10,y2)-Math.pow(10,(y2-1)))+Math.pow(10,(y2-1))));
    sum2 += pop2;
    x2.innerHTML = pop2;
    //document.getElementById("answer").innerHTML = "";
    timr2();
    meme2.style.display = '';
}
function Reload2() {
    sum2 =0;
    console.log(sum2);
    meme2.style.display = 'none';
  }
function Hiding2() {
    //if (document.getElementById("answer").innerHTML == "") {
        alert(sum2)
         //document.getElementById("answer").innerHTML == sum;

   // }
   // else if (document.getElementById("answer").innerHTML == sum) {
  //         document.getElementById("answer").innerHTML = "";
  //      console.log("bad")
//    }
}
function Check2() {
    if (document.getElementById("answercheck2").value == sum2) {
        confirm("congrats you got it right!");
        console.log("ok");
    }
    else {
        alert("Try again.");
    }
}
