var btns = jQuery(".btn-choice");

function createOnclick(value) {
	return function() {
			jQuery.getJSON("./ajax", function(data) {
			jQuery("#question-text").html(data.text);
			jQuery("#answer1").html(data.answer1);
			jQuery("#answer2").html(data.answer2);
			jQuery("#answer3").html(data.answer3);
			jQuery("#answer4").html(data.answer4);
			console.log(data);
		});
	};
}

for (var ii = 1; ii <= btns.length; ii++) {
	btns[ii-1].onclick = createOnclick(ii);
}
