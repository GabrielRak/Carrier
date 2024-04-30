<template>
    <Header text="Carrer" />
    <h1><b>Package to : </b> {{ packageId }}</h1>
    <Navbar />
  </template>
  
  <script>
import Header from '../components/Header.vue';
import Navbar from '../components/Navbar.vue';

  export default {
    components:{
        Header,
        Navbar,
    },
    props: ["packageId"],
  };
  </script>
  