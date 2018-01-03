function img(){
	window.location.href = "fairy.html"
}
			document.getElementById("deal").onclick=function(){
				window.location.href="查看身份.html"
			}
			var killer=document.getElementsByClassName("killer");
			var people=document.getElementsByClassName("people");
			var digit=document.getElementById("digit"); 
			
			digit.onchange=function(){
				var sum=digit.value;
				if(sum<4){
					killer[0].innerHTML='';
					people[0].innerHTML='';
					alert("请输入正确的玩家人数");
					
				}else if(sum>18){
					killer[0].innerHTML='';
					people[0].innerHTML='';
					alert("请输入正确的玩家人数")
				}else if(sum>=4 && sum<=9){
					killer[0].innerHTML=2;
					people[0].innerHTML=sum-killer[0].innerHTML;
				}else if(sum>=10 && sum<=14){
					killer[0].innerHTML=3;
					people[0].innerHTML=sum-killer[0].innerHTML;
				}else if(sum>=15 && sum<=18){
					killer[0].innerHTML=4;
					people[0].innerHTML=sum-killer[0].innerHTML;
				}
			}