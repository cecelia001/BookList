DROP TABLE IF EXISTS books;
CREATE TABLE `books` (
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    `title` VARCHAR(100),
    `author` VARCHAR(100),
    `done` INT
); 
INSERT INTO `books` (title, author, done)
    VALUES ('The Great Gatsby', 'F. Scott Fitzgerald', 0), ('The Silent Patient', 'Alex Michaelides', 0), ('Behind Closed Doors', 'B.A. Paris', 0), ('The Guest List', 'Lucy Foley', 0);
