const bcrypt = require('bcrypt')
const {User} = require('../../../models')

module.exports = async(req,res)=>{
  const user = await User.findOne({
    where:{
      username:req.body.username
    }
  })

  if(user){
    return res.status(409).json({
      status:'error',
      message:'username already exists!'
    })
  }

  const password = await bcrypt.hash(req.body.password,10);

  const data = {
    password,
    username: req.body.username,
    email: req.body.email,
    accountNumber: req.body.accountNumber,
    identityNumber: req.body.identityNumber,
  }

  const createUser = await User.create(data);

  return res.json({
    status:'success',
    data:{
      id:createUser.id
    }
  })
}