window.onload  = function eye()
{
	
	var data = $.getJSON("eye.json", function(json) {
	    console.log(json);
		
		
		var color = json.color;
		var mood = json.mood;
		
		
			if (mood == "happy1"){
			
				var mydiv = document.getElementById('masquePaupiereInfGauche');
				mydiv.style.bottom = "25%"; 
				var mydiv = document.getElementById('masquePaupiereInfDroit');	
				mydiv.style.bottom = "25%";
				var mydiv = document.getElementById('masquePaupiereSupGauche');
				mydiv.style.top = "-5%"; 
				mydiv.style.left = "0%";
				var mydiv = document.getElementById('masquePaupiereSupDroit');	
				mydiv.style.top = "-5%";
				mydiv.style.right = "0%";
				var mydiv = document.getEle
				var mydiv = document.getElementById('pupilleGauche');
				mydiv.style.top = "26%"; 
				mydiv.style.left = "10%"; 
				var mydiv = document.getElementById('pupilleDroit');	
				mydiv.style.top = "26%";
				mydiv.style.right = "10%";
				mydiv.style.transform = "scale(1,1)";
				var mydiv = document.getElementById('pupilleGauche');
				mydiv.style.transform = "scale(1,1)";
			}
			else if (mood == "happy2"){
			
				var mydiv = document.getElementById('masquePaupiereInfGauche');
				mydiv.style.bottom = "30%"; 
				var mydiv = document.getElementById('masquePaupiereInfDroit');	
				mydiv.style.bottom = "30%";
				var mydiv = document.getElementById('masquePaupiereSupGauche');
				mydiv.style.top = "-5%"; 
				mydiv.style.left = "0%";
				var mydiv = document.getElementById('masquePaupiereSupDroit');	
				mydiv.style.top = "-5%";
				mydiv.style.right = "0%";
				var mydiv = document.getEle
				var mydiv = document.getElementById('pupilleGauche');
				mydiv.style.top = "24%"; 
				mydiv.style.left = "10%"; 
				var mydiv = document.getElementById('pupilleDroit');	
				mydiv.style.top = "24%";
				mydiv.style.right = "10%";
				mydiv.style.transform = "scale(1,1)";
				var mydiv = document.getElementById('pupilleGauche');
				mydiv.style.transform = "scale(1,1)";
			}
			else if (mood == "happy3"){
			
				var mydiv = document.getElementById('masquePaupiereInfGauche');
				mydiv.style.bottom = "30%"; 
				var mydiv = document.getElementById('masquePaupiereInfDroit');	
				mydiv.style.bottom = "30%";
				var mydiv = document.getElementById('masquePaupiereSupGauche');
				mydiv.style.top = "-5%"; 
				mydiv.style.left = "0%";
				var mydiv = document.getElementById('masquePaupiereSupDroit');	
				mydiv.style.top = "-5%";
				mydiv.style.right = "0%";
				var mydiv = document.getEle
				var mydiv = document.getElementById('pupilleGauche');
				mydiv.style.top = "24%"; 
				mydiv.style.left = "10%"; 
				var mydiv = document.getElementById('pupilleDroit');	
				mydiv.style.top = "24%";
				mydiv.style.right = "10%";
				mydiv.style.transform = "scale(1,1)";
				var mydiv = document.getElementById('pupilleGauche');
				mydiv.style.transform = "scale(1,1)";
			}
			else if(mood == "neutral1"){
				
				var mydiv = document.getElementById('masquePaupiereInfGauche');
				mydiv.style.bottom = "5%"; 
				var mydiv = document.getElementById('masquePaupiereInfDroit');	
				mydiv.style.bottom = "5%";
				var mydiv = document.getElementById('masquePaupiereSupGauche');
				mydiv.style.top = "-5%"; 
				mydiv.style.left = "0%";				
				var mydiv = document.getElementById('masquePaupiereSupDroit');	
				mydiv.style.top = "-5%";
				mydiv.style.right = "0%";
				var mydiv = document.getElementById('pupilleGauche');
				mydiv.style.top = "30%"; 
				mydiv.style.left = "10%"; 
				var mydiv = document.getElementById('pupilleDroit');	
				mydiv.style.top = "30%";	
				mydiv.style.right = "10%";
				var mydiv = document.getElementById('pupilleDroit');
				mydiv.style.transform = "scale(1,1)";
				var mydiv = document.getElementById('pupilleGauche');
				mydiv.style.transform = "scale(1,1)";
			}
			else if(mood == "neutral2"){
				
				var mydiv = document.getElementById('masquePaupiereInfGauche');
				mydiv.style.bottom = "5%"; 
				var mydiv = document.getElementById('masquePaupiereInfDroit');	
				mydiv.style.bottom = "5%";
				var mydiv = document.getElementById('masquePaupiereSupGauche');
				mydiv.style.top = "-5%"; 
				mydiv.style.left = "0%";				
				var mydiv = document.getElementById('masquePaupiereSupDroit');	
				mydiv.style.top = "-5%";
				mydiv.style.right = "0%";
				var mydiv = document.getElementById('pupilleGauche');
				mydiv.style.top = "30%"; 
				mydiv.style.left = "10%"; 
				var mydiv = document.getElementById('pupilleDroit');	
				mydiv.style.top = "30%";	
				mydiv.style.right = "10%";
				var mydiv = document.getElementById('pupilleDroit');
				mydiv.style.transform = "scale(1,1)";
				var mydiv = document.getElementById('pupilleGauche');
				mydiv.style.transform = "scale(1,1)";
			}else if(mood == "neutral3"){
				
				var mydiv = document.getElementById('masquePaupiereInfGauche');
				mydiv.style.bottom = "5%"; 
				var mydiv = document.getElementById('masquePaupiereInfDroit');	
				mydiv.style.bottom = "5%";
				var mydiv = document.getElementById('masquePaupiereSupGauche');
				mydiv.style.top = "-5%"; 
				mydiv.style.left = "0%";				
				var mydiv = document.getElementById('masquePaupiereSupDroit');	
				mydiv.style.top = "-5%";
				mydiv.style.right = "0%";
				var mydiv = document.getElementById('pupilleGauche');
				mydiv.style.top = "30%"; 
				mydiv.style.left = "10%"; 
				var mydiv = document.getElementById('pupilleDroit');	
				mydiv.style.top = "30%";	
				mydiv.style.right = "10%";
				var mydiv = document.getElementById('pupilleDroit');
				mydiv.style.transform = "scale(1,1)";
				var mydiv = document.getElementById('pupilleGauche');
				mydiv.style.transform = "scale(1,1)";
			}
			else if (mood == "angry1") {
				var mydiv = document.getElementById('masquePaupiereInfGauche');
				mydiv.style.bottom = "5%"; 
				var mydiv = document.getElementById('masquePaupiereInfDroit');	
				mydiv.style.bottom = "5%";
				var mydiv = document.getElementById('masquePaupiereSupGauche');
				mydiv.style.top = "2%"; 
				mydiv.style.left = "0%";
				var mydiv = document.getElementById('masquePaupiereSupDroit');	
				mydiv.style.top = "2%";
				mydiv.style.right = "0%";
				var mydiv = document.getElementById('pupilleGauche');
				mydiv.style.top = "30%"; 
				mydiv.style.left = "10%"; 
				var mydiv = document.getElementById('pupilleDroit');	
				mydiv.style.top = "30%";
				mydiv.style.right = "10%";				
				var mydiv = document.getElementById('pupilleDroit');
				mydiv.style.transform = "scale(1,1)";
				var mydiv = document.getElementById('pupilleGauche');
				mydiv.style.transform = "scale(1,1)";
			}
			else if (mood == "angry2") {
				var mydiv = document.getElementById('masquePaupiereInfGauche');
				mydiv.style.bottom = "5%"; 
				var mydiv = document.getElementById('masquePaupiereInfDroit');	
				mydiv.style.bottom = "5%";
				var mydiv = document.getElementById('masquePaupiereSupGauche');
				mydiv.style.top = "9%"; 
				mydiv.style.left = "0%";
				var mydiv = document.getElementById('masquePaupiereSupDroit');	
				mydiv.style.top = "9%";
				mydiv.style.right = "0%";
				var mydiv = document.getElementById('pupilleGauche');
				mydiv.style.top = "30%"; 
				mydiv.style.left = "10%"; 
				var mydiv = document.getElementById('pupilleDroit');	
				mydiv.style.top = "30%";
				mydiv.style.right = "10%";				
				var mydiv = document.getElementById('pupilleDroit');
				mydiv.style.transform = "scale(1,1)";
				var mydiv = document.getElementById('pupilleGauche');
				mydiv.style.transform = "scale(1,1)";
			}
			else if (mood == "angry3") {
				var mydiv = document.getElementById('masquePaupiereInfGauche');
				mydiv.style.bottom = "5%"; 
				var mydiv = document.getElementById('masquePaupiereInfDroit');	
				mydiv.style.bottom = "5%";
				var mydiv = document.getElementById('masquePaupiereSupGauche');
				mydiv.style.top = "12%"; 
				mydiv.style.left = "0%";
				var mydiv = document.getElementById('masquePaupiereSupDroit');	
				mydiv.style.top = "12%";
				mydiv.style.right = "0%";
				var mydiv = document.getElementById('pupilleGauche');
				mydiv.style.top = "30%"; 
				mydiv.style.left = "10%"; 
				var mydiv = document.getElementById('pupilleDroit');	
				mydiv.style.top = "30%";
				mydiv.style.right = "10%";				
				var mydiv = document.getElementById('pupilleDroit');
				mydiv.style.transform = "scale(1,1)";
				var mydiv = document.getElementById('pupilleGauche');
				mydiv.style.transform = "scale(1,1)";
			}
			
			else if (mood == "sad1") {
				var mydiv = document.getElementById('masquePaupiereInfGauche');
				mydiv.style.bottom = "5%"; 
				var mydiv = document.getElementById('masquePaupiereInfDroit');	
				mydiv.style.bottom = "5%";
				var mydiv = document.getElementById('masquePaupiereSupGauche');
				mydiv.style.top = "2%"; 
				mydiv.style.left = "-5%";
				var mydiv = document.getElementById('masquePaupiereSupDroit');
				mydiv.style.top = "2%"; 
				mydiv.style.right = "-5%";
				var mydiv = document.getElementById('pupilleGauche');
				mydiv.style.top = "30%"; 
				mydiv.style.left = "10%"; 
				var mydiv = document.getElementById('pupilleDroit');	
				mydiv.style.top = "30%";
				mydiv.style.right = "10%";
				var mydiv = document.getElementById('pupilleDroit');
				mydiv.style.transform = "scale(1,1)";
				var mydiv = document.getElementById('pupilleGauche');
				mydiv.style.transform = "scale(1,1)";
			}
			else if (mood == "sad2") {
				var mydiv = document.getElementById('masquePaupiereInfGauche');
				mydiv.style.bottom = "5%"; 
				var mydiv = document.getElementById('masquePaupiereInfDroit');	
				mydiv.style.bottom = "5%";
				var mydiv = document.getElementById('masquePaupiereSupGauche');
				mydiv.style.top = "8%"; 
				mydiv.style.left = "-5%";
				var mydiv = document.getElementById('masquePaupiereSupDroit');
				mydiv.style.top = "8%"; 
				mydiv.style.right = "-5%";
				var mydiv = document.getElementById('pupilleGauche');
				mydiv.style.top = "30%"; 
				mydiv.style.left = "10%"; 
				var mydiv = document.getElementById('pupilleDroit');	
				mydiv.style.top = "30%";
				mydiv.style.right = "10%";
				var mydiv = document.getElementById('pupilleDroit');
				mydiv.style.transform = "scale(1,1)";
				var mydiv = document.getElementById('pupilleGauche');
				mydiv.style.transform = "scale(1,1)";
			}
			else if (mood == "surprise") {
				var mydiv = document.getElementById('masquePaupiereInfGauche');
				mydiv.style.bottom = "5%"; 
				var mydiv = document.getElementById('masquePaupiereInfDroit');	
				mydiv.style.bottom = "5%";
				var mydiv = document.getElementById('masquePaupiereSupGauche');
				mydiv.style.top = "-5%"; 
				mydiv.style.left = "0%";				
				var mydiv = document.getElementById('masquePaupiereSupDroit');	
				mydiv.style.top = "-5%";
				mydiv.style.right = "0%";
				var mydiv = document.getElementById('pupilleGauche');
				mydiv.style.top = "30%"; 
				mydiv.style.left = "10%"; 
				var mydiv = document.getElementById('pupilleDroit');	
				mydiv.style.top = "30%";	
				mydiv.style.right = "10%";
				var mydiv = document.getElementById('pupilleDroit');
				mydiv.style.transform = "scale(1.2,1.2)";
				var mydiv = document.getElementById('pupilleGauche');
				mydiv.style.transform = "scale(1.2,1.2)";;
			}


		setTimeout(eye,1000);
		changeCSS("css/" + mood +".css",1);

		document.getElementById("oeilGaucheCouleur").style.fill = color;
		document.getElementById("oeilDroitCouleur").style.fill = color;

	});
}
