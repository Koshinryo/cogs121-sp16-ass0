var models = require('../models');

exports.view = function(req, res) {
    var stuff = models.Message.find().sort('-date').exec(displayPost);
    var data = new Array();
    function displayPost(err, blog_posts){
      //console.log(blog_posts);
      data = {data: blog_posts};
      /*
      var emailList = new Array();
      var dateList = new Array();
      var contentList = new Array();
      for(i = 0; i < data.length; i++) {
        emailList.push(data[i].email);
        console.log(emailList[i]);
        contentList.push(data[i].content);
        console.log(contentList[i]);
        dateList.push(data[i].created);
        console.log(dateList[i]);
      }*/
      //console.log("\n\n\n\n" + data);
      res.render("index", data);
    }
    //var data = {blog_posts: []};
    //console.log(stuff);
}
