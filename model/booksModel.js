import { readFileSync, writeFileSync } from "node:fs";
import { v4 as uuid } from "uuid";

const BOOKPATH = "../database/books.json";

const cleanDataBooks = () => {
  const bufferBooks = readFileSync(BOOKPATH);
  const librosParseados = JSON.parse(bufferBooks);
  return librosParseados;
};

const getAllBooks = () => cleanDataBooks();

const getBookId = (id) => {
  const cleanBooksDB = cleanDataBooks();

  const book = cleanBooksDB.find((book) => book.id === id);

  if (book) {
    return book;
  } else {
    return false;
  }
};

const getBookTitle = (title) => {
  const cleanBooksDB = cleanDataBooks();

  const books = cleanBooksDB.filter((book) => {
    return book.title.toLowerCase().includes(title.toLowerCase());
  });

  if (books.length > 0) {
    return books;
  } else {
    return false;
  }
};

const getBookAuthor = (author) => {
  const cleanBooksDB = cleanDataBooks();

  const booksByAuthor = cleanBooksDB.filter((book) =>
    book.author.toLowerCase().includes(author.toLowerCase())
  );

  if (booksByAuthor.length > 0) {
    return booksByAuthor;
  } else {
    return false;
  }
};

const getBookTag = (tag) => {
  const cleanBooksDB = cleanDataBooks();

  const booksByTag = cleanBooksDB.filter((book) => {
    const tagsLower = book.tags.map((tag) => tag.toLowerCase());
    return tagsLower.some((t) => t.includes(tag.toLowerCase()));
  });

  if (booksByTag.length > 0) {
    return booksByTag;
  } else {
    return false;
  }
};

const createNewBook = (newBookData) => {
  const dataBooks = cleanDataBooks();

  const title = newBookData.title;
  const author = newBookData.author;
  const tags = newBookData.tags;

  const id = uuid();
  newBookData.id = id;

  const foundBook = dataBooks.find((book) => book.title === title);

  if (foundBook) {
    return false;
  }

  const newBook = {
    title: title,
    id: id,
    author: author,
    tags: tags,
  };

  dataBooks.push(newBook);
  const jsonData = JSON.stringify(dataBooks);
  writeFileSync(BOOKPATH, jsonData);

  return true;
};

const deleteBook = (id) => {
  const cleanBooksDB = cleanDataBooks();

  const book = cleanBooksDB.find((book) => {
    if (book.id === id) {
      return book;
    }
  });

  if (!book) {
    return false;
  }

  const filteredBooks = cleanBooksDB.filter((book) => {
    if (book.id !== id) {
      return book;
    }
  });

  const jsonData = JSON.stringify(filteredBooks);
  writeFileSync(BOOKPATH, jsonData);

  return true;
};

export {
  getAllBooks,
  getBookId,
  getBookTitle,
  getBookAuthor,
  getBookTag,
  createNewBook,
  deleteBook,
};
