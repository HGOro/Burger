const express = require('express')
const router = express.Router()
const burger = require('../models/burger')

//confiruee router to convert json data
router.use(express.json())

router.get('/', (req, res)=>{
    burger.all((result)=>{
        res.json(result)
    })
   // res.send('burger domain babyyyyyyy')
})

//added a new route
router.post('/create', (req, res) =>{
    //console.log(req.body)
    burger.create(["burger_name", "devoured"], 
    [req.body.burger_name, req.body.devoured], 
    result =>{
        res.json({message: "Hell yeah!"})
            //res.json(result)
    })
})

router.put('/update/:id', (req, res) =>{
    //console.log(req.body)
    burger.update({devoured: true}, `id=${req.params.id}`,//["id", "devoured"], [req.body.id, req.body.devoured])
    result =>{
        console.log(result)
        res.json({message: "Hell Yeah!"})
    })
})

module.exports = router
