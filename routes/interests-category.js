var express = require('express');
var router = express.Router();
var InterestsCategories = require('../models/interests-category');
var Interest = require('../models/interest');

/* GET users listing. */
router.get('/', function(req, res, next) {
    InterestsCategories.find().populate("interests")
        .exec(function(err, categories){
            if(err){
                return res.status(500).json({
                    title: 'An error Occured',
                    error: err
                });
            }

            res.status(200).json({
                message: "Success",
                obj: categories
            });
        });


    //The same query with lookup

    // InterestsCategories.aggregate([
    //     {
    //         $lookup:
    //             {
    //                 from: "interests",
    //                 localField: "interests",
    //                 foreignField: "_id",
    //                 as: "interests"
    //             }
    //     }
    // ])
    //     .exec(function(err, categories){
    //         if(err){
    //             return res.status(500).json({
    //                 title: 'An error Occured',
    //                 error: err
    //             });
    //         }
    //
    //         res.status(200).json({
    //             message: "Success",
    //             obj: categories
    //         });
    //     });
    //
    // var categories = [
    //     {
    //         "name": "Food",
    //         "interests": ["Resturants","Fast Food","Sushi"]
    //     },
    //     {
    //         "name": "Fashion",
    //         "interests": ["Female Fashion","Male Fashion","Underwares"]
    //     },
    //     {
    //         "name": "Sport",
    //         "interests": ["Soccer","Basketball","Golf"]
    //     }
    // ];
    //
    //
    // for( let cat of categories){
    //
    //     var promiseArr = [cat.name];
    //     for( let int of cat.interests) {
    //         promiseArr.push( Interest.findOne({name: int}).exec()
    //             .then((data) => {return data})
    //             .catch((error) => {return false}))
    //
    //     }
    //
    //     Promise.all(promiseArr)
    //     .then((data) => {
    //         var category = new InterestsCategory({name:data[0]});
    //         data = data.splice(1);
    //         category.interests = data;
    //         return category.save();
    //
    //     }).then((category) => {
    //         console.log(category);
    //     }).catch((error) =>{
    //         console.log(error);
    //     });
    // }


});

module.exports = router;
