CREATE DATABASE testdb;

CREATE USER 'root'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON testdb.* TO 'root'@'localhost';
FLUSH PRIVILEGES;

