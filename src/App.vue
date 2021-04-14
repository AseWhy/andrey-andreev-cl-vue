<template>
  <Header/>

  <div class="main-container">
    <RouterView/>
  </div>

  <Footer/>
</template>

<script>
  import Header from './components/Header'
  import Footer from "./components/Footer";

  export default {
    name: 'App',
    components: {
      Header,
      Footer
    }
  }
</script>

<style>
  @import 'assets/css/fonts.css';

  body {
    margin: 0;
  }

  .main-container {
    margin-top: 5rem;
  }

  body::-webkit-scrollbar {
    width: 0.25em;
  }
  
  body::-webkit-scrollbar-track {
    background-color: white;
  }
  
  body::-webkit-scrollbar-thumb {
    background-color: black;
  }
</style>
