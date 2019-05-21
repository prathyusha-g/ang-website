var Product = require("../models/card");
var ObjectId = require('mongoose').Types.ObjectId;
exports.addProduct = function (req, res) {
  var productId = req.body.productId;
  var productname = req.body.productname;
  var productprice = req.body.productprice;
  var producturl = req.body.producturl;
  var productdiscription = req.body.productdiscription;
  
  var newProd = new Product({ //newprod is just creating variable to check product is available or not
    productId: productId,
    productname: productname,
    productprice: productprice,
    producturl: producturl,
    productdiscription: productdiscription
  });

  Product.findOne({ productId: productId }, function (err, event) {
    if (err) {
      res.send({ status: false, message: "error occured while finding product", err });
      console.error(err);

    } else {

      if (event == null) {//null resymbol as new products
        newProd.save(function (err1, result) {
          if (err1) {
            res.send({ status: false, message: "Cannot add product" });
            
          }
          else {
            res.send({ status: true, message: "Product Added Succesfully" });
            console.log(result);
          }
        });

      } else {
        res.send({ status: false, message: "Product already exist" });

      }
    }
  })

}
// to get the data from data base saparate function is below 
exports.getProduct=function(request,response){
Product.find(function(err,res){
  if(err){
  console.log(err);
  }else{
  console.log(res);
  response.json(res);
  }
  
});
}

exports.getProductsByID = function(request,response){


  if(!ObjectId.isValid(request.params.id)){
  return response.status(400).send('no record with given id');
  }
  Product.findById(request.params.id,function(err,product){
  if(err){
  console.log(err);
  }
  response.send(product);
  console.log(product);
  })

}
exports.updateProduct = function(req,res){
  Product.findById(req.params.id, function(err, prod){

      if (!prod)
      // return next(err);
      res.send("error:",err);

    else{
      prod.productId = req.body.productId;
      prod.productname = req.body.productname;
      prod.productprice = req.body.productprice;
      prod.producturl = req.body.producturl;
      prod.productdiscription = req.body.productdiscription;

      prod.save().then(prod => {
        res.json('Update complete');
    })
    .catch(err => {
      res.status(400).send("unable to update the product");
});
  }
  }) 

}


//delete product
exports.deleteProduct = function(req,res){
  Product.findByIdAndRemove(req.params.id,function(err){
      if(err) res.json(err);
      else res.json('Successfully removed');
  })
}


