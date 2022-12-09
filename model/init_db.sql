DROP TABLE IF EXISTS books;
CREATE TABLE `books` (
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    `title` VARCHAR(100),
    `author` VARCHAR(100)
); 
INSERT INTO `books` (title, author)
    VALUES ('The Great Gatsby', 'F Scott Fitzgerald'), ('The Silent Patient', 'Alex Michaelides'), ('Behind Closed Doors', 'BA Paris'), ('The Guest List', 'Lucy Foley');
