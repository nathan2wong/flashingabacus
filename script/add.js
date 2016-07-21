var sum = 0;
    var count = 0;
    var pop = 0;
        var meme = document.getElementById("demo");
function timr(){
  meme.style.display = '';

    console.log(document.getElementById("count"))

    if(count < document.getElementById("count").value)
    {setTimeout(Adding, document.getElementById("num").value * 1000);
    count++;
    }
    else{
        count = 1;
    }
}
function Adding() {
    var x = document.getElementById("demo")
    var y = document.getElementById("digits").value
    var pop = Math.floor(Math.random()*(Math.pow(10,y)-Math.pow(10,(y-1)))+Math.pow(10,(y-1)));
    sum += pop;
    x.innerHTML = pop;
    //document.getElementById("answer").innerHTML = "";
    timr();
}
function Reload() {
    sum =0;
    console.log(sum);
    alert('Reset. Ready to begin the next question?');
    meme.style.display = 'none';
  }
function Hiding() {
    //if (document.getElementById("answer").innerHTML == "") {
        alert(sum)
         //document.getElementById("answer").innerHTML == sum;

   // }
   // else if (document.getElementById("answer").innerHTML == sum) {
  //         document.getElementById("answer").innerHTML = "";
  //      console.log("bad")
//    }
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
