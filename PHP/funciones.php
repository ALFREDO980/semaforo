<?php

function eliminarusuario($id)
{
    $bd = obtenerConexion();
    $sentencia = $bd->prepare("DELETE FROM usuarios WHERE id = ?");
    return $sentencia->execute([$id]);
}

function actualizarusuario($usuario)
{
    $bd = obtenerConexion();
    $sentencia = $bd->prepare("UPDATE usuarios   SET name = ?, firstname = ?, user = ?, password = ?, rol = ? WHERE id = ?");
    return $sentencia->execute([$usuario->name, $usuario->firstname, $usuario->rol, $usuario->id]);
}

function obtenerusuarioPorId($id)
{
    $bd = obtenerConexion();
    $sentencia = $bd->prepare("SELECT id, name, firstname, user, password, rol FROM usuarios WHERE id = 26");
    $sentencia->execute([$id]);
    return $sentencia->fetchObject();
}

function obtenerUsuarios()
{
    $bd = obtenerConexion();
    $sentencia = $bd->query("SELECT id, name, firstname, user, password, rol FROM usuarios");
    return $sentencia->fetchAll();
}

function obtenerEmpleados()
{
    $bd = obtenerConexion();
    $sentencia = $bd->query("SELECT id, nombre, correo FROM empleados");
    return $sentencia->fetchAll();
}

function guardarVideojuego($usuario)
{
    $bd = obtenerConexion();
    $sentencia = $bd->prepare("INSERT INTO usuarios(name, firstname, user, password, rol) VALUES (?, ?, ?, ?, ?)");
    return $sentencia->execute([$usuario->name, $usuario->firstname, $usuario->user, $usuario->password, $usuario->rol]);
}

function obtenerVariableDelEntorno($key)
{
    if (defined("_ENV_CACHE")) {
        $vars = _ENV_CACHE;
    } else {
        $file = "env.ejemplo.php";
        if (!file_exists($file)) {
            throw new Exception("El archivo de las variables de entorno ($file) no existe. Favor de crearlo");
        }
        $vars = parse_ini_file($file);
        define("_ENV_CACHE", $vars);
    }
    if (isset($vars[$key])) {
        return $vars[$key];
    } else {
        throw new Exception("La clave especificada (" . $key . ") no existe en el archivo de las variables de entorno");
    }
}
function obtenerConexion()
{
    $password = obtenerVariableDelEntorno("MYSQL_PASSWORD");
    $user = obtenerVariableDelEntorno("MYSQL_USER");
    $dbName = obtenerVariableDelEntorno("MYSQL_DATABASE_NAME");
    $database = new PDO('mysql:host=localhost;dbname=' . $dbName, $user, $password);
    $database->query("set names utf8;");
    $database->setAttribute(PDO::ATTR_EMULATE_PREPARES, FALSE);
    $database->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $database->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);

    return $database;
}
