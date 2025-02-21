<?php
try {
  include("evaluador_model.php");
  $evaluador = new EvaluadorModel();
  $array = $evaluador->getNombreEvaluadores();

  echo json_encode(array("status" => 1, "array" => $array));
} catch (Exception $e) {
  echo json_encode(array("status" => 0, "message" => "Error al intentar obtener los evaluadores", "error" => $e->getMessage()));
}
