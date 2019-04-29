const express = require('express')
const router = express.Router()
const burger = require('../models/burger')

//configure router to convert json data
//router.use(express.json())
//
//router.get('/', (req, res)=>{
//    burger.all((result)=>{
//        res.json(result)
//    })
//   // res.send('burger domain babyyyyyyy')
//})

router.get("/", function(req, res) {
    burger.all(function(data) {
      let hbsObject = {
        burger: data
      };
      console.log("toHandleBars", hbsObject)
      res.render("index", hbsObject);
    });
  });

//XXXYOUTUBEXXXXXXXXXXXXXXXXX
//router.get('/', function(req, res) {
//    burger.selectAll(function(data){
//        var hdbrsObj = {
//            burgers: data
//        };
//        console.log(hdbrsObj);
//        res.render("index", hdbrsObj);
//    });
//}
//XXXXXXXXXXXXXXXXXXXXXXXXXXX

router.get("/api/burgers", function(req, res) {
    burger.all(function(data) {
      res.json(data);
    });
});

//added a new route
//router.post('/create', (req, res) =>{
//    console.log(req.body)
//    burger.create(["burger_name", "devoured"], 
//    [req.body.burger_name, req.body.devoured], 
//    result =>{
//        res.json({message: "Burger created, hell yeah!"})
//            //res.json(result)
//    });
//});

router.post("/api/burgers", function(req, res) {
    console.log(req.body);
    burger.create([
      "burger_name", "devoured"
    ], [
      req.body.burger_name, req.body.devoured
    ], function(result) {
      res.json({id: result.insertId});
    });
  });

//XXXXYOUTUBEXXXXXXXXXXXXXXX
//router.post("/api/burgers", function(req, res){
//    burger.insertOne(
//        ["burger_name", "devoured"],
//        [req.body.burger_name, req.body.devoured],
//        function(results) {
//            res.json({id: result.insertId});
//        }
//    )
//})
//XXXXXXXXXXXXXXXXXXXXXXXXXXX

//router.put('/update/:id', (req, res) =>{
//    //console.log(req.body)
//    burger.update({devoured: true}, `id=${req.params.id}`,//["id", "devoured"], [req.body.id, req.body.devoured])
//    result =>{
//        console.log(result)
//        res.json({message: "Burger updated, oh yeah!"})
//    });

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log(req.body);
    console.log("condition", condition);
  
    burger.update({
      devoured: req.body.devoured
    },condition, function(result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

//YOUTUBEXXXXXXXXXXXXXXXXXXXXXXXXX
//router.put("/api/burgers/:id", function(req, res){
//    var condition = "id = " + req.params.id;
//
//    console.log("condition", condition);
//    burger.updateOne({ devoured: req.body.devoured}, condition, 
//        function(result){
//            if ((result.changedRows === 0)){
//                return res.status(404).end();
//            } else {
//                res.status(200).end();
//            }
//        });
//});

//router.delete("/api/burgers/:id", function(result){
//    if(result.affectedRows == 0){
//        return res.status(404).end();
//    }
//})

router.delete("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    burger.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
});

//router.delete("/api/burgers/:id", function(req, res){
//    var condition = "id = " + req.params.id;
//    console.log("condition", condition);
//
//    burger.deleteOne(condition, function(results){
//        if ((result, changedRows === 0)){
//            return res.status(404).end();
//        } else {
//            res.status(200).end();
//        }
//    })
//})
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

//});



module.exports = router
