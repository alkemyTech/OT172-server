require('dotenv').config
const jwt = require('jsonwebtoken')

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET
const ACCESS_TOKEN_LIFE = process.env.ACCESS_TOKEN_LIFE

const createAccessToken = (userId, userEmail, userName) => {
  const payload = {
    _id: userId,
    email: userEmail,
    name: userName
  }

  try {
    const accessToken = jwt.sign(payload, ACCESS_TOKEN_SECRET, {
      algorithm: 'HS256',
      expiresIn: ACCESS_TOKEN_LIFE
    })

    return accessToken
  } catch (error) {
    return error
  }
}

const verifyToken = (req, res, next) => {
  const accessToken  = req.headers['x-access-token']

  if (!accessToken) return res.status(403).send('Token is missing')

  try {
    const user = jwt.verify(accessToken, ACCESS_TOKEN_SECRET)
    console.log(user._id);
    // req.user = 
    next()
  } catch (error) {
    return res.status(401).send('Token is invalid')
  }
}

module.exports = {
  createAccessToken,
  verifyToken
}
