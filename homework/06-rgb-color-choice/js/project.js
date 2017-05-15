// 1. Use document.getElementById() and assign the .onclick event to #color-button
var colorSwitcher = document.getElementById('color-button').onclick = changeColor;

// 2. Write a function, named changeColor, that is called when #color-button is clicked

function changeColor() {
	var colorRed = parseInt(document.getElementById('red').value);
	var colorGreen = parseInt(document.getElementById('green').value);
	var colorBlue = parseInt(document.getElementById('blue').value);
	// console.log(colorRed + colorGreen + colorBlue);
	if (colorRed <= 255 && colorGreen <= 255 && colorBlue <= 255) {
	var colorStr = colorRed + ',' + colorGreen + ',' + colorBlue;
	var colorVal = ('rgb(' + colorStr + ')');
	document.getElementById('colorful-text').innerHTML = colorVal;
	document.getElementById('wrapper').style.background = colorVal;
	document.getElementById('red').style.borderColor = ('rgb(' + colorRed + ',' + '0' + ',' + '0' + ')');
	document.getElementById('green').style.borderColor = ('rgb(' + '0'+ ',' + colorGreen + ',' + '0' + ')');
	document.getElementById('blue').style.borderColor = ('rgb(' + '0' + ',' + '0' + ',' + colorBlue + ')');

	}

	else {
		alert("Please check values. Must be lower than 255");
	}
	
}
// 3. Inside of the function changeColor, use variables to store the <input> values from #red, #green, and #blue
// - Use .value to get the values from the inputs
// HINT: var red = document.getElementById('red').value;

// 4. Create a variable, named colorStr, which concatenates the above red, green, and blue variables into the format:
// rgb(x, y, z)
// - If the user enters: 100, 150, and 200, colorStr should be: rgb(100, 150, 200)

// 5. Use .innerHTML to change the text inside of #colorful-text to colorStr

// 6. Use .style.background to change the background of #wrapper to colorStr
