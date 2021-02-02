const queries = require('../../db/queries/user');


module.exports = {
  getAllUsers: async (req, res) => {
    try {
      const users = await queries.getAll();
      res.status(200).json({ users });
    }
    catch (e){
      res.status(500).send(e);
    }
  },
  
  getUserById: async (req, res) => {
    try {
      const user = await queries.getUser(req.params.id);
      res.status(200).send({ user });
    }   catch (e){
      res.status(500).send(e);
    }
  },

  regUser: async (req, res) => {
    try {
      
    }  catch (e){
      res.status(500).send(e);
    }
  }

};
