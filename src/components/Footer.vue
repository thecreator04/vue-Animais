<template>
  <footer>

    <h1 id="titulo"> insira seu email para receber novidades!</h1>

    <form id="forme">
  
  <input type="text" placeholder="Preço" id="fname" name="fname" class="inputUpdate" ><br><br>
      
  
</form>


  </footer>
</template>

<script>
export default {

}
</script>

<style>
    footer{
        background-color:rgb(4, 143, 148);
        width:100%;
        height:350px;
        
    }

   

  #updatesForm{
   
    width:30%;
    height:140px;
    background-color:gray;
    margin-left:5%;
    margin-top:200px;
  

  }

  #titulo{
    margin-top:30px;
    margin-left:25%;
    color:white
  }

  #submitUpdates{
width:10%;
background-color:black;
color:white;
font-family:Arial, Helvetica, sans-serif;
font-weight:bold;
height:30px;
margin-left:45%


  }

  

   .inputUpdate{
    border:1px solid#ffffff;
    margin-left:25%;
    border-radius: 10PX;
    width:50%;
    height:40px;
    color:black;
    font-size: 16px;
  }

   #forme{
    margin-top:50px;

  
  
   margin-right:auto;
   margin-left:auto;
   color:black;
  
    
  }
</style>