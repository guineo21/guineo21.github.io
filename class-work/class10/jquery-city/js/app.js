// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked
$('#first').click(function(){
	var first = $('#first').attr('src');
	$('#bigimage').attr('src', first)

})

$('#second').click(function(){
	var second = $('#second').attr('src');
	$('#bigimage').attr('src', second)

})

$('#third').click(function(){
	var third = $('#third').attr('src');
	$('#bigimage').attr('src', third)

})

$('#fourth').click(function(){
	var fourth = $('#fourth').attr('src');
	$('#bigimage').attr('src', fourth);

})
