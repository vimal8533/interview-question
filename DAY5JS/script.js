let heading=document.getElementsByTagName("h1");



var Heading =document.getElementsByClassName("Heading");
console.log(Heading[0]);
var count=0;
function  change(){
    if(count%2==0){
        Heading[0].innerHTML="MERN stack";
        count++;
    }else{
        Heading[0].innerHTML="";
        count--;
    }
   
}
var head2=document.getElementsByTagName("h2");

function clock(){
    var time=new Date().toLocaleTimeString();
head2[0].innerHTML=time
setInterval(() => {
    clock()
}, 1000);
}

head2[0].addEventListener("click",clock );


function changetext(){
    head2[1].innerText="Welcome to Elevation academy";
}
function hidetext() {
    head2[2].style.display="none";
}
