require('dotenv').config
const jwt = require('jsonwebtoken')

const TOKEN_SECRET = process.env.TOKEN_SECRET
const TOKEN_LIFE = process.env.TOKEN_LIFE

const createAccessToken = (userId, userEmail) => {
  const payload = {
    _id: userId,
    email: userEmail
  }

  try {
    const Token = jwt.sign(payload, TOKEN_SECRET, {
      algorithm: 'HS256',
      expiresIn: TOKEN_LIFE
    })

    return Token
  } catch (error) {
    return error
  }
}

module.exports = createAccessToken
