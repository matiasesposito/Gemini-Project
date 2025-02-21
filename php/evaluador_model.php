<?php
include($_SERVER['DOCUMENT_ROOT'] . "/Gemini-Project/db/dataBase.php");

class EvaluadorModel
{
  private $db;

  public function __construct()
  {
    $this->db = new BaseDeDatos();
    $this->db->conectar();
  }

  public function getEvaluadores()
  {
    $result = $this->db->sql("SELECT nombre,dni,fecha_nacimiento,ciudad_provincia,instituciones_empresas,perfiles_especialidades FROM evaluadores");
    return $result;
  }

  public function getNombreEvaluadores(){
    $result = $this->db->sql("SELECT nombre FROM evaluadores");
    return $result;
  }

  public function insertEvaluador($nombre, $dni, $fecha_nacimiento, $correo_electronico, $ciudad_provincia, $instituciones_empresas, $perfiles_especialidades, $blob)
  {
    try {

      $nombre == "" ? $nombre = "NULL" : $nombre = "'" . $nombre . "'";
      $dni == "" ? $dni = "NULL" : $dni = "'" . $dni . "'";
      $fecha_nacimiento == "" ? $fecha_nacimiento = "NULL" : $fecha_nacimiento = "'" . $fecha_nacimiento . "'";
      $correo_electronico == "" ? $correo_electronico = "NULL" : $correo_electronico = "'" . $correo_electronico . "'";
      $ciudad_provincia == "" ? $ciudad_provincia = "NULL" : $ciudad_provincia = "'" . $ciudad_provincia . "'";
      $instituciones_empresas == "" ? $instituciones_empresas = "NULL" : $instituciones_empresas = "'" . $instituciones_empresas . "'";
      $perfiles_especialidades == "" ? $perfiles_especialidades = "NULL" : $perfiles_especialidades = "'" . $perfiles_especialidades . "'";
      $blob == "" ? $blob = "NULL" : $blob = "'" . $blob . "'";

      $sql = "INSERT INTO evaluadores (id, nombre, dni, fecha_nacimiento, correo_electronico, ciudad_provincia, instituciones_empresas, perfiles_especialidades, dataPdf) VALUES 
                    (DEFAULT, $nombre, $dni, $fecha_nacimiento, $correo_electronico, $ciudad_provincia, $instituciones_empresas, $perfiles_especialidades, $blob)";


      $this->db->sql($sql);
      return 1;
    } catch (Exception $e) {
      return 0;
    }
  }

  // public function updateEvaluador($id, $nombre, $apellido, $email, $telefono) {
  //   $this->db->sql("UPDATE evaluador SET nombre = '$nombre', apellido = '$apellido', email = '$email', telefono = '$telefono' WHERE id = $id");
  //   return $this->db->execute();
  // }

  // public function deleteEvaluador($id) {
  //   $this->db->sql("DELETE FROM evaluador WHERE id = $id");
  //   return $this->db->execute();
  // }
}
