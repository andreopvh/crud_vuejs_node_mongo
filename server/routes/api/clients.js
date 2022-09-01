const express = require('express');
const router = express.Router();

const { insertClient, deleteClient, updateClient, findClients } = require('../../database/db');

// GET(read) Clientes (".../api/client")
router.get('/', async (req, res) => {
  await findClients((err, client) => {
    if(err) {
      return console.log(err);
    }

    return res.send({ client });
  });
});

// POST(create) Clientes
router.post('/', async (req, res) => {
  try {
    await insertClient({
      cpf: req.body.cpf,
      name: req.body.name,
      email: req.body.email,
      telefone: req.body.telefone,
      createdAt: new Date()
    });
  
    return res.status(200).send({ success: 'Cliente criado com sucesso!'});
  } catch (error) {
    console.log(error);
    return res.status(400).send({ error: 'Ocorreu um erro na criação de cliente...' });
  }
});

// PUT(update) Clientes
router.put('/edit/:id', async (req, res) => {
  const cpf = req.body.cpf;
  const name = req.body.name;
  const email = req.body.email;
  const telefone = req.body.telefone;

  try {
    await updateClient(req.params.id, { cpf, name, email, telefone});

    return res.status(200).send({ success: 'Edição feita com sucesso!'});
  } catch (error) {
    console.log(error);
    return res.status(400).send({ error: 'Ocorreu um erro nas modificações de cliente...' });
  }
});

// DELETE usuario
router.delete('/delete/:id', async (req, res) => {
  try {
    await deleteClient(req.params.id);

    return res.status(200).send({ success: 'Cliente excluído com sucesso!'});
  } catch (error) {
    console.log(error);
    return res.status(400).send({ error: 'Ocorreu um erro ao excluir o cliente...' });
  }
});

module.exports = router;