import{Strategy as LocalStrategy} from 'passport-local';
import User from '../../model/User';

export const localLogin = new LocalStrategy({},
                        (username,password,done) =>{
                          User.findOne({username},(err,user)=>{
                            if(!user)
                              done(null,false,{message:'invalid Credentials'});
                            User.validatePassword(password,(err,isMatch)=>{
                              if(isMatch)
                                return done(null,User)
                              else {
                                return done(null,false,{message:'invalid Credentials'})
                              }
                            });
                          });
                        }
);

export const localSignup = new LocalStrategy({passReqToCallback : true},
                            (req,username,password,done) =>{
                                User.findOne({username},(err,user)=>{
                                  if(err)
                                    return done(err);
                                  if(user){
                                    console.log('user Already exits');
                                    const error = new Error('User already Exists');
                                    error.name = 'You have already sinned up';
                                    return done(error);
                                  }
                                  else{
                                    var newUser = new User();
                                    newUser.username = username;
                                    newUser.password = password;
                                    console.log(newUser);
                                    newUser.save(err => {
                                      if(err)
                                        throw err;
                                      console.log(newUser);
                                      return done(null,newUser);
                                    });
                                  }
                                });
                            }
);
