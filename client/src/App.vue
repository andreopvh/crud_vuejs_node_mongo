<template>
  <div id="app">
    
    <Header />
    <ClientRegisterForm />
    <ClientEditForm />
    <ClientsTable />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import ClientRegisterForm from './components/ClientRegisterForm.vue';
import ClientEditForm from './components/ClientEditForm.vue';
import ClientsTable from './components/ClientsTable.vue';


export default {
  name: 'App',
  components: {
    Header,
    ClientRegisterForm,
    ClientEditForm,
    ClientsTable
  }
}
</script>

<style>
#app {
  margin-top: 40px;
}
</style>
