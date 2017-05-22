$( document ).ready(function() {
$('#input-celsius').val("0");
$('#input-fahrenheit').val("32");
$('#input-fahrenheit').keyup(function() {

	this.value = this.value.replace(/[^0-9\.-]/g,'');
	var fahrenheit = parseInt($(this).val());
	if (fahrenheit !== '') {
	var fahrenheitToCelsius = ((fahrenheit - 32) / 9) * 5;

	if (fahrenheitToCelsius <= 0) {
	$('#input-celsius').css('border' , 'solid 15px #07C2C6');
	$('#input-celsius').val(fahrenheitToCelsius.toFixed(0));
	}

	else if (fahrenheitToCelsius > 0 && fahrenheitToCelsius < 50){
	$('#input-celsius').css('border' , 'solid 15px #A2DB7F');
	$('#input-celsius').val(fahrenheitToCelsius.toFixed(0));
	
	}

	else {
	$('#input-celsius').css('border' , 'solid 15px #FD3D45');
	$('#input-celsius').val(fahrenheitToCelsius.toFixed(0));	
	}
	}

})

$('#input-celsius').keyup(function() {

	this.value = this.value.replace(/[^0-9\.-]/g,'');
	var celsius = parseInt($(this).val());
	if (celsius !== '') {
	var celsiusToFahrenheit = ((celsius * 9) / 5) + 32;

	if (celsiusToFahrenheit <= 32) {
	$('#input-fahrenheit').css('border' , 'solid 15px #07C2C6');	
	$('#input-fahrenheit').val(celsiusToFahrenheit.toFixed(0));
	}

	else if (celsiusToFahrenheit > 32 && celsiusToFahrenheit < 100){
	$('#input-fahrenheit').css('border' , 'solid 15px #A2DB7F');	
	$('#input-fahrenheit').val(celsiusToFahrenheit.toFixed(0));
	}


	else {
	$('#input-fahrenheit').css('border' , 'solid 15px #FD3D45');	
	$('#input-fahrenheit').val(celsiusToFahrenheit.toFixed(0));
	
	}

	}
	


})




});
