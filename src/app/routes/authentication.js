import express from 'express';

var Router = express.Router();

Router.post('/register',

  (req,res) => {
    res.json({success:req.body.username})
  }
);

export default Router;
