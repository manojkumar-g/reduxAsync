import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';
var User = mongoose.Schema({
  username: {type:String,unique:true},
  password:String
});

User.methods.validatePassword = (passwd,cb) => {
  bcrypt.compare(passwd,this.password,(err,isMatch) =>{
    if(err)
      return cb(err);
    cb(null,isMatch);
  });
};

User.pre('save',function(next) {
  const user = this;
  bcrypt.genSalt(10,(err,salt) =>{
    if(err)
      return next(err);
    bcrypt.hash(user.password,salt,null,(err,hash)=>{
      if(err)
        return next(err);
      user.password = hash;
      next();
    });
  });
});

export default mongoose.model('newuser',User);
