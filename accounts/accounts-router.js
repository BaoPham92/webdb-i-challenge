const router = require('express').Router();
const db = require('../data/dbConfig.js');

// * ROUTES
router.get('/', (req, res) => {
    db('accounts')
        .then(accounts => res.status(200).json(accounts))
        .catch(err => res.status(500).json({ errorMessage: err }))
});

router.get('/:id', (req, res) => {
    db('accounts').where('id','=', req.params.id).first()
        .then(account => res.status(200).json(account))
        .catch(err => res.status(500).json({ errorMessage: err }))
});

router.post('/', (req, res) =>
    db('accounts').insert(req.body, 'id')
        .then(account => res.status(201).json(account))
        .catch(() => res.status(500).json({ errorMessage: err }))
);

router.put('/:id', (req, res) => {
    db('accounts').where({ id: req.params.id }).update(req.body)
        .then(count => res.status(200).json(count))
        .catch(err => res.status(500).json({ errorMessage: err }))
});

router.delete('/:id', (req, res) => {
    db('accounts').where({ id: req.params.id }).del()
        .then(id => res.status(200).json({ successMessage: `${id} deleted` }))
        .catch(err => res.status(500).json({ errorMessage: err }))
});

module.exports = router;