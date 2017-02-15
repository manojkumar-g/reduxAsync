import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';
var User = mongoose.Schema({
  username: String,
  password:String
});

User.methods.generateHash = passwd => bcrypt.hashSync(passwd,bcrypt.getSaltSync(8),null);
User.methods.validatePassword = passwd => bcrypt.compareSync(passwd,this.password);

export default mongoose.model('users',User);
