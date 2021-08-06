const register = require('./register')
const login = require('./login')
const getAll = require('./getAll')
const edit = require('./edit')
const destroy = require('./destroy')

module.exports = {
  register,
  login,
  getAll,
  destroy,
  edit
}