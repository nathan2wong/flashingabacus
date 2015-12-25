var sum = 0;
    var count = 0;
var time = document.getElementById("num");
var realtime = time.options[time.selectedIndex].value;
//var time = (document.getElementbyID("num") * 1000);

//function gettime() {
//console.log(time);
//    if (time > 0) {
//        console.log("reaching stop");
//        clearInterval(i);
//        return;
//    }
// }
    ;
function timr(){
    console.log(document.getElementById("count"))
    
    if(count < document.getElementById("count").value)
    {setTimeout(Adding, document.getElementById("num").value * 1000);
    count++;
    }
    else{
        count = 0;
    }
}
function Adding() {
    var x = document.getElementById("demo")
    var y = document.getElementById("digits").value
    var pop = ((Math.round(Math.random())*2)-1)*(Math.floor(Math.random()*(Math.pow(10,y)-Math.pow(10,(y-1)))+Math.pow(10,(y-1))));
    sum += pop;
    x.innerHTML = pop;
    //document.getElementById("answer").innerHTML = "";
    timr()
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
function Reload() {
    location.reload();
}

function blink () {   
        $("#demo").fadeTo(0, 0).fadeTo(500, 1.0);
    }   