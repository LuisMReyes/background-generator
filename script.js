var css = document.querySelector("h3");
var Color1 = document.querySelector(".color1");
var Color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

Color1.addEventListener("input", SetNewColor);
Color2.addEventListener("input", SetNewColor);



function SetNewColor()
{
	body.style.background = "linear-gradient(to right, " + 
	Color1.value + 
	", " + 
	Color2.value +
	")";

	css.textContent = body.style.background + ";";
}


