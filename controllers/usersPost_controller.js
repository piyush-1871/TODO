module.exports.post = function(req,res){
    // return res.end('<h1>Users Post</h1>');

    return res.render('posts',{
        title : "Posts"
    })
}