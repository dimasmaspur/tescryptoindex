const bcrypt = require('bcrypt')
const {User} = require('../../../models')

module.exports = async(req,res)=>{
  const account = req.query.accountNumber;
  const identity = req.query.identityNumber;
  let user;
  if(account){
    user = await User.findAll({
      where:{
        accountNumber:account
      }
    })
  }else if(identity){
    user = await User.findAll({
      where:{
        identityNumber:identity
      }
    })
  }else{[
    user = await User.findAll()
  ]}

  if(!user){
    return res.status(409).json({
      status:'error',
      message:'not found!'
    })
  }

  return res.json({
    status:'success',
    data: user
  })
}