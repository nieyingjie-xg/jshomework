var pics=document.getElementById("adverf").getElementsByTagName("li");
var points=document.getElementById("advers").getElementsByTagName("li");
var last=document.getElementById("arrleft");
var next=document.getElementById("arrright");
var i=0;
var count=pics.length;
var timer;
var change=function(){
    if(i>=1){
        pics[i-1].style.display="none";
        points[i-1].className="out";
    }
    else{
        pics[count-1].style.display="none";
        points[count-1].className="out";
    }
    pics[i].style.display="block";
    points[i].className="on";
    i=(i+1)%count;
}
change()
var run=function(){
    timer=setInterval(
        function(){
            change();
        },2000);
}
function stoptimer(){ 
    clearInterval(timer);
}
function disappear(){
    last.style.display="none";
    next.style.display="none";
}
var appear=function(){
    last.style.display="";
    next.style.display="";
}
function move(r){
    for(var loc=0;loc<count;loc++){
        if(points[loc].className=="on"){
            loc;
            break;
        }
    }
    pics[loc].style.display="none";
    points[loc].className="out";
    if(loc>0){
        loc=(loc+r)%count;
    }else if(r>0){
        loc=loc+r;
    }
    else{
        loc=count-1;
    }
    pics[loc].style.display="block";
    points[loc].className="on";
    i=loc;
}
var switches=function(li){              
    var very=0;
    for(var j=0;j<count;j++){
        if(points[j]==li){
            very=j;
            break;
        }
    }
    for(var p=0;p<count;p++){
        pics[p].style.display="none";
        points[p].className="out";
    }
    pics[very].style.display="block";
    points[very].className="on";
    i=very;
}
     