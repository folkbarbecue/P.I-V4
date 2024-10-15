_cuid


<?php
include("conexao.php");
	$nome_cuid = $_POST['nome_cuid'];
	$cpf_cuid = $_POST['cpf_cuid'];
	$telefone_cuid = $_POST['telefone_cuid'];
	$cod_cuid = $_POST['cod_cuid'];
	$id_pac = $_POST['id_pac'];
	$restricao_pac = $_POST['restricao_pac'];



	$sql="INSERT INTO cuidadores(nome_cuid, cpf_cuid, telefone_cuid, cod_cuid, id_pac, restricao_pac)
	VALUES ('$nome_cuid', '$cpf_cuid', '$telefone_cuid', 
    '$cod_cuid', '$id_pac', '$restricao_pac')";
	if(mysqli_query($conexao, $sql)){
		header("Location: ../connect/retorno.php");
	}else{
		echo "Erro". mysqli_connect_error($conexao);
	}
	
	mysqli_close($conexao);
?>


