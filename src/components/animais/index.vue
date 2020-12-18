<template>

      
            <div class="card" @click="clicou()">
                <button @click="querodel()" id="buttonDel" >X</button>
                   
<router-link  to="/Saiba">
           <img class="fotoPet" :src='Animal.urlImage'>
</router-link>
           <h3>Nome: {{Animal.nome}}</h3>
            <h3>Preço:{{Animal.preco}}</h3>
            <h3>Idade: {{Animal.idade}}</h3>
             <h3>Espécie: {{Animal.espécie}}</h3>
 <div :class="{'classMasc': Animal.sexo == 'Macho', 'classFem': Animal.sexo =='Fêmea'}">

     {{Animal.sexo}}
 </div>
           
        
        </div>
  
</template>

<script>

export default{

    data(){
        return{ 
            
            

        }
    },
    props: {
        Animal: Object,
        
    },

    methods:{
        
        querodel: function(){

            console.log("estou pronto para ser excluido, emitindo evento do filho")

            this.$emit("meDelete", {idAnimal:this.Animal.id, component: this}) //posso passar qualquer dado por aqui
        },

        teste: function(){
            alert("O animal foi deletado da sua lista")

        },

        clicou: function(){
                alert("o usuario clicou na div mds")
                 this.$emit("meVejaMelhor", {idAnimal:this.Animal.id, component: this})

        }
    }

}
  
</script>

<style scoped>

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
H3{
color: black;
font-family: Arial, Helvetica, sans-serif;


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

    

      .card{
 background-color:#FFFFFF;
 color: black;
        width:24%;
        height:450px;
        margin-top:50px;
        margin-left:5%;
        margin-right:2%;
        float:left;
border-radius:25px;
font-family: Arial, Helvetica, sans-serif;
    }
    
    .fotoPet{
width:320px;
height:200px;
border-radius: 25px 25px 2px 2px;

    }
    #buttonDel
    {
       position:absolute;
       z-index:1;
       margin-left:10px;
       margin-top:10px;
        background-color:red;
        border-radius: 50%;
        color:white;
        font-weight:bold;
        font-family:arial;
        border: 0px;
    }
    
</style>