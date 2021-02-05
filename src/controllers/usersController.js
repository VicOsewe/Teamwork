import Model from '../models/model';

const usersModel = new Model('users');
export const userPage = async (req, res) => {
  try {
    const data = await usersModel.select('first_name,last_name');
    res.status(200).json({ message: data.rows });
  } catch (err) {
    res.status(200).json({ message: err.stack });
  }
};