<?php
$servername = "localhost";
$username = "root";
$password = "2009Luc@s"; // Atualize conforme necessário
$dbname = "lucas"; // Nome do banco de dados

// Cria a conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}
?>
