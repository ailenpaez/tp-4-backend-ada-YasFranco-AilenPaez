import net from "node:net";
import { addUser, deleteUser } from "./userController.js";
import {
  getAllBooks,
  getBookAuthor,
  getBookId,
  getBookTag,
  getBookTitle,
  createNewBook,
  deleteBook,
} from "./bookController.js";

const serverTcp = net.createServer();
const PORT = 7200;

const handleUser = (data) => {
  const action = data[0].slice(2);

  switch (action) {
    case "add":
      return addUser({ username: data[2], password: data[3] });
    case "delete":
      return deleteUser(data[2]);
  }
};

const handleBooks = (data) => {
  if (data.length === 0) {
    return getAllBooks();
  }

  const action = data[0].slice(2);
  
  switch (action) {
    case "get":
      if (data[1] === "id") {
        return getBookId(data[2]);
      } else if (data[1] === "title") {
        return getBookTitle(data[2]);
      } else if (data[1] === "author") {
        return getBookAuthor(data[2]);
      } else if (data[1] === "tag") {
        return getBookTag(data[2]);
      }

    case "add":
      return createNewBook({
        title: data[2],
        author: data[4],
        tags: data[6].split("-"),
      });

    case "delete":
      return deleteBook(data[3]);
    default:
      return "COMMAND_NOT_FOUND";
  }
};

const processParams = (data) => {
  const entity = data[1];

  if (entity === "user") {
    const responseUser = handleUser(data);
    return responseUser;
  } else {
    const responseBooks = handleBooks(data);
    return responseBooks;
  }
};

serverTcp.on("connection", (socket) => {
  socket.on("data", (clientData) => {
    const clientMsg = JSON.parse(clientData);
    const serverResponse = processParams(clientMsg);

    socket.write(JSON.stringify(serverResponse));
  });

  socket.on("close", () => console.log("Client close conecction."));

  socket.on("error", () => console.log("Client error"));

  console.log("Client connect.");
});

serverTcp.listen(PORT, () => {
  console.log("Server is running on port ", PORT);
});
