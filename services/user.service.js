const UserModel = require("../models/user.model");

class UserService {

  async findUserAndCreateIfNotFound(provider_id, email, name) {

    //findOneandUpdate query to find the user by provider_id and update the email and name and upsert true to create a new if not found and new = true
    try{
      const user = await UserModel.findOneAndUpdate(
        { provider_id,email },
        { email, name },
        { upsert: true, new: true }
      );
      console.log(user);
      return user.lean();
    }
    catch(error){
      console.log(error); //better error handling can be implemented later
      return null;
    }



    
  }
}
module.exports = new UserService();
