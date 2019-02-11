const queries = require('../../db/queries/user');

module.exports = {
  getAllUsers: async(req, res) =>{
    try {
      const users = await queries.getAll();
      res.status(200).json({ users });
    }
    catch (e){
      res.send(e);
    }
  }
};
