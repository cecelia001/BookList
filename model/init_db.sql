DROP TABLE IF EXISTS books;
CREATE TABLE `books` (
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    `title` VARCHAR(100),
    `author` VARCHAR(100),
    `done` BOOLEAN NOT NULL
); 

INSERT INTO `books` (title, author, done)
    VALUES ('The Silent Patient', 'Alex Michaelides', true), ('The Truth About Luck', 'Iain Reid', false), ('From the Ashes', 'Jesse Thistle', false), ('The Psychology of Time Travel', 'Kate Mascarenhas', false);

