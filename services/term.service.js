const TermModel = require("../models/term.model");

class TermService {

  //service to create a term
  async createTerm(name,data) {
    try {
      const term = await TermModel.create({name,...data});
      return term;
    } catch (error) {
      console.log(error); //better error handling can be implemented later
      return null;
    }
  }

  //service to get a term by name
  async getTermByName(name) {
    try {
      const term = await TermModel.findOne({
        name: name,
      });
      return term;
    } catch (error) {
      console.log(error); //better error handling can be implemented later
      return null;
    }
  }

}
module.exports = new TermService();
