function changeFlag(){
var C=document.getElementById("country");
var F=document.getElementById("flag");
var w= F.width;
F.src= C.value;
}

function calc(){

var x=0;
x = document.getElementById("stars").value;

var ar=document.getElementsByName("w");
for (i=0; i<ar.length; i++)
if (ar [i].checked){
x=x*ar[i].value; 
break;
}

var ar=document.getElementsByName("m");
for (i=0; i<ar.length; i++)
if (ar [i].checked)
x=x+parseFloat(ar[i].value); 


var ar=document.getElementById("e");
for (i=0; i<ar.length; i++)
if (ar [i].selected)
x=x+parseFloat(ar[i].value); 



document.getElementById("result").value=x;

}