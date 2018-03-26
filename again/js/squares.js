var timer;
var div=document.getElementsByTagName("div");
var colors=['red ','blue','yellow','orange','pink'];
function timer(){
    for(var i=0;i<div.length;i++){
        div[i].style.background ="orange";
    };
    var a =ner();
    for(var m=0;m<3;m++){
        div[a[m]].style.background=colors[m];
    };
}
function ner(){
    var a=[];
    var sum1=Math.floor(Math.random()*9);
    var sum2=Math.floor(Math.random()*9);
    var sum3=Math.floor(Math.random()*9);
    while(sum2==sum1){
        sum2=Math.floor(Math.random()*9)
    }
    while(sum3==sum2||sum3==sum1){
        sum3=Math.floor(Math.random()*9);
    }
    a.push(sum1,sum2,sum3);
    return a
}
var times;
var btn1=document.getElementById('start');

btn1.onclick=function(){
    clearInterval(times);
    times=setInterval(timer,1000);
    btn2.className='';
    btn1.className='change';
};
btn2.onclick=function(){
    btn2.className='';
    btn1.className='';
    clearInterval(times);
    setTimeout(function () {
        btn2.className='';
    },1000)
    for(var x=0;x<div.length;x++){
        div[x].style.background='aornge';
    };
};

