const router = require('express').Router()
const Accounts = require('./accounts-model')
const Val = require('./accounts-middleware')

router.get('/', async (req, res, next) => {
  try{
    const allAccounts = await Accounts.getAll()
    res.json(allAccounts)
  }catch(err){
    next(err)
  }
})

router.get('/:id', Val.checkAccountId, async (req, res, next) => {
  // DO YOUR MAGIC

    const AccountsID = await Accounts.getById(req.params.id);
    res.json(AccountsID)

})

router.post('/', Val.checkAccountPayload, Val.checkAccountNameUnique, async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const insertAccount = await Accounts.create(req.body)
    res.status(201).json(insertAccount)

  } catch (err) {
    next(err)
  }
  })

router.put('/:id', Val.checkAccountId, Val.checkAccountPayload,  async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const UpdateUsersID = await Accounts.updateById(req.params.id, req.body);
    res.json(UpdateUsersID)

} catch (err) {
  next(err)
}

});

router.delete('/:id', Val.checkAccountId, async (req, res, next) => {
  // DO YOUR MAGIC
  try {
  await Accounts.deleteById(req.params.id)
    res.json(req.account)
  } catch (err) {
    next(err)
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 201).json(err)
})

module.exports = router;
