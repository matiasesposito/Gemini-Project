<?php
  try{
  include("evaluador_model.php");
  $datos = json_decode(file_get_contents("php://input"), true);
  $nombreCompleto = $datos["nombreCompleto"];

  $evaluadorModel = new EvaluadorModel();
  $duplicados = $evaluadorModel->getDuplicados($nombreCompleto);
  echo json_encode(["arrayDuplicados" => $duplicados]);
  }catch(Exception $e){
    echo json_encode(["error" => $e->getMessage()]);
  }
?>