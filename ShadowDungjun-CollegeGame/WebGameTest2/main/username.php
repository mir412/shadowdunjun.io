<!doctype html> 

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"/>
  <link rel="stylesheet" href="style.css" />
  <title>Shadow Dungeon</title>
</head>
<body>
  <div class="screen">
    <i class="fas fa-volume-mute fa-2x" id="sound"></i>
  
    <video autoplay loop muted id="videoBackground">
      <source src="sounds/video.mov" type="video/mp4" />
    </video>
	
	<audio id="audioClick">
      <source src="sounds/buttonclick.wav" type="audio/wav">
    </audio>
	
	<audio id="audioHover">
      <source src="sounds/buttonrollover.wav" type="audio/wav">
    </audio>
	<div class="menu">
	<h1> Shadow Dungeon </h1>
	<p> Thanks for Playing </p>
	<ul>
	  <li><a href="Index.html">Play Again</a></li>
	  <li><a href="main-menu.html">Main Menu</a></li>
	</ul>
	</div>
  </div>
	
</div>
</body>
</html>



<?php
	$userName = $_POST['userName'];
	$score = $_POST['score'];
	
	$conn = new mysqli('localhost','root','','usernames');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);

	} else {
		

		$stmt = $conn->prepare("insert into leaderboard(userName, score) values(?, ?)");
		$stmt->bind_param("si", $userName, $score);
		$execval = $stmt->execute();
		$stmt->close();
		$conn->close();
	}

?>




</html>

    