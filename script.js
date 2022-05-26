let options=document.getElementsByTagName("input");
let index=0;
let questions=[" Find the sum of 111 + 222 + 333","Subtract 457 from 832","90 ÷ 10","50 times 5 is equal to","Simplify: 26 + 32 - 12"];
let option1=[700,375,9,250,216];
let option2=[666,57,10,505,32];
let option3=[10,376,900,500,46];
let annswers=[666,375,9,250,46];
let score=0;

function CheckAnswer(){
    if(options[0].checked){
        options[1].disabled=true;
        options[2].disabled=true;
    }
    if(index==0){
       document.getElementById("questionl").innerHTML=questions[0];
       document.getElementById("option1l").innerHTML=option1[0];
       document.getElementById("option2l").innerHTML=option2[0];
       document.getElementById("option3l").innerHTML=option3[0];
       if(options[1].checked){
         score++;
         window.alert("Your answer is correct.")
           document.getElementById("option1l").style.color="red";
           document.getElementById("option2l").style.color="green";
           document.getElementById("option3l").style.color="red";
       }
    }
    if(index==1){
        document.getElementById("questionl").innerHTML=questions[1];
        document.getElementById("option1l").innerHTML=option1[1];
        document.getElementById("option2l").innerHTML=option2[1];
        document.getElementById("option3l").innerHTML=option3[1];
    }
     if(index==2){
        document.getElementById("questionl").innerHTML=questions[2];
        document.getElementById("option1l").innerHTML=option1[2];
        document.getElementById("option2l").innerHTML=option2[2];
        document.getElementById("option3l").innerHTML=option3[2];
     }
     if(index==3){
        document.getElementById("questionl").innerHTML=questions[3];
        document.getElementById("option1l").innerHTML=option1[3];
        document.getElementById("option2l").innerHTML=option2[3];
        document.getElementById("option3l").innerHTML=option3[3];
     }
     if(index==4){
        document.getElementById("questionl").innerHTML=questions[4];
        document.getElementById("option1l").innerHTML=option1[4];
        document.getElementById("option2l").innerHTML=option2[4];
        document.getElementById("option3l").innerHTML=option3[4];
     }
}
function NextClick(){
   index++;
   document.getElementById("option1l").style.color="black";
    document.getElementById("option2l").style.color="black";
    document.getElementById("option3l").style.color="black";
}