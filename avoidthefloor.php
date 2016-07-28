<!DOCTYPE html>
<html>
<head>

    <meta charset="utf-8">
    <title>Canvas</title>
    <link rel="stylesheet" href="Static/CSS/SBstylesheet.css">
</head>
    
<body>
    
    <?php include 'Included/header.php' ?>
    
    <div id="canvas-div">
        <h1>Avoid the floor!</h1>
        <canvas id="myCanvas" data-processing-sources="Static/PDE/avoidthefloor.pde"></canvas>
        <button onclick="location.reload()">Restart</button>
    </div>
    
    
</body>
    
<footer>
    <script src="JSlibrary/processing.js"></script>
    <script src="JSlibrary/dropdown.js"></script>
    <script src="JSlibrary/general.js"></script>
</footer>    
    
</html>