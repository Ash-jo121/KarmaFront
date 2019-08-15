const express = require('express')
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const User = require('../models/User')
//const S1 = require('../models/S1')
users.use(cors())

process.env.SECRET_KEY = 'secret'

users.post('/register', (req, res) => {
  const today = new Date().toJSON()
  const userData = {
    id: req.body.id,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    created: today
  }

  User.findOne({
    where: {
      email: req.body.email
    }
  })
    //TODO bcrypt
    .then(user => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash
          User.create(userData)
            .then(user => {
              res.json({ status: user.email + 'Registered!' })
            })
            .catch(err => {
              res.send('error: ' + err)
            })
        })
      } else {
        res.json({ error: 'User already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

users.post('/login', (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
          res.send(token)
        }
      } else {
        res.status(400).json({ error: 'User does not exist' })
      }
    })
    .catch(err => {
      res.status(400).json({ error: err })
    })
})

users.get('/profile', (req, res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

  User.findOne({
    where: {
      id: decoded.id
    }
  })
    .then(user => {
      if (user) {
        res.json(user)
      } else {
        res.send('User does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

users.post('/attendance',(req,res) =>{
  //var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

 User.findAll({
   where: {
     class : req.body.class,
    //  $not :{
    //    attendance_C1: null
    //  }
   }
 })
   .then(user => {
     if (user) {
       console.log(req.body.class)
       res.json(user)
     } else {
       res.send('User does not exist')
     }
   })
   .catch(err => {
     res.send('error: ' + err)
   })

});



users.put('/attendanceinput', (req, res) => {
  const userData = {
    first_name:req.body.name,
    attendance_C1:parseInt(req.body.attendance_C1),
  }
  User.findOne({
    where: {
      first_name: req.body.name
    }
  })
    .then(user => {
      if (user) {
        
        console.log(user)
        user.update(userData)
        .then(user1 => {
          res.json(user1)
          //console.log(user1)
        })
        .catch(err => {
          res.send('error: ' + err)
        })

        // user.attendance_C1 = req.body.attendance_C1
        
      } else {
        res.status(400).json({ error: 'User does not exist' })
      }
    })
    .catch(err => {
      res.status(400).json({ error: err })
    })
})

module.exports = users