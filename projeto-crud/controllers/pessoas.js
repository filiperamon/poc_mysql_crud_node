const pessoasModels = require('../models/pessoas')

const index = async(connection, req, res) => {
    const pessoas = await pessoasModels.findAll(connection)
    res.render('pessoas/index', {pessoas: pessoas})
}

const deleteOne = async(connection, req, res) => {
    await pessoasModels.deleteOne(connection, req.params.id)
    res.redirect('/pessoas')
}

const createForm = (req, res) => {
    res.render('pessoas/create')
}

const createProcess = async (connection, req, res) => {
    await pessoasModels.create(connection, req.body)
    res.redirect('/pessoas')
}

const updateForm = async (connection, req, res) => {
    const pessoa = await pessoasModels.findById(connection, req.params.id)
    res.render('pessoas/update', { pessoa })
}

const updateProcess = async (connection, req, res) => {
    await pessoasModels.update(connection, req.params.id, req.body)
    res.redirect('/pessoas')
}

module.exports = {
    index,
    deleteOne,
    createForm,
    createProcess,
    updateForm,
    updateProcess
}