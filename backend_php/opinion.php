<?php

require_once "./validation.php";

header('Access-Control-Allow-Origin: *'); // Allow requests from any origin
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');


/**This file is responsible for managing the feedback form. */
class Opinion
{
    private string $id;
    private string $username;
    private string $message;

    public function __construct() {}

    public function getId()
    {
        return $this->id;
    }

    public function getUsername()
    {
        return $this->username;
    }

    public function getMessage()
    {
        return $this->message;
    }

    public function setId(string $id)
    {
        $result = OpinionValidator::validateID($id);
        if (!$result["isValid"]) {
            print_r($result['errors']);
        } else {
            print_r($result['errors']);
            $this->id = $id;
        }
    }

    public function setUsername(string $username)
    {
        $result = OpinionValidator::validateUsername($username);
        if (!$result["isValid"]) {
            print_r($result['errors']);
        } else {
            print_r($result['errors']);
            $this->username = $username;
        }
    }

    public function setMessage(string $message)
    {
        $result = OpinionValidator::validateMessage($message);
        if (!$result["isValid"]) {
            print_r($result['errors']);
        } else {
            print_r($result['errors']);
            $this->message = $message;
        }
    }
}


$are_empty = OpinionValidator::validateEmptyFields($_POST);

$opinion = new Opinion();
$opinion->setId($_POST["id"]);
$opinion->setUsername(($_POST["username"]));
$opinion->setMessage($_POST["message"]);
