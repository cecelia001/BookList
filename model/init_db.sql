DROP TABLE IF EXISTS category;
CREATE TABLE `category` (
    `categoryid` INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    `categoryName` VARCHAR(100)
); 
INSERT INTO `category` (categoryName)
    VALUES ('Rent'), ('Food'), ('Personal'), ('Transportation'), ('Other'), ('Savings'), ('Emergency');




DROP TABLE IF EXISTS budget;
CREATE TABLE `budget` (
    `budgetid` INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    `categoryid` INT,
    `amount` INT
); 
INSERT INTO `budget` (categoryid, amount)
    VALUES (1, 1570), (2, 500), (3, 150), (4, 85), (5, 100), (6, 75), (7, 50);




DROP TABLE IF EXISTS expenses;
CREATE TABLE `expenses` (
    `expensesid` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `categoryid` INT,
    `amount` INT,
    `themonth` VARCHAR(100),
    `theyear` INT
); 
INSERT INTO `expenses` (categoryid, amount, themonth, theyear)
    VALUES (1, 1000, 'September', 2022), 
           (2, 600, 'September', 2022),
           (3, 100, 'September', 2022),
           (4, 50, 'September', 2022),
           (5, 60, 'September', 2022),
           (6, 100, 'September', 2022),
           (7, 50, 'September', 2022),
           (1, 1550, 'October', 2022),
           (2, 550, 'October', 2022),
           (4, 50, 'October', 2022),
           (5, 60, 'October', 2022),
           (6, 100, 'October', 2022),
           (7, 50, 'October', 2022);