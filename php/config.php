<?php
define('PDO_CONNECT_HOST', 'mysql:host=localhost;dbname=2007;');
define('PDO_CONNECT_USER', 'root');
define('PDO_CONNECT_PASS', '');

// define('PDO_CONNECT_HOST', 'mysql:host=mysql87.1gb.ru;dbname=gb_rating;');
// define('PDO_CONNECT_USER', 'gb_rating');
// define('PDO_CONNECT_PASS', '0124321a34');

$PDO_UTF8 = array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES `utf8`');
define('PDO_UTF', 'return ' . var_export($PDO_UTF8, 1) . ';');


// define('MY_SESSION_PATH', '/home/compare/www/sessions');
// define('MY_SESSION_PATH', '/home/a8593548/public_html/sessions');

function SQL_Error($STH)
{
	if ($STH->errorCode() != '00000')
	{
		$error_array = $STH->errorInfo();
		echo "SQL ошибка: " . $error_array[2];
	}
}

class database
{
	static public $DBH;

	function __construct()
	{
		try
		{
			self::$DBH = new PDO(PDO_CONNECT_HOST,PDO_CONNECT_USER,PDO_CONNECT_PASS,eval(PDO_UTF));
			self::$DBH->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		}
		catch (PDOException $e)
		{
			echo $e->getMessage();
		}
	}
}

new database();

?>