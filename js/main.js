"use strict";

var $btns         = jQuery(".btn-choice"),
    $answer1      = jQuery("#answer1"),
    $answer2      = jQuery("#answer2"),
    $answer3      = jQuery("#answer3"),
    $answer4      = jQuery("#answer4"),
    $questionNum  = jQuery("#question-num"),
    $questionText = jQuery("#question-text"),
    $getBack      = jQuery("#get-back"),
    $mainFrame    = jQuery("#main-frame");

function createOnclick(value) {
	return function() {
		jQuery.getJSON("./ajax?answer=" + value, function(data) {
			$questionText.html(data.text);
			$answer1.html(data.answer1);
			$answer2.html(data.answer2);
			if (!data.answer3) {
				$answer3.parent().hide();
				$answer4.parent().hide();
			} else {
				$answer3.parent().show();
				$answer4.parent().show();
				$answer3.html(data.answer3);
				$answer4.html(data.answer4);
			}
			$questionNum.text(parseInt($questionNum.text())+1);
			console.log(data);
		});
	};
}

$getBack.click(function() {
	jQuery.get("./flashback?ajax=1", function(data) {
		// console.log(data);
		$mainFrame.html(data);
		setTimeout(function() { init(); }, 500);
	});
});

function init() {
	$btns         = jQuery(".btn-choice");
	$answer1      = jQuery("#answer1");
	$answer2      = jQuery("#answer2");
	$answer3      = jQuery("#answer3");
	$answer4      = jQuery("#answer4");
	$questionNum  = jQuery("#question-num");
	$questionText = jQuery("#question-text");
	for (var ii = 1; ii <= $btns.length; ii++) {
		$btns[ii-1].onclick = createOnclick(ii);
	}
}