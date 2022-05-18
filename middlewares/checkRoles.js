
const isAdmin = async (req, res, next) => {
  try {
    if (!req.user) return res.status(401).json({ error: 'Unauthorized' })

    if (req.user.roleId === 1) {
      next()
    } else {
      return res.status(403).json({ error: 'Admin role required' })
    }
  } catch (err) {
    return res.status(500).send({ error: err.message })
  }
}

const isAdminOrUserSelf = async (req, res, next) => {
  try {
    if (!req.user) return res.status(401).json({ error: 'Unauthorized' })
    if (req.user.roleId === 1 || req.user.id === Number(req.params.id)) {
      next()
    } else {
      return res.status(403).json({ error: 'Admin role required' })
    }
  } catch (err) {
    return res.status(500).send({ error: err.message })
  }
}

module.exports = {
  isAdmin,
  isAdminOrUserSelf
}
