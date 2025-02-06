<?php
try {
  $datos = json_decode(file_get_contents("php://input"), true);
  $datos = $datos["datosEvaluador"];

  $nombre = $datos["nombre"];
  $resumen = $datos["resumen"];

  $blob = $datos["blob"];

  include("evaluador_model.php");
  $evaluador = new EvaluadorModel();
  $evaluador->insertEvaluador($nombre, $resumen, $blob);


  echo json_encode(array("status" => 1, "message" => "Evaluador agregado correctamente"));
} catch (Exception $e) {
  echo json_encode(array("status" => 0, "message" => "Error al agregar evaluador", "error" => $e->getMessage()));
}
