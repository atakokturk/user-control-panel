const User = require("./userModel");

module.exports.getDataFromDBService = async () => {
  const ccc = await userModel.find({});                                                         
  return ccc;
};

module.exports.createUserDBService = async (userDetails) => {
  try {
    const userBody = userDetails;
    await User.create(userBody);                                      
    return true;
  } catch (error) {
    console.error("Error creating user in DB:", error);
    return false;
  }
};

module.exports.updateUserDBService = async (id, userDetails) => {
  try {
    console.log(userDetails);
    const updatedUser = await userModel.findByIdAndUpdate(
      id,                                                   
      userDetails, 
      { new: true } 
    );
    if (!updatedUser) {
      
      return false;
    }
    return updatedUser; 
  } catch (error) {
    console.error("Error updating user in DB:", error);
    return false;
  }
};

module.exports.removeUserDBService = async (id) => {
  try {
    const deletedUser = await userModel.findByIdAndDelete(id); 

    if (!deletedUser) {
      return false;
    }                                                                                                    
    return deletedUser;
  } catch (error) {
    console.error("Error deleting user in DB:", error);
    return false;
  }
};


