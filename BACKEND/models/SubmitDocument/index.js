const mongoose = require("mongoose");
const documentSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  doc: {
    type: String,
  },
  cloudinary_id_doc: {
    type: String,
  },
});

module.exports = mongoose.model("submit-document", documentSchema);
