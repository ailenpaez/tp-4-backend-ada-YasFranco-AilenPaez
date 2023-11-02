import * as model from "../model/usersModel.js";

const addUser = (dataUser) => {
  const createUser = model.addUser(dataUser);
  if (createUser) {
    return "NEW_USER_WAS_CREATED_SUCCESSFULLY!";
  } else {
    return "USER_EXISTS_IN_DATABASE";
  }
};

const deleteUser = (password) => {
  const deleteUser = model.deleteUser(password);

  if (deleteUser) {
    return "USER_DELETED_SUCCESSFULLY!";
  } else {
    return "USER_NOT_FOUND_IN_DATABASE";
  }
};

export { addUser, deleteUser };
