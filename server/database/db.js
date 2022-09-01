// Conexão com o banco de dados
const mongodb = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

mongodb.connect('mongodb://localhost/vuejs-crud', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(conn => {
  global.conn = conn.db('vuejs-crud');
  console.log("Conectado no MongoDB!");
}).catch((err) => {
  console.error('Error: Falha na conexão... ' + err);
});

/**
 * CRUD de Clientes
 */
// Retorna os documentos da collection 'clients'
async function findClients(callback) {
  return await global.conn.collection('clients').find({}).toArray(callback);
}

// Insere um novo usuario na collection 'clients'
async function insertClient(client, callback) {
  return await global.conn.collection('clients').insertOne(client, callback);
}

// Atualiza/edita dados do usuario na collection 'client'
async function updateClient(id, client) {
  return await global.conn.collection('clients').updateOne({_id: new ObjectId(id)}, {$set: client});
}

// Deleta um usuario da collection 'client'
async function deleteClient(id) {
  return await global.conn.collection('clients').deleteOne({_id: new ObjectId(id)});
}

module.exports = { findClients, insertClient, deleteClient, updateClient };