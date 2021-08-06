const bcrypt = require('bcrypt')
const {User} = require('../../../models')

module.exports = async (req,res)=>{
  const id = req.params.id;
  const user = await User.findByPk(id);

  if(!user){
    return res.status(404).json({status:'error',message:'user not found'})
  }

  const username = req.body.username;
  const password = await bcrypt.hash(req.body.password, 10);


  const {
    email,accountNumber,identityNumber
  } = req.body;

  await user.update({
    username,email,password,accountNumber,identityNumber
  });


  return res.json({
    status:'success',
    data :{
      id: user.id,
      username: user.username,
      email: user.email,
      accountNumber: user.accountNumber,
      identityNumbers: user.identityNumbers,
      password: user.password,
    }

  })

}