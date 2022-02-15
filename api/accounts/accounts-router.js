const router = require('express').Router()
const Accounts = require('./accounts-model')
const {checkAccountPayload, checkAccountId} = require('./accounts-middleware')

router.get('/', async (req, res, next) => {
  // DO YOUR MAGIC
const allAccounts = await Accounts.getAll(req.params);

res.status(200).json(allAccounts)

})

router.get('/:id', checkAccountId, async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const AccountsID = await Accounts.getById(req.params.id);
    res.json(AccountsID)
} catch (err) {
  res.json({ message: err.message })
}
})

router.post('/', checkAccountPayload, async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const insertAccount = await Accounts.create(req.body)
    res.status(201).json(insertAccount)

  } catch (err) {
    res.status(400).json({ message: err.message})
  }
  })

router.put('/:id', checkAccountPayload,  async (req, res, next) => {
  // DO YOUR MAGIC
  try {

    let {name, budget} = req.body;

    const UpdateUsersID = await Accounts.updateById(req.params.id, req.body);
    res.status(200).json(UpdateUsersID)

} catch (err) {
  res.json({ message: err.message })
}

});

router.delete('/:id', checkAccountId, async (req, res, next) => {
  // DO YOUR MAGIC

  const deleteAccount = await Accounts.deleteById(req.params.id)

  res.json(deleteAccount)
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
})

module.exports = router;
