<template>
  <div class="container">
    <h3 class="mt-2 mb-3 float-left text-primary">Clientes</h3>
    <!-- Tabela de Clientes -->
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">ID</th>
          <th scope="col">Cpf</th>
          <th scope="col">Nome</th>
          <th scope="col">E-mail</th>
          <th scope="col">Telefone</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <!-- Diretiva "v-for" para pegar os clientes da API -->
      
        <tr v-for="(client, index) in clients" :key="client._id" class="m-5">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ client._id }}</td>
          <td>{{ client.cpf }}</td>
          <td>{{ client.name }}</td>
          <td>{{ client.email }}</td>
          <td>{{ client.telefone }}</td>
          
          <td>
            <form>
              <button v-on:click.prevent="emitShowModal(client)" class="btn btn-sm btn-info mr-1">Editar</button>
              <button v-on:click="deleteClient(client._id)" type="submit" class="btn btn-sm btn-danger">Deletar</button>
            </form>
          </td>
        </tr>
        <!-- Fim "v-for" -->
      </tbody>
    </table>
    <!-- Fim tabela -->
  </div>
</template>

<script>
import { EventBus } from '../main.js';

export default {
  name: 'ClientsTable',
  data() {
    return {
      clients: [],
      showModal: false
    }
  },
  // Ao criar o componente, é feito uma requisição GET para a API do backend
  async mounted() {
    const response = await fetch('http://backendcrud.netlify.app/api/clients/')
    console.log(response)
    const { client } = await response.json()
    this.clients = client
    console.log(this.clients)
  },
  methods: {
    // Requisição DELETE para excluir o cliente
    async deleteClient(id) {
      await fetch(`http://backendcrud.netlify.app/api/clients/delete/${id}`, {
        method: 'DELETE'
      })
      .then((response) => response.json())
      .catch((err) => {
        console.error(err);
      });
    },
    // Metodo usa o 'EventBus' para poder emitir dados de forma global
    // --> Emite dados de "user" e "showModal"
    emitShowModal(client) {
      this.client = client;
      EventBus.$emit('click', this.showModal, this.client);
      
      console.log(this.client);
      console.log('ClientsTable:', this.showModal);
    }
  }
}
</script>

<style scoped>
th {
  padding-left: 1.2rem;
}
</style>
