<template>
  <div class="container">
    <!-- Adiciona/remove a classe "show" -->
    <div v-bind:class="modalClass" class="modal-container">
      <div class="user-modal">
        <h3 class="text-info">Editar Cliente</h3>
        <form>
          <div class="form-group">
            <label for="">Cpf</label>
            <input v-bind:value="client.cpf" required type="text" id="cpfEdit" class="form-control"/>
          </div>
          
          <div class="form-group">
            <label for="">Nome</label>
            <input v-bind:value="client.name" required type="text" id="nameEdit" class="form-control"/>
          </div>
          
          <div class="form-group">
            <label for="">Email</label>
            <input v-bind:value="client.email" required type="email" id="emailEdit" class="form-control"/>
          </div>
          
          <div class="form-group">
            <label for="">Telefone</label>
            <input v-bind:value="client.telefone" required type="text" id="telefoneEdit" class="form-control"/>
          </div>
          
          <!-- ao clicar, "showModal" passa a ser false -->
          <button v-on:click.prevent="showModal = !showModal" class="btn btn-secondary mr-1">Fechar</button>
          <button v-on:click="updateClient(client._id)" type="submit" class="btn btn-primary">Salvar</button> 
        </form>
      </div>
    </div>

  </div>
</template>

<script>
import { EventBus } from '../main.js';

export default {
  name: 'ClientEditForm',
  data() {
    return {
      clients: [],
      client: '',
      showModal: false
    }
  },
  methods: {
    // Requisição PUT para atualizar informações do usuário
    async updateClient(id) {
      await fetch(`http://localhost:3000/api/clients/edit/${id}`, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ 
          cpf: document.getElementById('cpfEdit').value,
          name: document.getElementById('nameEdit').value,
          email: document.getElementById('emailEdit').value,
          telefone: document.getElementById('telefoneEdit').value
        }),
      })
      .then((response) => response.json())
      .then((data) => {
        this.clients = data;
        console.log('caiu aqui');
      })
      .catch((err) => {
        console.error(err);
      });
    }
  },
  // Ao criar o componente, recebemos os dados emitidos do 'EventBus' aqui nesse componente
  created() {
    // evento de click
    EventBus.$on('click', (modal, client) => {
      this.showModal = !modal;
      this.client = client;
      console.log('showModal', this.showModal);
      console.log('modal', modal)
    })
  },
  // Função para colocar ou tirar a classe "show" no Modal
  computed: {
    modalClass() {
      return this.showModal ? 'show' : '';
    }
  }
  
};
</script>

<style>
/* Esta usando a mesma estilização do modal de cadastro */
</style>
