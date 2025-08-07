<?php

require_once "./interfaces/Ivalidate.php";

class  OpinionValidator implements IValidate
{

    public static function validateID(string $id): array
    {
        $errors = [];

        if (empty(trim($id))) {
            $errors["required"] = "El id es requerido.";
        }
        if (!is_numeric($id)) {
            $errors["is_numeric"] = "El id debe ser un número entero.";
        }

        $idParsed = (int) $id;
        if ($idParsed <= 0) {
            $errors["is_range"] = "El id debe ser un número válido.";
        }

        return [
            'isValid' => empty($errors),
            'value'   => $idParsed,
            'errors'  => $errors,
        ];
    }
    public static function validateUsername(string $username): array
    {
        $errors = [];

        if (empty(trim($username))) {
            $errors["required"] = "El nombre de usuario es requerido.";
        }
        if (is_numeric($username)) {
            $errors["is_numeric"] = "El nombre de usuario no puede ser únicamente numérico.";
        }
        if (!preg_match("/^[a-zA-Z0-9_\-.]{3,20}$/", $username)) {
            $errors["is_match"] = "El nombre de usuario contiene caracteres inválidos.";
        }

        return [
            'isValid' => empty($errors),
            'value'   => htmlspecialchars($username),
            'errors'  => $errors,
        ];
    }

    public static function validateMessage(string $message): array
    {
        $errors = [];
        if (strlen(trim($message)) > 500) {
            $errors["max_size"] = "El mensaje no puede exceder los 500 caracteres.";
        }
        if (empty($message)) {
            $errors["required"] = "El mensaje es requerido.";
        }
        if (is_numeric($message)) {
            $errors["is_numeric"] = "El mensaje no puede ser únicamente numérico.";
        }
        if (!preg_match('/^[\p{L}\p{N}\sáéíóúÁÉÍÓÚñÑ¡!¿?.,;:"\'()\-—–@#$%&+=*\/\\[\]{}]{1,500}$/u', $message)) {
            $errors["is_match"] = "El mensaje contiene carcteres inválidos.";
        }

        return [
            'isValid' => empty($errors),
            'value'   => htmlspecialchars($message, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8'),
            'errors'  => $errors,
        ];
    }

    public static function validateEmptyFields(array $fields): array
    {
        $count = 0;
        foreach ($fields as $field) {
            if (empty($field)) {
                $count++;
            }
        }
        return [
            'isValid' => $count !== 3,
            'error'  => "Todos los campos son requeridos"
        ];
    }
}
