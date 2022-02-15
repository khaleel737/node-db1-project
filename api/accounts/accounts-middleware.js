const { is } = require('express/lib/request')
const dbConfig = require('../../data/db-config')
const Accounts = require('./accounts-model')

exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)
  if(!req.body.name || !req.body.budget) {
    res.status(400).json({ message: 'Name and Budget Are Required'})
  } else if (req.body.name < 3 || req.body.name > 100) {
    res.status(400).json({ message: "name of account must be between 3 and 100" })
  } else if(typeof req.body.budget !== 'number') {
    res.status(400).json({ message: "budget of account must be a number" })
  } else if(req.body.budget < 0 || req.body.budget > 1000000) {
    res.status(400).json({ message: "budget of account is too large or too small" })
  } else {
    next()
  }


}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
  db('accounts').where({name: req.body.name}).then(account => {
    if(!account.trim()) {
      res.status(400).json({ message: "that name is taken" })
    }
  })

}

exports.checkAccountId = (req, res, next) => {
  // DO YOUR MAGIC
    // if the user ID is 0, skip to the next route
      // DO YOUR MAGIC
        let { id } = req.body
          if(id === undefined) {
            res.status(404).json({ message: "account not found" })
          }  else if (id === 0){
            next(res)
          } 


        }
      
