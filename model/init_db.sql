DROP TABLE IF EXISTS books;
CREATE TABLE `books` (
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    `title` VARCHAR(100),
    `author` VARCHAR(100),
    `done` BOOLEAN NOT NULL
); 
INSERT INTO `books` (title, author, done)
    VALUES ('The Great Gatsby', 'F. Scott Fitzgerald', true), ('The Silent Patient', 'Alex Michaelides', false), ('Behind Closed Doors', 'B.A. Paris', false), ('The Guest List', 'Lucy Foley', false);
