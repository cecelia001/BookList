# BookList

## About
This app allows for users to add books they want to read to a list. Books can be marked read or deleted from the list.

## Setup

### Dependencies

- Run `npm install` in project directory. This will install server-related dependencies such as `express`.
- `cd client` and run `npm install`. This will install client dependencies.

### Database Prep
- Access the MySQL interface in your terminal
- Create a new database called books: `create database books`
- Add a `.env` file to the project folder of this repository containing the MySQL authentication information for MySQL user. For example:

```bash
  DB_HOST=localhost
  DB_NAME=books
  DB_USER=root
  DB_PASS=YOURPASSWORD
```

- Run `npm run migrate` in the project folder of this repository, in a new terminal window. This will create the tables used in this database.

### Development

- Run `npm start` in project directory to start the Express server.
- In another terminal, do `cd client` and run `npm start` to start the client. 

## DatabaseSchema

![Alt text](BookListDBSchema.png)

## User flow diagram
![Alt text](BookList%20UserFlow.png)


## Possible Future Extensions
- Link to books for purchase/description of book
- List books in alphabetical order by title or author
- Rating option

