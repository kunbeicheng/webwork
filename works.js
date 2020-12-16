	//①登录框js
	var logn = document.getElementById('logn');
	var biaodan = document.getElementById('biaodan');
	var k = 0;
	logn.onclick = function(e) {
		e.preventDefault();
		if (this.innerHTML!='登录/注册') {
			this.innerHTML='登录/注册';
			alert('账号退出成功！');
		}
		if(k % 2 == 0) {
			biaodan.style.display = 'block';
		} else {
			biaodan.style.display = 'none';
		}
		k++;
	}
	//②左右翻页框及轮播图js
	var prev = document.getElementsByClassName('prev')[0];
	var next = document.getElementsByClassName('next')[0];
	var banner = document.getElementsByClassName('banner-item')[0];
	var arr = [],m = 21,n, timeId;
	arr[0] = 'banaer.jpg';
	arr[1] = 'au4.jpg';
	arr[2] = 'sp3.jpg';
	arr[3] = 'au3.jpg';
	arr[4] = 'su4.jpg';
	arr[5] = 'su5.jpg';
	arr[6] = 'wi5.jpg';
	prev.onmouseover = function() {
		this.style.opacity = '0.8';
		this.style.width = '154px';
		this.style.left = '0';
		this.style.height = '154px';
		this.style.top = '198px';
	}
	prev.onmouseout = function() {
		this.style.opacity = '0.3';
		this.style.width = '106px';
		this.style.left = '2%';
		this.style.height = '106px';
		this.style.top = '222px';
	}
	next.onmouseover = function() {
		this.style.opacity = '0.8';
		this.style.width = '154px';
		this.style.right = '0';
		this.style.height = '154px';
		this.style.top = '198px';
	}
	next.onmouseout = function() {
		this.style.opacity = '0.3';
		this.style.width = '106px';
		this.style.right = '2%';
		this.style.height = '106px';
		this.style.top = '222px';
	}

	function lunbo() {
		timeId = setInterval(function() {
			n = m % 7;
			banner.style.background = "url(" + arr[n] + ") no-repeat center center";
			m++;
		}, 5000)
	}
	lunbo();
	prev.onclick = function() {
		clearInterval(timeId);
		m = m - 2;
		n = m % 7;
		banner.style.background = "url(" + arr[n] + ") no-repeat center center";
		m++;
		lunbo();
	}
	next.onclick = function() {
		clearInterval(timeId);
		n = m % 7;
		banner.style.background = "url(" + arr[n] + ") no-repeat center center";
		m++;
		lunbo();
	}
	//③搜索栏模糊搜索js
	var search = document.getElementsByClassName('search')[0];
	var submit = document.getElementsByClassName('submit')[0];
	var he = document.getElementsByClassName('hehe')[0];
	var ha = document.getElementsByClassName('hehe')[1];
	var hi = document.getElementsByClassName('hehe')[2];
	var hp = document.getElementsByClassName('hehe')[3];
	submit.onclick = function() {
		if(search.value.indexOf('春') != -1 || search.value.indexOf('spring') != -1) {
			he.click();
		} else if(search.value.indexOf('夏') != -1 || search.value.indexOf('summer') != -1) {
			ha.click();
		} else if(search.value.indexOf('秋') != -1 || search.value.indexOf('autumn') != -1) {
			hi.click();
		} else if(search.value.indexOf('冬') != -1 || search.value.indexOf('winder') != -1) {
			hp.click();
		} else if(search.value != '') {
			window.location.href = 'http://www.hebtu.edu.cn/a/sdxb/xxgk/xyfg/index.html';
		}
	}
	//④注册js
	var bianhuan=document.getElementById('bianhuan');
	var shabi=document.getElementsByClassName('shabi')[0];
	var mit=document.getElementsByClassName('mit')[0];
	var brr=[];
	bianhuan.onclick = function(e) {
		e.preventDefault();
		shabi.style.display='block';
	}
	function check(){
			//账号
		var name = document.getElementById("name");			
		if(name.value==''){
			alert('账号不能为空');
			name.focus();
			return false;
		}else{
			if (isNaN(name.value)) {
				alert('账号由6个数字组成');
				name.focus();
				return false; 
			}
		}					 					
			//密码
		var pwd1 = document.getElementById('pwd1');
		if(pwd1.value==''){
			alert('密码不能为空');
			pwd1.focus();
			return false;
		}else{
			if(isNaN(pwd1.value)){
				alert('密码错误，密码由数字组成');
				pwd1.focus();
				return false;
			}else{
				if(pwd1.value.length<4){
					alert('密码不能少于4位');
					pwd1.focus();
					return false;
				}
			}
		}
			//验证密码
		var pwd2 = document.getElementById('pwd2');
		if(!(pwd2.value==pwd1.value)){
			alert('确认密码与第一次输入不同，请重新输入');
			pwd2.focus();
			return false;
		}
		brr.push({'z':name.value,'m':pwd1.value});
		shabi.style.display='none';
		alert("注册成功,请登录！")
		return false;	
	}
	//④登录后变化js
	var login=document.getElementById('login');
	var kuano=document.getElementsByClassName('kuan')[0];
	var kuanl=document.getElementsByClassName('kuan')[1];
	var p=0,q;
	login.onclick=function(){
		if (brr.length==0) {
			alert('你还没有账号，请先注册！');
		}else{
			for (var i=0;i<brr.length;i++) {
				if (kuano.value==brr[i].z) {
					if (kuanl.value==brr[i].m) {
						logn.innerHTML=kuano.value;
						p+=1;
						biaodan.style.display = 'none';
						alert('登录成功！');
						kuano.value=null;
						kuanl.value=null;
						break;
					}
				}	
			}
			for (var j=0;j<brr.length;j++) {
				if((kuano.value==brr[j].z)&&(logn.innerHTML!=kuano.value)){
					q=false;
					kuanl.value=null;
					alert('密码错误!');
					break;
				}else{
					q=true;
				}	
			}
			if (p==0&&q==true) {
				kuano.value=null;
				kuanl.value=null;
				alert('账号不存在');
			}
		}
	}
