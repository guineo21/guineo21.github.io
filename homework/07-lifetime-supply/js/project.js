var result = document.getElementById('click-me').onclick = lifeTimeCups;

function lifeTimeCups(){
	var age = document.getElementById('age').value;
	var maxAge = document.getElementById('max-age').value;
	var item = document.getElementById('item').value;
	var numPerDay = document.getElementById('num-per-day').value;

	if (maxAge > age) {
	var cupsResult = (maxAge - age) * (numPerDay * 365);

	document.getElementById('solution').innerHTML = cupsResult;
	document.getElementById('drink').innerHTML = item;
	}	

	else {
		alert('Your maximum age must be higher than your age')
	}
}
