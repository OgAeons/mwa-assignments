<?php
    $servername = "localhost"; t
    $username = "root"; 
    $password = ""; 
    $dbname = "testdb"; 

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    echo "Connected successfully<br>";

    $sql = "CREATE TABLE IF NOT EXISTS users (
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        email VARCHAR(50) NOT NULL UNIQUE
    )";

    if ($conn->query($sql) === TRUE) {
        echo "Table 'users' created successfully<br>";
    } else {
        echo "Error creating table: " . $conn->error . "<br>";
    }

    $sql = "INSERT INTO users (name, email) VALUES 
    ('John Doe', 'john@example.com'), 
    ('Jane Smith', 'jane@example.com'), 
    ('Mike Johnson', 'mike@example.com')";

    if ($conn->query($sql) === TRUE) {
        echo "Sample data inserted successfully<br>";
    } else {
        echo "Error inserting data: " . $conn->error . "<br>";
    }

    $conn->close();
?>
