<template>
  <div class="home">

    <div id="animais" >
      <div v-for="animal in Animais" :key="animal.id"> <!-- vai separar o array Animais em unidades que estaram contidas em animal e depois vai alterando conforme a iteraçao -->
      
        
          <Animals :Animal="animal" @meDelete="deletarAnimal($event)" @meConhecaMelhor="saibaMais" /> <!-- a props que o componente exige "Animal" pega o dado atual de animal, lembrando que este está sempre mudando -->
       
      </div>
</div>
  
   <div id="form">
  <center><h1 style="color:white">Cadastrar Animal</h1></center>
<center>
  <form>
  <input type="text" class="input"  placeholder="Nome" v-model="Animal.nome"><br><br>
  <!-- SEPARADOR INPUT -->

  <input type="text" class="input"   placeholder="Sexo" v-model="Animal.sexo"><br><br>
    <!-- SEPARADOR INPUT -->
  
  <input type="text" class="input"  placeholder="Idade" v-model="Animal.idade"><br><br>
    <!-- SEPARADOR INPUT -->

  <input type="text" class="input" placeholder="Espécie" v-model="Animal.especie"><br><br>
    <!-- SEPARADOR INPUT -->

  <input type="text" class="input" placeholder="Preço" v-model="Animal.preco"><br><br>
    <!-- SEPARADOR INPUT -->

      <input type="text" class="input" placeholder="endereço da imagem(url)" v-model="Animal.urlImage"><br><br>
  <input type="submit" @click="createAnimal" value="Enviar"  id="submit">
 


</form>
 

  </center>
</div>
  </div>
</template>

<script>
import axios from 'axios';
import Animals from '../components/animais/index.vue'
//import PostService from '../PostService'
export default {
  name: 'Home',
  components: {
    Animals
  },

  data(){
    return{

Animais:{},

Animal:{
nome: '',
idade:'', 
sexo: '',
preco: '', 
urlImage: '', 
especie:'',}


    }},
methods:{
  

  async createAnimal(){
 
     let newAnimal = {
    nome:this.Animal.nome,
    espécie:this.Animal.especie,
    sexo:this.Animal.sexo,
    idade:this.Animal.idade,
    preco:this.Animal.preco,
    urlImage:this.Animal.urlImage,
   
    


      }
 console.log(newAnimal.urlImage)

 axios.post('http://localhost:3000/create', newAnimal)
  .then((response)=>{

    console.log(response)
  })
  .catch((error)=>{
    console.log(error)
  })

  },

  saibaMais($event){

   let id =  $event.idAnimal

    console.log(id)
    window.location.href = "http://localhost:8080/Saiba/"+id
  },

  //DELETAR ANIMAL
 async deletarAnimal($event){

    let ide = $event.idAnimal;
axios.delete('http://localhost:3000/delete/'+ide)
 .then((response)=>{
  console.log(response)
  
  })
  .catch((error)=>{
    console.log(error + "error")
  })
  window.location.reload()
  }

  
},
   async mounted(){

    axios.get('http://localhost:3000/')
    .then((response)=>{
      //console.log(response.data)
 
      this.Animais = response.data

      console.log(response)

    })
    .catch((error)=>{
      console.log(error);
    })

    }
}
</script>
<style >
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: white;
  font-size: 16px;
  font-weight:bold;
  opacity:0.8;
  padding-left: 10px;
}

#app{
width:100%;


overflow: auto;



background-color:black
}
#submit{
  margin-top:20px;
width:20%;
height:40px;
border: 1px solid#ffffff;
background-color:#000000;
color:white

}

h3{
 
  color:white
  
  }
  #animais{
    width:100%;
    overflow: auto;
  }

  #form{
    margin-top:50px;
   width:60%;
   height:550px;
   border:solid#FFFFFF;
   margin-right:auto;
   margin-left:auto;
   color:white;
   margin-bottom: 100px;
    
  }
  .input{
    border:1px solid#ffffff;
    background-color: #000000;
    border-radius: 10PX;
    width:400px;
    height:40px;
    color:white;
    font-size: 16px;
  }
</style>