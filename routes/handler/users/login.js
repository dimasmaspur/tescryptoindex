const bcrypt = require('bcrypt')
const {User} = require('../../../models')
const jwt = require('jsonwebtoken')

module.exports = async(req,res)=>{
  const user = await User.findOne({
    where:{
      username:req.body.username
    }
  })

  if(!user){
    return res.status(409).json({
      status:'error',
      message:'username not found!'
    })
  }

  const isValidPassword = await bcrypt.compare(req.body.password, user.password);

  if(!isValidPassword){
    return res.status(404).json({
      status:'error',
      message:'wrong password'
    })
  }

  const token = jwt.sign({data:req.body.username}, 'TokenJWT');

  return res.json({
    status:'success',
    data: token
  })
}