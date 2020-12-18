<template>

 
  <div>
       

<div id="titulo"><h3>Sobre nós</h3></div>

          <p id="intro"> A pets in the House é uma petshop, situada na cidade de Taquara-RS que conta uma equipe na qual todos os integrantes tem uma característica em comum, que é a paixão em trabalhar com pets e promover o melhor atendimento para os clientes, desde quando a Pet in the House nasceu, levamos o conforto e bem-estar do seu bichinho como prioridade</p>

      
  <div id="images">
          <img src="../assets/download.jpg"  class="local" >
            <img src="../assets/download2.jpg"  class="local" >

    </div>
          
  </div>

  
</template>

<script>
//import Cliente from './components/cliente'


export default {
  name: 'App',
 components:{
   
  },
  
}
</script>

<style>


p{
  color:white;
  font-family:arial
}
#app{
width:100%;


overflow: auto;



background-color:black
}
#titulo{
  margin-left: 45%
}
#intro{
  width:70%;
  margin-left:15%

}
.local{
margin-left:5%;
  width:45%
}
#images{
  width:70%;
  margin-top:80px;
  margin-bottom:140px;
  margin-left: auto;
  margin-right:auto
}
</style>
