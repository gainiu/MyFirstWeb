/**
 * Created by Administrator on 2016/8/23 0023.
 */
/*
window.onload=function(){
    var container=document.getElementById("container");
    var list=document.getElementById("list");
    var buttons=document.getElementById("buttons").getElementsByTagName("span");
    var prev=document.getElementById("prev");
    var next=document.getElementById("next");
    var index=1;





    function showButton(){
        for(var i=0;i<buttons.length;i++){
            if(buttons[i].className=="on"){
                buttons[i].className="";

            }
        }

        buttons[index-1].className="on";
    }
    function listChange(offset) {
/!*        if(offset==0){
            return;
        }*!/

        var newLeft=list.offsetLeft+offset;
        list.style.left=newLeft+"px";
        if(newLeft>-1140){
            list.style.left=-3420+"px";
        }
        if(newLeft<3420){
            list.style.left=-1140+"px";
        }


    }

    prev.onclick=function(){
/!*
        if (animated) {
            return;
        }
*!/

        if(index==1){
            index=3;
        }else{index-=1;}
        listChange(1140);
        showButton();
    };
    next.onclick=function(){
/!*        if (animated) {
            return;
        }*!/

        if(index==3){
            index=1;
        }else{
            index+=1;
        }
        listChange(-1140);
        showButton();
    };
    for(var i=0;i<buttons.length;i++){
        buttons[i].onclick=function(){
/!*!/!*            if (animated) {
                return;
            }*!/
            if(this.className=="on"){
                return;
            }*!/
            var myIndex=this.getAttribute("index");
            var offset=-1140*(myIndex-index);
            listChange(offset);
            index=myIndex;
            showButton();
        }
    }

    function play(){
        timer=setTimeout(function(){
            next.onclick();play();
        },5000);
    }
    function stop() {
        clearTimeout(timer);
    }
    container.onmouseover = stop;
    container.onmouseout = play;
    play();


};
*/

$(function(){
    var btnPage=$(" #buttons a ");
    var aImg=$(" #list img ");
    var aSize=aImg.length;
    var index=0;
    $("#prev").click(function(){
        index--;
        if(index<0){
            index=aSize-1;
        }
        change(index);
    });
    $("#next").click(function(){
        index++;
        if(index>aSize-1){
            index=0;
        }
        change(index);
    });
    btnPage.click(function(){
        index=$(this).index();
        change(index);
    });
    function change(index){
        btnPage.removeClass("on");
        btnPage.eq(index).addClass("on");
        aImg.stop();
        aImg.eq(index).siblings().animate({opacity:0},1000);
        aImg.eq(index).animate({opacity:1},1000);

    }
    function autoShow(){
        index=index+1;
        if(index<=aSize-1){
            change(index);
        }else{
            index=0;
            change(index);
        }
    }
    int=setInterval(autoShow,4000);
    function clearInt(){
        $("#prev,#next,#buttons a").mouseover(function(){
            clearInterval(int);
        })

    }
    function setInt(){
        $("#prev,#next,#buttons a").mouseout(function(){
            int=setInterval(autoShow,4000);
        })
    }
    clearInt();
    setInt();


});
