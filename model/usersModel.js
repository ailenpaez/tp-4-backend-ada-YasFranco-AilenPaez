import { readFileSync, writeFileSync } from "fs";
import { v4 as uuidv4 } from "uuid";
import { hashPassword } from "../utils/hashPassword.js";

const USERPATH = "../database/users.json";

const dataParsed = () => {
  const data = readFileSync(USERPATH);
  const dataParse = JSON.parse(data);
  return dataParse;
};

const addUser = (dataUser) => {
  const dataUsers = dataParsed();

  const username = dataUser.username;
  const password = dataUser.password;

  const foundUser = dataUsers.find((user) => user.username === username);

  if (foundUser) {
    return false;
  }

  const newUser = {
    username: username,
    userId: uuidv4(),
    password: hashPassword(password),
  };

  dataUsers.push(newUser);
  writeFileSync(USERPATH, JSON.stringify(dataUsers));

  return "El usuario fue creado con exito";
};

const deleteUser = (password) => {
  const data = dataParsed();
  const hashedPass = hashPassword(password);

  const foundUser = data.find((user) => user.password === hashedPass);

  if (foundUser === undefined) {
    return false;
  }

  const objFiltered = data.filter((user) => {
    if (user.password !== hashedPass) {
      return user;
    }
  });

  writeFileSync(USERPATH, JSON.stringify(objFiltered));

  return true;
};

export { addUser, deleteUser };
