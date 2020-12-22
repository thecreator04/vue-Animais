const express = require('express');
const mongodb = require('mongodb');
const  router = express.Router();

//ADICIONAR ANIMAL

router.post('/create', async(req, res) =>{

    console.log(req.body.nome,)

    const animais = await getAllDoc();
    await animais.insertOne({

        nome:req.body.nome,
        idade:req.body.idade,
        sexo:req.body.sexo,
        preco:req.body.preco,
        urlImage:req.body.urlImage,
        espécie:req.body.espécie,
    });
    res.status(201).send();
})
//VER TODOS ANIMAIS

router.get('/', async (req,res)=>{
    const animals = await getAllDoc();
    res.send(await animals.find({}).toArray());

    //res.json({"message":"API-EXPRESS"})
})

//VER ANIMAL COM A PARTIR DE UM ID
router.get('/Saiba/:id', async(req, res)=>{

    try{

const id = req.params.id
    const animais  = await getAllDoc();
    
   animais.findOne({"_id": mongodb.ObjectId(id)}, function(err, result) {
        if (!err) {
     
                res.send(result)
                console.log(result)
                console.log(typeof(result))
        }
        else {
            console.log(err)      
        }
        
    });
}
catch(error){

}
});

//EXCLUIR ANIMAL

router.delete('/delete/:id', async(req, res)=>{
    console.log(req.params.id + "trueeee")
const id = req.params.id

    const animais  = await getAllDoc();
    
    animais.deleteOne({"_id": mongodb.ObjectId(id)}, function(err, result) {
        if (!err) {
                console.log("deu")
        }
        else {
            console.log(err)   
        }
    });

   
    
});

async function getAllDoc(){
    const client = await mongodb.MongoClient.connect('mongodb+srv://thiagocazuni:24491372@cluster0.vzngj.mongodb.net/eventos?retryWrites=true&w=majority', {
        useUnifiedTopology: true,

    useNewUrlParser: true
    });

    return client.db('eventos').collection('animais');
}

async function createNewAnimal(){


}

module.exports = router;