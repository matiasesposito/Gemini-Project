<?php
  include($_SERVER['DOCUMENT_ROOT'] . "/Gemini-Project/db/dataBase.php");

  class EvaluadorModel {
    private $db;

    public function __construct() {
      $this->db = new BaseDeDatos();
      $this->db->conectar();
    }

    public function getEvaluadores() {
      $result = $this->db->sql("SELECT * FROM evaluadores");
      return $result;
    }

    // public function getEvaluador($id) {
    //   $this->db->sql("SELECT * FROM evaluadores WHERE id = $id");
    //   return $this->db->getRecord();
    // }

    public function addEvaluador($nombre, $resumen) {
      $this->db->sql("INSERT INTO evaluadores (id,nombre, resumen) VALUES 
                     (DEFAULT,'$nombre', '$resumen')");
      
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
?>