/*-----------menu toggle start-------------*/
    var menuBtn = document.getElementById("menuBtn");
	var sideNav = document.getElementById("sideNav");
	var header = document.getElementById("header");
	
	
	sideNav.style.right="-250px";
	menuBtn.onclick = function(){
		if(sideNav.style.right == "-250px"){
			sideNav.style.right="0px";
		}else{
			sideNav.style.right="-250px";
		}
	}

	header.onclick = function(){
		if(sideNav.style.right == "0px"){
			sideNav.style.right="-250px";
		}
	}
/*-----------menu toggle start-------------*/