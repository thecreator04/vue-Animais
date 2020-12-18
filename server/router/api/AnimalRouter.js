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
        espécie:req.body.especie,
        

    });

    res.status(201).send();
})

//VER TODOS ANIMAIS

router.get('/', async (req,res)=>{
    const animals = await getAllDoc();
    res.send(await animals.find({}).toArray());

    res.json({"message":"API-EXPRESS"})
})


//VER ANIMAL COM A PARTIR DE UM ID
router.get('/Animal/:id', (req,res)=>{

    res.send('get.animal = get animal by id')
})


//EXCLUIR ANIMAL

router.delete('/:id', async(req, res)=>{

    const animal = await deleteAnimalwithID();
    await animal.deleteONe({

        _id: new mongodb.ObjectID(req.params.id)

        
    })
    res.status(200).send()
});

async function getAllDoc(){
    const client = await mongodb.MongoClient.connect('mongodb+srv://thiagocazuni:24491372@cluster0.vzngj.mongodb.net/eventos?retryWrites=true&w=majority', {


    useNewUrlParser: true
    });

    return client.db('eventos').collection('animais');
}

async function createNewAnimal(){


}

module.exports = router;