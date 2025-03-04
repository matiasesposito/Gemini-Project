<?php
try {
  $datos = json_decode(file_get_contents("php://input"), true);
  $datos = $datos["datosEvaluador"];

  $nombre = $datos["nombre"];
  $dni = $datos["dni"];
  $fecha_nacimiento = $datos["fecha_nacimiento"];
  $correo_electronico = $datos["correo_electronico"];
  $ciudad_provincia = $datos["ciudad_provincia"];
  $instituciones_empresas = $datos["instituciones_empresas"];
  $perfiles_especialidades = $datos["perfiles_especialidades"];
  $blob = $datos["blob"];

  include("evaluador_model.php");
  $evaluadorModel = new EvaluadorModel();
  $result = $evaluadorModel->insertEvaluador($nombre, $dni, $fecha_nacimiento, $correo_electronico, $ciudad_provincia, $instituciones_empresas, $perfiles_especialidades, $blob);


  if($result==1){
    echo json_encode(array("status" => 1, "message" => "Evaluador agregado correctamente"));
  }else{
    echo json_encode(array("status" => 0, "message" => "Error al agregar evaluador"));
  }
} catch (Exception $e) {
  echo json_encode(array("status" => 0, "message" => "Error al agregar evaluador", "error" => $e->getMessage()));
}
