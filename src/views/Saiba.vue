<template>
  <div class="home">

    <div class="card">

    <img :src='info.urlImage' class="image">
  <h1>Nome:{{info.nome}}</h1>
    <h1>Idade:{{info.idade}}</h1>
      <h1>Espécie:{{info.espécie}}</h1>
       <h1>Preço:{{info.preco}}</h1>

       <div :class="{'classMasc': info.sexo == 'Macho', 'classFem': info.sexo =='Fêmea'}">

     {{info.sexo}}
 </div>
       

      </div>
      
    
</div>
  

</template>

<script>
import axios from 'axios';
//import Animals from '../components/animais/index.vue'
//import PostService from '../PostService'
export default {
  name: 'Saiba',
  components: {
    //Animals
  },

  data(){
    return{

info:null,

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
  // await PostService.insertPost(this.nome, this.sexo, this.idade, this.urlField, this.especie, this.preco);
  

//console.log("09iqpjpm")

//console.log("animal" + this.User.nome)
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
    window.location.href = "http://localhost:3000/Saiba/"+id
  },
 async deletarAnimal($event){

    let ide = $event.idAnimal;

  


axios.delete('http://localhost:3000/delete/'+ide)
 .then((response)=>{
  console.log(response)
 
  })
  .catch((error)=>{
    console.log(error + "error")
  })


  
    
  }
},
   async mounted(){
  

axios.get('http://localhost:3000/Saiba/' + this.$route.params.id)
  .then(response=> {

      this.info = response.data
    
       console.log(response)
 
  })
  .catch(error=>{
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
h1{
  color:black
}
.classFem{
        font-family: Arial, Helvetica, sans-serif;
        background-color:#eb76c4;
        width:36%;
        height:30px;
        color:white;
        font-size:20px;
        font-weight: bold;
        margin-left: auto;
        margin-right:auto;
        text-align: center;
        margin-top:10px;
          border-radius:35px
    }
    .classMasc{
        background-color:#0d9eff;
        width:36%;
      font-family: Arial, Helvetica, sans-serif;
        height:30px;
       font-size:20px;
        font-weight: bold;
        color:white;
        margin-left: auto;
        margin-right:auto;
         text-align: center;
         margin-top:10px;
         border-radius:35px
    }
.image{
  margin-top:10px;
  width:90%;
height:350px;
border-radius: 25px 25px 2px 2px;
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
  .card{
    margin-top:30px;
    width:50%;
    height:700px;
    background-color:white;
    border-radius:5%;
    margin-left:auto;
    margin-right:auto;
    margin-bottom:80px


  }


</style>