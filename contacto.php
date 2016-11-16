<!DOCTYPE html>
<html>
<head>
	<title>Mensajeria Fixter</title>
</head>
<body>

<?php
echo("Sistema de Mensajes FixTeR");
$nombre = $_POST['name'];
$email = $_POST['email'];
$tel=$_POST['tel'];
$lista = $_POST['list'];
$mensaje = $_POST['msj'];
$asunto=$_POST['asunto'];
$para = 'contacto@fixter.org, contacto@fixter.org';
$titulo = 'SERVICIO DE MENSAJERIA FIXTER';
$header = 'Enviado por: ' . $email;
$msjCorreo = "Nombre: $nombre\n Telefono: $tel\n E-Mail: $email\n $asunto\n Lista: $lista\n Mensaje:\n $mensaje";

if (isset($_POST['fixter'])) {
if (mail($para, $titulo, $msjCorreo, $header)) {
echo'<script type="text/javascript">
alert("Tu mensaje ha sido enviado, Pronto nos comunicaremos contigo \n Segosol");
window.location="index.html";
</script>';

} else {
echo 'Falló el envio. INTENTE DE NUEVO PORFAVOR';
break;

}
}

?>

</body>
</html>

