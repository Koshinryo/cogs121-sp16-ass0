var mongoose = require('mongoose');

var messageSchema = {
  "email": String,
  "content": String,
  "created": Date
}

exports.Message = mongoose.model('Message', messageSchema);
