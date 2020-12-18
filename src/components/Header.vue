<template>
   <header id="header">
    
   
       <div class="WhiteCircle">
  <img alt="Vue logo" id="vueImage" src="../assets/logo.png" >
  </div>
      <img src="../assets/petshop.png" id="petshop">

        <nav class="navbar"> 
        <router-link tag="li" class="col" class-active="active" to="/"><a>Home</a></router-link>
        <router-link tag="li" class="col" class-active="active" to="/Sobre"><a>Sobre</a></router-link>
         <router-link tag="li" class="col" class-active="active" to="/Contato"><a>Contato</a></router-link>
        </nav> 
       
   </header>
</template>

<script>
export default {

}
</script>

<style>
    #header{

        background-color:rgb(27, 42, 70);
        width:100%;
        height:200px;

    }
    #petshop{
        margin-top:20px;
        margin-right:5%;
        height:70%;
        border-radius:100%;
        float:right
    }

    .navbar{
        float:left

    }
    #nav a.router-link-exact-active {
  color: #42b983;
}
#vueImage{
width:70%;
margin-top:2px;
margin-top:10px




}

    nav{
        list-style: none;
        margin-top:130px
        
    }
    li {
  float: left;
  margin-left:30px
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding:24px 60px;
  text-decoration: none;
  font-weight: bold;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
  background-color: #111;
}
.WhiteCircle{
  width: 5%;
  height:60px;
  background-color:white;
  position:absolute;
right:20%;
top:60px;
border-radius: 100%;
};






</style>