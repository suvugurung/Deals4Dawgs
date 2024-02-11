<?php
$servername = "your_database_server";
$username = "your_database_username";
$password = "your_database_password";
$dbname = "forum";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $title = $_POST["postTitle"];
    $content = $_POST["postContent"];
    $author = "John Doe"; // Change this to the authenticated user's name in a real scenario

    $sql = "INSERT INTO posts (title, content, author) VALUES ('$title', '$content', '$author')";

    if ($conn->query($sql) === TRUE) {
        echo "Post submitted successfully.";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>