var $btns = jQuery(".btn-choice"),
    $answer1 = jQuery("#answer1"),
    $answer2 = jQuery("#answer2"),
    $answer3 = jQuery("#answer3"),
    $answer4 = jQuery("#answer4"),
    $questionNum = jQuery("#question-num"),
    $questionText = jQuery("#question-text");

function createOnclick(value) {
	return function() {
		jQuery.getJSON("./ajax?answer=value", function(data) {
			$questionText.html(data.text);
			$answer1.html(data.answer1);
			$answer2.html(data.answer2);
			$answer3.html(data.answer3);
			$answer4.html(data.answer4);
			$questionNum.text(parseInt($questionNum.text())+1);
			console.log(data);
		});
	};
}

for (var ii = 1; ii <= $btns.length; ii++) {
	$btns[ii-1].onclick = createOnclick(ii);
}
