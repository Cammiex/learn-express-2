// import { userTable } from '../models/UserModel.js';
import usersTable from '../models/UserModel.js';

const executeTable = async () => {
  try {
    await usersTable();
  } catch (error) {
    console.log(error);
  }
};

export default executeTable;
