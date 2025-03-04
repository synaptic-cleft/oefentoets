CREATE DATABASE IF NOT EXISTS kattenasiel;
USE kattenasiel;

GRANT ALL PRIVILEGES ON kattenasiel.* TO 'cat_user'@'%';
FLUSH PRIVILEGES;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

INSERT INTO users (username, password) VALUES 
('admin', 'couldAlsoBeAFlag');