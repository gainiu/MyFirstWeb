window.onload=function(){
    PBL('wrap','box');
    //ģ������
    var data=[
        {"src":"1.jpg"},
        {"src":"2.jpg"},
        {"src":"3.jpg"},
        {"src":"4.jpg"},
        {"src":"5.jpg"},
        {"src":"6.jpg"},
        {"src":"7.jpg"},
        {"src":"8.jpg"},
        {"src":"9.jpg"},
        {"src":"10.jpg"}
    ];

/*    window.onscroll=function(){
        if(getCheck()){
            var wrap = document.getElementById('wrap');
            for(i in data){
                //����box
                var box = document.createElement('div');
                box.className = 'box';
                wrap.appendChild(box);
                //����info
                var info = document.createElement('div');
                info.className = 'info';
                box.appendChild(info);
                //����pic
                var pic = document.createElement('div');
                pic.className = 'pic';
                info.appendChild(pic);
                //����img
                var img = document.createElement('img');
                img.src = 'images/'+data[i].src;
                img.style.height = 'auto';
                pic.appendChild(img);
                /!*!//����title
                var title = document.createElement('div');
                title.className = 'title';
                info.appendChild(title);
                //����a���
                var a = document.createElement('a');
                a.innerHTML = data[i].title;
                title.appendChild(a);*!/
            }
            PBL('wrap','box');
        }
    }*/
};
function PBL(wrap,box){
    //	1.�������Լ�ÿһ��box
    var wrap = document.getElementById(wrap);
    var boxs  = getClass(wrap,box);
    //	2.�����Ļ����ʾ������
    var boxW = boxs[0].offsetWidth;
    var colsNum = Math.floor(document.documentElement.clientWidth/boxW);
    wrap.style.width = boxW*colsNum+'px';//Ϊ��㸳ֵ���
    //	3.ѭ�������е�box�������ٲ�������
    var everyH = [];//����һ������洢ÿһ�еĸ߶�
    for (var i = 0; i < boxs.length; i++) {
        if(i<colsNum){
            everyH[i] = boxs[i].offsetHeight;
        }else{
            var minH = Math.min.apply(null,everyH);//�����С���еĸ߶�
            var minIndex = getIndex(minH,everyH); //�����С�е�����
            getStyle(boxs[i],minH,boxs[minIndex].offsetLeft,i);
            everyH[minIndex] += boxs[i].offsetHeight;//������С�еĸ߶�
        }
    }
}
function getClass(wrap,className){
    var obj = wrap.getElementsByTagName('*');
    var arr = [];
    for(var i=0;i<obj.length;i++){
        if(obj[i].className == className){
            arr.push(obj[i]);
        }
    }
    return arr;
}
function getIndex(minH,everyH){
    for(index in everyH){
        if (everyH[index] == minH ) return index;
    }
}
/*function getCheck(){
    var documentH = document.documentElement.clientHeight;
    var scrollH = document.documentElement.scrollTop || document.body.scrollTop;
    return documentH+scrollH>=getLastH() ?true:false;
}*/
/*function getLastH(){
    var wrap = document.getElementById('wrap');
    var boxs = getClass(wrap,'box');
    return boxs[boxs.length-1].offsetTop+boxs[boxs.length-1].offsetHeight;
}*/
var getStartNum = 0;//����������ص�������λ��
function getStyle(box,top,left,index){
    if (getStartNum>=index) return;
    $(box).css({
        'position':'absolute',
        'top':top,
        "left":left,
        "opacity":"0"
    });
    $(box).stop().animate({
        "opacity":"1"
    },999);
    getStartNum = index;//�����������ݵ�����λ��
}/**
 * Created by Administrator on 2016/8/31 0031.
 */
