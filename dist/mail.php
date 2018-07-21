<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$back = "<p><a href=\"javascript: history.back()\">Вернуться назад</a></p>";

if(!empty($_POST['phone'])){

	$mail = new PHPMailer;
	$mail->CharSet = 'UTF-8';

	$phone = trim(strip_tags($_POST['phone']));

	// Настройки SMTP
	$mail->isSMTP();
	$mail->SMTPAuth = true;
	$mail->SMTPDebug = 0;

	$mail->Host = "ssl://smtp.mail.ru";
	$mail->Port = 465;
	$mail->Username = "vladislav.tverdoxlebov@mail.ru";
	$mail->Password = "hi1233214554";

	// От кого
	$mail->setFrom('vladislav.tverdoxlebov@mail.ru', 'Владислав Твердохлебов');        

	// Кому
	$mail->addAddress('tverdohlebov2001@yandex.ru', '');

	// Тема письма
	$mail->Subject = 'Новая заявка CARDBORD';

	// Тело письма
	$body = '<p><strong>Новая заявка: </strong></p>'. $phone;
	$mail->msgHTML($body);

	// Приложение
	// $mail->addAttachment (__DIR__ . '/image.jpg');

	$mail->send();

	echo "<script>
								alert('Спасибо, ваша заявка принята');
								history.back();
							</script>";
 exit;
}else{
	echo "Для отправки сообщения заполните все поля! $back";
 exit;
}
?>