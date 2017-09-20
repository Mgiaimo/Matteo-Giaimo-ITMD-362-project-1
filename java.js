function button()
{
   alert("Submit button clicked!");
   return true;
}

function bigtext()
{
	var fnam= document.getElementById("firstName");
	fnam.value = fnam.value.toUpperCase();

	var lnam= document.getElementById("lastName");
	lnam.value = lnam.value.toUpperCase();

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