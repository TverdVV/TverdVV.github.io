<?php
// Файлы phpmailer
require ‘class.phpmailer.php’;
require ‘class.smtp.php’;
// Переменные
$name = $_POST[‘name’];
$number = $_POST[‘number’];
$email = $_POST[‘email’];
// Настройки
$mail = new PHPMailer;
$mail->isSMTP(); 
$mail->Host = ‘smtp.yandex.ru’; 
$mail->SMTPAuth = true; 
$mail->Username = ‘tverdohlebov2001’; // Ваш логин в Яндексе. Именно логин, без @yandex.ru
$mail->Password = ‘qaz01042001’; // Ваш пароль
$mail->SMTPSecure = ‘ssl’; 
$mail->Port = 465;
$mail->setFrom(‘tverdohlebov2001@yandex.ru’); // Ваш Email
$mail->addAddress(‘vladislav.tverdoxlebov@mail.ru’); // Email получателя
$mail->addAddress(‘example@gmail.com’); // Еще один email, если нужно.
// Прикрепление файлов
 for ($ct = 0; $ct < count($_FILES[‘userfile’][‘tmp_name’]); $ct++) {
 $uploadfile = tempnam(sys_get_temp_dir(), sha1($_FILES[‘userfile’][‘name’][$ct]));
 $filename = $_FILES[‘userfile’][‘name’][$ct];
 if (move_uploaded_file($_FILES[‘userfile’][‘tmp_name’][$ct], $uploadfile)) {
 $mail->addAttachment($uploadfile, $filename);
 } else {
 $msg .= ‘Failed to move file to ‘ . $uploadfile;
 }
 } 
 
// Письмо
$mail->isHTML(true); 
$mail->Subject = “Заявка от клиента”; // Заголовок письма
$mail->Body = “Телефон . $number ”; // Текст письма
// Результат
if(!$mail->send()) {
 echo ‘Message could not be sent.’;
 echo ‘Mailer Error: ‘ . $mail->ErrorInfo;
} else {
 echo ‘ok’;
}
?>