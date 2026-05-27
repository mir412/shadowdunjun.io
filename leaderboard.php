<!DOCTYPE html>

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
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



<script src="main.js"></script>
</body>
</html>
<?php
$con = mysqli_connect('localhost', 'root', '', 'usernames');
$result = mysqli_query($con, "SELECT * FROM leaderboard WHERE score != 0 ORDER BY score DESC");
$data = $result->fetch_all(MYSQLI_ASSOC);
?>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <div class="menu">
          <h1>Leaderboard</h1>
        
    </head>
    <body>

    <ul>
	  <li><a href="main-menu.html">Main Menu</a></li>
	
	  </ul>
        <table>
            <tr>
                <th>Username</th>
                <th>Score</th>
            </tr>
            <?php foreach($data as $row): ?>
            <tr>
                <td><?= htmlspecialchars($row['userName']) ?></td>
                <td><?= htmlspecialchars($row['score']) ?></td>
            </tr>
            <?php endforeach ?>
        </table>
    </body>
  
            </div>
</html>
