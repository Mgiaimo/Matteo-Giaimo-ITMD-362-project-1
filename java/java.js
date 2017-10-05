function button()
{
   alert("I WISH YOU GOOD FORTUNE IN THE WARS TO COME!");
   return true;
}

function bigtext()
{
	var fnam= document.getElementById("firstName");
	fnam.value = fnam.value.toUpperCase();

	var lnam= document.getElementById("lastName");
	lnam.value = lnam.value.toUpperCase();

	var adr= document.getElementById("adress");
	adr.value = adr.value.toUpperCase();

	var cit= document.getElementById("city");
	cit.value = cit.value.toUpperCase();

	var sta= document.getElementById("state");
	sta.value = sta.value.toUpperCase();

	var count= document.getElementById("country");
	count.value = count.value.toUpperCase();



}

function highlight(textB) {
    textB.style.background = "yellow";
}

function dragon() 
{
    document.getElementById('myimage').src = "images-for-project/gotB1.jpg";
}
function nightking() {
    document.getElementById('myimage').src = "images-for-project/nightP.jpg";
}