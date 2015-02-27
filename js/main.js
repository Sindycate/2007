jQuery.getJSON("./ajax", function(data) {
	jQuery("#question-text").text(data.text);
	jQuery("#answer1").text(data.answer1);
	jQuery("#answer2").text(data.answer2);
	jQuery("#answer3").text(data.answer3);
	jQuery("#answer4").text(data.answer4);
	console.log(data);
});