const text="Learn Computer & English Skills For Your Future";
let index=0;
const typing=document.getElementById("typing");

function type(){

typing.textContent=text.slice(0,index);

index++;

if(index>text.length){
index=0;
}

setTimeout(type,100);
}

type();
