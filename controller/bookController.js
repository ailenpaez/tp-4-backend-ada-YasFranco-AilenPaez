import * as model from "../model/booksModel.js";

const getAllBooks = () => {
  const books = model.getAllBooks();

  if (books.length > 0) {
    return books;
  } else {
    return "NO_BOOKS_FOUND_IN_DB";
  }
};

const getBookId = (id) => {
  const book = model.getBookId(id);

  if (book) {
    return book;
  } else {
    return "BOOK_NOT_EXISTS";
  }
};

const getBookTitle = (title) => {
  const book = model.getBookTitle(title);
  if (book !== false) {
    return book;
  } else {
    return "TITLE_NOT_FOUND";
  }
};

const getBookAuthor = (author) => {
  const booksByAuthor = model.getBookAuthor(author);

  if (booksByAuthor !== false) {
    return booksByAuthor;
  } else {
    return "AUTHOR_NOT_EXISTS";
  }
};

const getBookTag = (tag) => {
  const booksByTag = model.getBookTag(tag);
  if (booksByTag !== false) {
    return booksByTag;
  } else {
    return "TAG_NOT_FOUND";
  }
};

const createNewBook = (dataBook) => {
  const result = model.createNewBook(dataBook);

  if (result === false) {
    return "BOOK_ALREADY_EXISTS_IN_DB";
  } else {
    return `BOOK "${dataBook.title}" - ID "${dataBook.id}" WAS_CREATED_SUCCESSFULLY!`;
  }
};

const deleteBook = (id) => {
  const result = model.deleteBook(id);

  if (result) {
    return "BOOK_DELETED_SUCCESSFULLY!";
  } else {
    return "BOOK_NOT_EXIST_IN_DB";
  }
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
