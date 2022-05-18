const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://monu:monu@cluster0.jnlcd.mongodb.net/?retryWrites=true&w=majority"
    
  );
};
