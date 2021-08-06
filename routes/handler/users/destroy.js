const bcrypt = require('bcrypt')
const {User} = require('../../../models')

module.exports = async(req,res)=>{
  const id = req.params.id
 const user = await User.findByPk(id);

  if(!user){
    return res.status(409).json({
      status:'error',
      message:'not found!'
    })
  }

  await user.destroy()
  return res.json({
    status:'success',
    message:'deleted'
  })
}