
<?php

   //use PHPMailer\PHPMailer\PHPMailer;
  // use PHPMailer\PHPMailer\Exception;
   //require 'phpmailer\PHPMAILER-6.6.0\src\Exception.php';
  // require 'phpmailer\PHPMAILER-6.6.0\src\PHPMailer.php';
   //$mail->SMTPDebug = 2;
   $mail = new PHPMailer(true);
   $mail->CharSet = 'UTF-8';
   $mail->setLanguage('ru', 'phpmailer\PHPMAILER-6.6.0\language\');
   $mail->IsHTML(true);

   //От кого письмо
   $mail->setFrom('vin200drozdov@yandex.ru');
   //Кому отправлять
   $mail->addAddress('vin2000drozdov@yandex.ru');
   //Тема письма
   $mail->Subject='Привет!';

   //Рука
   $hand='Правая';
   if($_POST['hand']=='left'){
      $hand="Левая";
   }
   
   //Тело пиьсма
   $body='<h1>Встречайте супер письмо!<h1>';
//echo 1;
   if(trim(!empty($_POST['name']))){
      $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
   }
   if(trim(!empty($_POST['email']))){
      $body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
   }
   if(trim(!empty($_POST['hand']))){
      $body.='<p><strong>Рука:</strong> '.$hand.'</p>';
   }
   if(trim(!empty($_POST['age']))){
      $body.='<p><strong>Возраст:</strong> '.$_POST['age'].'</p>';
   }
   if(trim(!empty($_POST['message']))){
      $body.='<p><strong>Сообщение:</strong> '.$_POST['message'].'</p>';
   }


   //Прикрепить файл
  // if(!empty($_FILES['image']['tmp_name'])){
      //путь загрузки файла
   //   $filePath=__DIR__ . "/files/" . $_FILES['image']['name'];
      //грузим файл
  //    if(copy($_FILES['image']['tmp_name'], $filePath)){
  //       $fileAttach=$filePath;
  //       $body.='<p><strong>Фото в приложении</strong>';
  //       $mail->addAttachment($fileAttach);
    //  }
 //  }
   $mail->Body= $body;
   //Отправляем
   if(!$mail->send()){
      $message='Ошибка';
   }else {
      $message='Данные отправлены';
   }
   $response=['message' => $message];
  // header("Cache-Control: no-cache, must-revalidate");
   header('Content-type: application/json');

   echo json_encode($response);
   
?>











   

   
