/**
 * Created by Administrator on 2016/8/23 0023.
 */
/*
window.onload=function(){
    /!*==============menu===============*!/
    var menu=document.getElementById("menu");
    var uL=menu.getElementsByTagName("ul")[0];
    var oL=menu.getElementsByTagName("li");

    for(var i=0;i<oL.length;i++){
        oL[i].onmouseover=function(){
            if(oL[i].className==""){
                oL[i].className="active";
            }
            else return;
        }

    }
/!*    function showMenu(){
        for(var i=0;i<oL.length;i++){
            if(oL[i].className=="active"){
                oL[i].className="";
            }
        }
        this.className="active";
    }
    for(i=0;i<oL.length;i++){

        oL[i].onmouseover=function(){
            showMenu();
        }
    }*!/
	};*/
/*
$(function(){
    var sub_active=$(".active");
    var sub_scroll=function(target){
        sub_active.removeClass("active");
        target.parent().addClass("active");
        sub_active=target.parent();
    };
    $("#menu a").click(function(){
        sub_scroll($(this));
        var target = $(this).attr("href");
        var targetScroll = $(target).offset().top - 80;
        $("html,body").animate({scrollTop:targetScroll},300);
        return false;
    });
}());*/
window.onload=function(){
    var container=document.getElementById("container");
    var list=document.getElementById("list");
    var buttons=document.getElementById("buttons").getElementsByTagName("span");
    var prev=document.getElementById("prev");
    var next=document.getElementById("next");
    var index=1;
    var listLen=3;
    function showButton(){
        for(var i=0;i<buttons.length;i++){
            if(buttons[i].className=="on"){
                buttons[i].className="";
            }
            buttons[index-1].className="on";
        }
    }
    function listChange(offset){
        var newLeft=list.offsetLeft+offset;
        list.style.left=newLeft+"px";
        if(newLeft>-1140){
            list.style.left=-1140*listLen+"px";
        }
        if(newLeft<-1140*listLen){
            list.style.left=-1140+"px";
        }
    }
    prev.onclick=function(){
        if(index==1){
            index=3;
        }else{index-=1;}
        listChange(1140);
        showButton();
    };
    next.onclick=function(){
        if(index==3){
            index=1;
        }else{
            index+=1;
        }
        listChange(-1140);
        showButton();
    };
    for(var i=0;i<buttons.length;i++){
/*        if(buttons[i].className=="on"){
            return;
        }*/
        buttons[i].onclick=function(){
            var myIndex=parseInt(this.getAttribute("index"));
            var offset=-1140*(myIndex-index);
            listChange(offset);
            index=myIndex;
            showButton();
        }
    }
    function play(){
       var timer=setTimeout(function(){
            next.onclick();play();
        },3000);
    }
    play();
};