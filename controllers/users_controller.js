module.exports.profile = (req,res)=>{
    // return res.end('<h1>User Profile</h1>');
    return res.render('users',{
        title : "UsersProfile"
    });
}