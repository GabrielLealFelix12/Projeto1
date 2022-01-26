console.log("bruh");

function changeImage(){
	var eye;	
	eye = document.getElementById("disimage");
	eye.src="Black_Eye_Orb_.png"; 
}

function changeImage_back(){
	var oldeye;	
	oldeye = document.getElementById("disimage");
	oldeye.src="Red_Eye_Orb_.png"; 
}

function loadTextphp(){
	const ajax = new XMLHttpRequest();
	ajax.onload = function (){
		document.getElementById("texEye").innerHTML = this.responseText;
	}
	  ajax.open("POST", "front.php", true);
	  ajax.send();


}

