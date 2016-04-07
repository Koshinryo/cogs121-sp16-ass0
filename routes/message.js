var models = require('../models');

exports.send = function(req, res) {
    console.log(req.body); // help you see what is inside of req.body
    console.log(req.body.email + ", " + req.body.content);
    // your solution here
    var message = new models.Message({
      "email": req.body.email,
      "content": req.body.content,
      "created": new Date()
    });
    message.save(afterSaving);

    function afterSaving(err) { // this is a callback
      if(err) {console.log(err); res.send(500); }
      res.redirect('/');
    }
};
