function kontaktform() {
					
	var form = document.querySelector('form');		
	var data = new FormData(form);

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("POST", "script/kontaktform.php", true);
	xmlhttp.send(data);
	xmlhttp.addEventListener('load', function(event) {
		//alert("State: "+this.readyState+" / Status: "+this.status);
		/*document.getElementById(submitbtn).style.visibility='hidden';*/
		if (this.readyState == 4 && this.status == 200) {
            document.getElementById("submitbtn").style.visibility='hidden';
            document.getElementById("infobox").innerHTML = "Vielen Dank, Ihre Nachricht wurde erfolgreich versendet.";
            //alert(this.responseText);
       }
			
		});

}