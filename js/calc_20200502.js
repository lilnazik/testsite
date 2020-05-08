function calcthis(a) { 
	var perc = document.getElementById("percent").value;
	var planperc=new Array(0,0,0,0,0,0);
	var depo = document.getElementById("deposit").value;
	var min; var max;
if (perc == "perc1") {
	planperc=130; min=10; max=25000;
	if (depo > max) { 
		document.getElementById("inpvar").innerHTML = "<h6 style=\"color:red;font-weight:bold;text-transorm:uppercase\">Maximal deposit is $"+ max +"</h6>";	
		depo = max;
	}
	if (depo < min) { 
		document.getElementById("inpvar").innerHTML = "<h6 style=\"color:red;font-weight:bold;text-transorm:uppercase\">Minimal deposit is $" +min +"</h6>";	
		depo = min;
	}
	document.getElementById("inpvar1").innerHTML = " ("+ planperc + "%)";
	document.getElementById("inpvar2").innerHTML = "<h4 style=\"margin-top:30px;margin-bottom:0px\" class=\"themecolor upperc\">Calculation Result</h4><b>Amount:</b> $"+ depo +"<br><b>Daily returns:</b> $"+ depo * 1.5 / 100 +"<br><b>Final Returns:</b> $"+planperc * depo / 100;
	document.getElementById("inpvar3").innerHTML = "<br>Everyday accruals during 20 business days";
}
if (perc == "perc2") {
	planperc=170; min=25000; max=100000;
	if (depo > max) { 
		document.getElementById("inpvar").innerHTML = "<h6 style=\"color:red;font-weight:bold;text-transorm:uppercase\">Maximal deposit is $"+ max +"</h6>";	
		depo = max;
	}
	if (depo < min) { 
		document.getElementById("inpvar").innerHTML = "<h6 style=\"color:red;font-weight:bold;text-transorm:uppercase\">Minimal deposit is $" +min +"</h6>";	
		depo = min;
	}
	document.getElementById("inpvar1").innerHTML = " ("+ planperc + "%)";
	document.getElementById("inpvar2").innerHTML = "<h4 style=\"margin-top:30px;margin-bottom:0px\" class=\"themecolor upperc\">Calculation Result</h4><b>Amount:</b> $"+ depo +"<br><b>Daily returns:</b> $"+ depo * 2.0 / 100 +"<br><b>Final Returns:</b> $"+planperc * depo / 100;
	document.getElementById("inpvar3").innerHTML = "<br>Everyday accruals during 35 business days";
}
if (perc == "perc3") {
	planperc=237.5; min=50000; max=300000;
	if (depo > max) { 
		document.getElementById("inpvar").innerHTML = "<h6 style=\"color:red;font-weight:bold;text-transorm:uppercase\">Maximal deposit is $"+ max +"</h6>";	
		depo = max;
	}
	if (depo < min) { 
		document.getElementById("inpvar").innerHTML = "<h6 style=\"color:red;font-weight:bold;text-transorm:uppercase\">Minimal deposit is $" +min +"</h6>";	
		depo = min;
	}
	document.getElementById("inpvar1").innerHTML = " ("+ planperc + "%)";
	document.getElementById("inpvar2").innerHTML = "<h4 style=\"margin-top:30px;margin-bottom:0px\" class=\"themecolor upperc\">Calculation Result</h4><b>Amount:</b> $"+ depo +"<br><b>Daily returns:</b> $"+ depo * 2.5 / 100 +"<br><b>Final Returns:</b> $"+planperc * depo / 100;
	document.getElementById("inpvar3").innerHTML = "<br>Everyday accruals during 55 business days";
}
if (perc == "perc4") {
	planperc=650; min=5000; max=30000;
	if (depo > max) { 
		document.getElementById("inpvar").innerHTML = "<h6 style=\"color:red;font-weight:bold;text-transorm:uppercase\">Maximal deposit is $"+ max +"</h6>";	
		depo = max;
	}
	if (depo < min) { 
		document.getElementById("inpvar").innerHTML = "<h6 style=\"color:red;font-weight:bold;text-transorm:uppercase\">Minimal deposit is $" +min +"</h6>";	
		depo = min;
	}
}
if (perc == "perc5") {
	planperc=1500; min=2500; max=15000;
	if (depo > max) { 
		document.getElementById("inpvar").innerHTML = "<h6 style=\"color:red;font-weight:bold;text-transorm:uppercase\">Maximal deposit is $"+ max +"</h6>";	
		depo = max;
	}
	if (depo < min) { 
		document.getElementById("inpvar").innerHTML = "<h6 style=\"color:red;font-weight:bold;text-transorm:uppercase\">Minimal deposit is $" +min +"</h6>";	
		depo = min;
	}
}
if (perc == "perc6") {
	planperc=3000; min=1000; max=10000;
	if (depo > max) { 
		document.getElementById("inpvar").innerHTML = "<h6 style=\"color:red;font-weight:bold;text-transorm:uppercase\">Maximal deposit is $"+ max +"</h6>";	
		depo = max;
	}
	if (depo < min) { 
		document.getElementById("inpvar").innerHTML = "<h6 style=\"color:red;font-weight:bold;text-transorm:uppercase\">Minimal deposit is $" +min +"</h6>";	
		depo = min;
	}
}
if (perc == "perc7") {
	planperc=560; min=20000; max=100000;
	if (depo > max) { 
		document.getElementById("inpvar").innerHTML = "<h6 style=\"color:red;font-weight:bold;text-transorm:uppercase\">Maximal deposit is $"+ max +"</h6>";	
		depo = max;
	}
	if (depo < min) { 
		document.getElementById("inpvar").innerHTML = "<h6 style=\"color:red;font-weight:bold;text-transorm:uppercase\">Minimal deposit is $" +min +"</h6>";	
		depo = min;
	}
}
if (perc == "perc8") {
	planperc=1600; min=10000; max=50000;
	if (depo > max) { 
		document.getElementById("inpvar").innerHTML = "<h6 style=\"color:red;font-weight:bold;text-transorm:uppercase\">Maximal deposit is $"+ max +"</h6>";	
		depo = max;
	}
	if (depo < min) { 
		document.getElementById("inpvar").innerHTML = "<h6 style=\"color:red;font-weight:bold;text-transorm:uppercase\">Minimal deposit is $" +min +"</h6>";	
		depo = min;
	}
}
if (perc == "perc9") {
	planperc=6500; min=500; max=7500;
	if (depo > max) { 
		document.getElementById("inpvar").innerHTML = "<h6 style=\"color:red;font-weight:bold;text-transorm:uppercase\">Maximal deposit is $"+ max +"</h6>";	
		depo = max;
	}
	if (depo < min) { 
		document.getElementById("inpvar").innerHTML = "<h6 style=\"color:red;font-weight:bold;text-transorm:uppercase\">Minimal deposit is $" +min +"</h6>";	
		depo = min;
	}
}
if (perc == "perc10") {
	planperc=16000; min=500; max=10000;
	if (depo > max) { 
		document.getElementById("inpvar").innerHTML = "<h6 style=\"color:red;font-weight:bold;text-transorm:uppercase\">Maximal deposit is $"+ max +"</h6>";	
		depo = max;
	}
	if (depo < min) { 
		document.getElementById("inpvar").innerHTML = "<h6 style=\"color:red;font-weight:bold;text-transorm:uppercase\">Minimal deposit is $" +min +"</h6>";	
		depo = min;
	}
}
if (depo < min) {
	document.getElementById("inpvar1").innerHTML = "n/a</span>";
	document.getElementById("inpvar2").innerHTML = "<span class=\"upperc\" style=\"margin:15px 5px;display:inline-block;font-size:110%\">n/a";						
	alert ("Minimal deposit is $"+min);	
} else
	if (depo > max) {
		document.getElementById("inpvar1").innerHTML = "n/a</span>";
		document.getElementById("inpvar2").innerHTML = "<span class=\"upperc\" style=\"margin:15px 5px;display:inline-block;font-size:110%\">n/a";						
		alert ("Maximal deposit is $"+max);	
  	} else {
				if((perc == "perc4") || (perc == "perc5") || (perc == "perc6") || (perc == "perc7") || (perc == "perc8") || (perc == "perc9") || (perc == "perc10")){
		  			document.getElementById("inpvar1").innerHTML = " ("+ planperc + "%)<br>includes your principal";
					document.getElementById("inpvar2").innerHTML = "<h4 style=\"margin-top:30px;margin-bottom:0px\" class=\"themecolor upperc\">Calculation Result</h4><b>Amount:</b> $"+ depo +"<br><b>Final Returns:</b> $"+planperc * depo / 100;
					if(perc == "perc4"){document.getElementById("inpvar3").innerHTML = "<br>After 35 business days";}
					if(perc == "perc5"){document.getElementById("inpvar3").innerHTML = "<br>After 55 business days";}
					if(perc == "perc6"){document.getElementById("inpvar3").innerHTML = "<br>After 70 business days";}
					if(perc == "perc7"){document.getElementById("inpvar3").innerHTML = "<br>After 20 business days";}
					if(perc == "perc8"){document.getElementById("inpvar3").innerHTML = "<br>After 35 business days";}
					if(perc == "perc9"){document.getElementById("inpvar3").innerHTML = "<br>After 100 business days";}
					if(perc == "perc10"){document.getElementById("inpvar3").innerHTML = "<br>After 160 business days";}
				}
	}

}