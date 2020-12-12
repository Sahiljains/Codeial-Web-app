const User = require('../models/users');

module.exports.hoe = function(req,res){
    //return res.end('<h1>sd</h1>');

    
    return res.render('user_profile',
    {
        title:"home"
    });  
}

//render the signin page.
module.exports.signin = function(req,res){

    return res.render('user_sign_in',
    {
    title:"Signin"});
}

//render the sign up page.
module.exports.signup = function(req,res){

    return res.render('user_sign_up',
    {
    title:"Signup"});
}

// get up sign up data 
module.exports.create=function(req,res){
    
    if(req.body.password!=req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email:req.body.email},function(err,user)
    {
        if(err){
            console.log("sdsd");
        return;
        }

        if(!user){
            User.create(req.body,function(err,user){
                if(err){
                    console.log("sdsd");
                return res.redirect("/new/sign-in");
        }
    });
}
else{
    return res.redirect("back");
    
}
});

}

//get up sign in data
module.exports.createsession = function(req,res){

    //TODO Later
}

