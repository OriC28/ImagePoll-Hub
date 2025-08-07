<?php

interface IValidate
{
    public static function validateID(string $id): array;
    public static function validateUsername(string $text): array;
    public static function validateMessage(string $text): array;
    public static function validateEmptyFields(array $fields): array;
}
