$( document ).ready(function() {
$('.input-celsius').val("0");
$('.input-fahrenheit').val("32");
$('.input-fahrenheit').keyup(function() {

	this.value = this.value.replace(/[^0-9\.-]/g,'');
	var fahrenheit = parseInt($(this).val());
	if (fahrenheit !== '') {
	$('.input-celsius').removeClass('cold warm hot');
	var fahrenheitToCelsius = ((fahrenheit - 32) / 9) * 5;

	if (fahrenheitToCelsius <= 0) {
	$('.input-celsius').addClass('cold').val(fahrenheitToCelsius.toFixed(0));
	// $('.input-celsius').val(fahrenheitToCelsius.toFixed(0));
	}

	else if (fahrenheitToCelsius > 0 && fahrenheitToCelsius < 50){
	$('.input-celsius').addClass('warm').val(fahrenheitToCelsius.toFixed(0));
	// $('.input-celsius').val(fahrenheitToCelsius.toFixed(0));
	
	}

	else if (fahrenheitToCelsius > 50) {
	$('.input-celsius').addClass('hot').val(fahrenheitToCelsius.toFixed(0));
	// $('.input-celsius').val(fahrenheitToCelsius.toFixed(0));	
	}

	else {
	$('.input-celsius').addClass('input-celsius');
	$('.input-celsius').val('0');
	}
	}

})

$('.input-celsius').keyup(function() {

	this.value = this.value.replace(/[^0-9\.-]/g,'');
	var celsius = parseInt($(this).val());
	if (celsius !== '') {
	$('.input-celsius').removeClass('cold warm hot');
	var celsiusToFahrenheit = ((celsius * 9) / 5) + 32;

	if (celsiusToFahrenheit <= 32) {
	$('.input-fahrenheit').addClass('cold').val(celsiusToFahrenheit.toFixed(0));

	}

	else if (celsiusToFahrenheit > 32 && celsiusToFahrenheit < 100){
	$('.input-fahrenheit').addClass('warm').val(celsiusToFahrenheit.toFixed(0));

	}

	else if (celsiusToFahrenheit >= 100){
	$('.input-fahrenheit').addClass('hot').val(celsiusToFahrenheit.toFixed(0));

	}


	else {
	$('.input-fahrenheit').addClass('input-celsius');
	$('.input-fahrenheit').val('0');
	}

	}
	


})




});
