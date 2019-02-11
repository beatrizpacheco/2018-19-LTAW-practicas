<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>HTML5 </title>
    <title>Beatriz Pacheco Piñero</title>
    <link rel="stylesheet" href="tienda.css">


</head>

<body>

    <p id="title"> Tienda <p>
    <p id="special"> Beatriz Pacheco </p>
    <p id="timer"> YOUR TIME <span id="counter">0:0:0</span></p>
    <button class="button" onclick="showhighscore()"> SHOW HIGHSCORE </button>

    <div id="main" class="main">
      <img id="imageType" src="a.jpg" width="400px" height="300px">
      <canvas id="puzzle" ></canvas>
    </div>

    <script src="sliding.js"></script>
    <div id="slider"></div>
</body>

</html>
