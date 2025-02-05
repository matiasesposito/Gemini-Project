<?php
	include("conexion.php");
    Class BaseDeDatos{
        private $db;
        public $error;
        private $host;
        private $user;
        private $pass;
        private $base;


		public function __construct($host = null, $user = null , $pass = null, $base = null){
      if ($host == null && $user == null && $pass == null && $base == null) {
				$this->host = SERVIDOR;
        $this->user = USUARIO;
        $this->pass = PASS;
        $this->base = DBNAME;
			}else{
        $this->host = $host;
        $this->user = $user;
        $this->pass = $pass;
        $this->base = $base;
      }
		}

    public function conectar() {
      $this->db = mysqli_connect($this->host, $this->user, $this->pass, $this->base);
      $this->db->set_charset("utf8");
      date_default_timezone_set('America/Buenos_Aires');
  
      // Verificar si la conexión ha fallado
      if ($this->db->connect_errno) {
          // Almacenar el mensaje de error en el atributo $error
          $this->error = $this->db->connect_error;
          
          // Registrar el error en un archivo o en un log (opcional, pero recomendado)
          error_log("Error de conexión a la base de datos: " . $this->error);
          
          // Retornar false para indicar que la conexión ha fallado
          return false;
      }
      
      // Retornar true si la conexión es exitosa
      return true;
  }

    // Metodo begin_transaction para iniciar una transacción
    public function begin_transaction() {
      $this->db->begin_transaction();
    }

    // Metodo commit para confirmar los cambios
    public function commit() {
      $this->db->commit();
    }
    
    // Metodo rollback para deshacer los cambios
    public function rollback() {
      $this->db->rollback();
    }

    public function sql($sql){
			// SELECT, UPDATE, DELETE, INSERT tienen 6 caracteres
			$instruccionSQL = substr($sql, 0, 6);
			$instruccionSQL = strtoupper($instruccionSQL);
			

			switch($instruccionSQL){
				case "SELECT":
					$resultado = $this->db->query($sql);
					$mostrarInfo = [];
					while($listarInfo = $resultado->fetch_assoc()){
						$mostrarInfo[] = $listarInfo;
					}

					return $mostrarInfo;

				case "INSERT":
          try {
            $resultado = $this->db->query($sql);
          } catch (Exception $e) {
            if (strpos($e->getMessage(), 'Duplicate entry') !== false) {
              throw new Exception("Esta intentando subir uno o mas proyectos con codigos que ya se encuentran en el sistema");
            }
          }
					break;

				case "UPDATE":
					$resultado = $this->db->query($sql);
					break;

				case "DELETE":
					$resultado = $this->db->query($sql);
					return $this->db->affected_rows;
			}

		}

    // Crear base de datos si no existe
		public function crearDB($nombreDB=null){	

      if ($nombreDB == null) {
        $nombreDB = DBNAME;
      }

      // Crear conexión
      $new_db = new mysqli($this->host, $this->user, $this->pass);

      // Comprobar conexión
      if ($new_db->connect_error) {
          die("Conexión fallida: " . $new_db->connect_error);
      }

      // Crear base de datos si no existe
      $sql = "CREATE DATABASE IF NOT EXISTS $nombreDB";
      if ($new_db->query($sql) === TRUE) {
          $new_db->select_db($nombreDB);
          // Conectar a la base de datos creada
          $this->conectar();
          // Crear tabla Proyectos si no existe
          require("tabla_proyectos.php");
          $this->db->multi_query($sql_tabla_proyectos);
          // Crear tabla Convocatorias si no existe
          $this->conectar();
          require("tabla_convocatorias.php");
          $this->db->query($sql_tabla_convocatorias);

          return true;
      } else {
          $new_db->error;
          return false;
      }
		}

  }
?>