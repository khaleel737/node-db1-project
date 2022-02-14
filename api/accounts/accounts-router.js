const router = require('express').Router()
const Accounts = require('./accounts-model')

router.get('/accounts', async (req, res, next) => {
  // DO YOUR MAGIC
const allAccounts = await Accounts.getAll(req.params);

res.status(200).json(allAccounts)

})

router.get('/accounts/:id', async (req, res, next) => {
  // DO YOUR MAGIC
  try {

    const usersID = await Accounts.getById(req.params.id);

    if(!usersID) {
      res.status(404).json({ Message: 'Account Not Found' });
    }

  res.status(200).json(usersID)

} catch (err) {

  res.json({ err:'ID does not exist '})
}
})

router.post('/', (req, res, next) => {
  // DO YOUR MAGIC
})

router.put('/:id', (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
})

module.exports = router;
