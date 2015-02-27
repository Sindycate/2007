<?php

/**
 * nassat'
 *
 * @return void
 * @author iisus
 **/
function ajax()
{
	try
	{
		$db_get_question = database::$DBH->prepare(
			"SELECT `type`, `text`, `answer1`, `answer2`, `answer3`, `answer4`, `answer`
			 FROM `questions`
			 ORDER BY RAND()
			 LIMIT 1");
		$db_get_question->execute();

		echo json_encode($db_get_question->fetch(PDO::FETCH_ASSOC));
	}
	catch (PDOException $ee)
	{
		echo $ee;
	}

	/*
	$old_id = $_REQUEST['old_questi_id'];
	$answer = $_REQUEST['answer'];

	if (!empty($old_id) && !empty($answer))
	{
		try
		{
			$db_get_answer = database::$DBH->prepare(
				"SELECT `answer`
				 FROM `questions`
				 WHERE `id` = :id");
			$db_get_answer->bindValue(":id", $old_id);
			$db_get_answer->execute();

			if ($db_get_answer->rowCount() == 1)
			{
				$get_answer = $db_password_check->fetch();
				if ($answer == $get_answer[0])
				{

				}
			}
		}
		catch(PDOException $ee)
		{
			$data['error']['PDO'] = "Ошибка базы данных: " . $ee->getMessage();
		}
		// check from database for correct answer
	}

	*/
	// get new question
	// type id data
	// serialize and print
}

ajax();

 ?>