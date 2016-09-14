<?php 

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$db = new SQLite3("data.db");
$db->exec("CREATE TABLE IF NOT EXISTS task (
	id INTEGER PRIMARY KEY AUTOINCREMENT, 
	passphrase TEXT, 
	tasks TEXT
)");

// Read from db
if ($_POST['method'] == 'load') {
	$q = $db->query("SELECT * FROM task WHERE passphrase ='" . $_POST['passphrase'] . "'");
	$row = $q->fetchArray();
	echo $row['tasks'];
}

// Write to db
if ($_POST['method'] == 'save') {
	$passphrase = $_POST['passphrase'];
	$tasks = $_POST['tasks'];

	// Check if present
	$q = $db->query("SELECT * FROM task WHERE passphrase = '" . $passphrase . "'");
	$row = $q->fetchArray();

	if ($row) {
		$db->exec("UPDATE task SET passphrase='$passphrase', tasks='$tasks' WHERE passphrase='$passphrase'");
		echo "Updated";
	} else {
		$db->exec("INSERT INTO task (passphrase, tasks) VALUES ('$passphrase','$tasks')");
		echo "Saved";
	}
}

?>