<?php 

// ini_set('display_errors', 1);
// ini_set('display_startup_errors', 1);
// error_reporting(E_ALL);

if ($_POST || $_GET && $_GET['callback']) {

	$db = new SQLite3("data.db");
	$db->exec("CREATE TABLE IF NOT EXISTS task (
		id INTEGER PRIMARY KEY AUTOINCREMENT, 
		passphrase TEXT, 
		tasks TEXT
	)");

	$method = ($_POST) ? $_POST['method'] : $_GET['method'];
	$passphrase = ($_POST) ? $_POST['passphrase'] : $_GET['passphrase'];

	// Read from db
	if ($method == 'load') {
		$q = $db->query("SELECT * FROM task WHERE passphrase ='" . $passphrase . "'");
		$row = $q->fetchArray();
		echo ($_POST) ? $row['tasks'] : $_GET['callback'] . '(' . $row['tasks'] . ')';
	}

	// Write to db
	if ($method == 'save') {
		$tasks = ($_POST) ? $_POST['tasks'] : $_GET['tasks'];

		// Check if present
		$q = $db->query("SELECT * FROM task WHERE passphrase = '" . $passphrase . "'");
		$row = $q->fetchArray();

		if ($row) {
			$db->exec("UPDATE task SET passphrase='$passphrase', tasks='$tasks' WHERE passphrase='$passphrase'");
			echo ($_POST) ? "Updated" : $_GET['callback'] . '({"status" : "Updated"})';
		} else {
			$db->exec("INSERT INTO task (passphrase, tasks) VALUES ('$passphrase','$tasks')");
			echo ($_POST) ? "Saved" : $_GET['callback'] . '({"status" : "Saved"})';
		}
	}

} else {

	header("Location: /");
	exit;

}

?>