import express from 'express'

const router = express.Router()

router.post('/api/users/signout', (req, res) => {
  res.send('hello world')
})

export { router as signoutRouter }
