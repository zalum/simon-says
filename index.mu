<!DOCTYPE html>
<html>
<head>
    <title>xway | get-started</title>
</head>
<style type="text/css">
    body {
        font-family: arial;
    }
</style>
<body>
<!-- index.html, an optional user interface :] -->
<h1>
    Hello Netbeast community! <a style="color: red">&#9829;</a>
</h1>

<form action="" method="POST">
    <button name="blue" value="true">
        Blue
    </button>
    <button name="red" value="true">
        Red
    </button>
    <button name="green" value="true">
        Green
    </button>
    <button name="yellow" value="true">
        Yellow
    </button>
    <button name="restart" value="true">
        Restart
    </button>
</form>

<span>
<p>{{infoMessage}}</p>
<p>You have Level {{levelNo}} and step {{stepInLevel}}</p>
<p>Level colors {{#colors}} <li> {{.}} </li> {{/colors}} <p>
<span>
</body>
</html>