<?
$arr = array('state' => 'success','name' => $_POST["name"], 'age' => $_POST["age"], 'age1' => $_REQUEST["age"]);

echo json_encode($arr);