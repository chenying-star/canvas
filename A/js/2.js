// JavaScript Document
function $$(id){
	return document.getElementById(id);
}
function oo(){
	var cnv=$$("cnvMain");
	var cxt=cnv.getContext("2d");
	cxt.moveTo(0,5);//起点
	cxt.lineTo(30,5);
	cxt.moveTo(0,10);//起点
	cxt.lineTo(36,10);
	cxt.moveTo(16,20);//起点
	cxt.lineTo(16,36);
	cxt.lineWidth=1.5;
	cxt.stroke();
	
	var cn=$$("cnvp");//肚子
	var cx=cn.getContext("2d");
	cx.beginPath();
	cx.arc(65,70,45,0,Math.PI*1, false);
	cx.closePath();
	//设置边框色
	cx.strokeStyle="#000";
	//边框宽度
	cx.lineWidth=3;
	//进行描边
	cx.stroke();
	
	var c=$$("cnvm");//鼻子
	var a=c.getContext("2d");
	//开始创建渐变对
	var gnt=a.createRadialGradient(30,30,0,20,20,400);//（开始时的x,开始的y,开始的半径，最后的x,最后的y，最后的半径）
	gnt.addColorStop(0,"#fff");
	gnt.addColorStop(0.35,"rgb(232,0,17)");
	gnt.addColorStop(0.75,"rgb(232,0,17)");
	gnt.addColorStop(1,"rgb(232,0,17)");
	//开始画实体圆
	a.beginPath();
	a.arc(112,100,20,0,Math.PI*2,true);//(x,y,半径，开始角度，结束角度，顺时针)
	a.closePath();
	//设置填充背景色
	a.fillStyle=gnt;
	//进行填充
	a.fill();
	//开始画边框圆
	a.beginPath();
	a.arc(112,100,20,0,Math.PI*2,true);
	a.closePath();
	//设置边框色
	a.strokeStyle="#000";
	//边框宽度
	a.lineWidth=3;
	//进行描边
	a.stroke();
	
	var i=$$("cnvn");
	var u=i.getContext("2d");
	u.moveTo(110,120);//起点
	u.lineTo(110,165);
	u.lineWidth=2.6;
	u.stroke();
	u.moveTo(30,115);//起点
	u.lineTo(100,125);
	u.moveTo(30,130);//起点
	u.lineTo(100,130);
	u.moveTo(30,145);//起点
	u.lineTo(100,135);
	
	u.moveTo(120,127);//起点
	u.lineTo(190,117);
	u.moveTo(120,132);//起点
	u.lineTo(190,132);
	u.moveTo(120,135);//起点
	u.lineTo(190,145);
	u.lineWidth=1.8;
	u.stroke();
	
	var q=$$("cnvpp");//左边弯胡子
	var im=q.getContext("2d");
	im.beginPath();
	im.arc(60,28,120,Math.PI*0.36,Math.PI*0.6,false);
	
	//设置边框色
	im.strokeStyle="#000";
	//边框宽度
	im.lineWidth=3;
	//进行描边
	im.stroke();
	
	var qo=$$("cnvpo");////右边弯胡子
	var imo=qo.getContext("2d");
	imo.beginPath();
	imo.arc(160,28,120,Math.PI*0.4,Math.PI*0.645,false);
	
	//设置边框色
	imo.strokeStyle="#000";
	//边框宽度
	imo.lineWidth=3;
	//进行描边
	imo.stroke();
	
}
