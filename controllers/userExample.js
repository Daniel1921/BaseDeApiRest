const {response, request} = require('express'); 

const userGet = (req = request , res = response)=>{

    const {q, idBd, adicional} = req.query;

    res.status(200).json({
        msg: "Get Api - with controller ",
        q,
        idBd,
        adicional
    });
}

const userPut = (req, res)=>{

    const {userId} = req.params;

    res.status(200).json({
        msg: "Put Api - with controller",
        userId
    });
}

const userPost = (req, res)=>{

    const {nombre, edad} = req.body;

    res.status(201).json({
        msg: "Post Api - with controller",
        nombre,
        edad
    });
}

const userDelete = (req, res)=>{
    res.status(403).json({
        msg: "Delete Api  - with controller"
    });
}


module.exports = {
    userGet,
    userPut,
    userPost,
    userDelete
}