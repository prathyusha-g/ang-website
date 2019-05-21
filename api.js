const express = require('express')
const router =  express.Router()
const User = require('../models/user')
// const Card = require('../models/card')
const Admin =  require('../models/admin')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
// var cryptr = require('cryptr');
// cryptr = new cryptr('1559');
const  db =  "mongodb://localhost/myproject"
mongoose.connect(db,err =>{
    if(err){
        console.error('Error!' + err)
    }
    else{
        console.log('Connected to mongodb')
    }
})


function verifyToken(req,res,next){
    if(!req.headers.authorization){
        return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null'){
        return res.status(401).send('Unauthorized request')
    }
    let payload = jwt.verify(token,'secretKey')
    if(!payload){
        return res.status(401).send('Unauthorized request')
    }
    req.userId = payload.subject
    next()
}


router.get('/',(req,res)=>{
    res.send('From API routes')
})

router.post('/register',(req,res)=>{
    let userData = req.body
    let user = new User(userData)
    user.save((error,registeredUser)=>{
        if(error){
            console.log(error)
        }
        else{
            let payload ={ subject : registeredUser._id}
            let token = jwt.sign(payload,'secretKey')
            res.status(200).send({token},)
        }
    })
})


// router.post('/addcart',(req,res)=>{
//     let cardData = req.body
//     let card =  new Card(cardData)
//     card.save((error,productUser)=>{
//         if(error){
//             console.log(error)
//         }
//         else{
//             let payload={subject : productUser._id}
//             let token = jwt.sign(payload,'secretKey')
//             res.status(200).send({token},)
//         }
//     })
// })



// exports.getProduct=function(request,response){
//     Card.find(function(err,res){
//       if(err){
//       console.log(err);
//       }else{
//       console.log(res);
//       response.json(res);
//       }
      
//     });
//     }

// router.post('/addcart',(req,res)=>{
//     let cardData = req.body
//     let card =  new Card(cardData)
//     card.save((error,productUser)=>{
//         if(error){
//             console.log(error)
//         }
//         else{
//             let payload={subject : productUser._id}
//             let token = jwt.sign(payload,'secretKey')
//             res.status(200).send({token})
//         }
//     })
// })
router.post('/login',(req,res)=>{
    let userData = req.body
    User.findOne({email : userData.email},(error,user)=>{
        if(error){
            console.log(error)
        }
        else{
            if(!user){
                res.status(401).send('Invalid email')
            }
            else{
                if(user.password !== userData.password){
                res.status(401).send('Invalid password')
                }
                else{
                    let payload ={subject:user._id}
                    let token=jwt.sign(payload,'secretKey')
                    res.status(200).send({token})
                }
            }

        }
    })
})

router.post('/adregister',(req,res)=>{
    let userData = req.body
    let admin = new Admin(userData)
    admin.save((error,registeredUser)=>{
        if(error){
            console.log(error)
        }
        else{
            let payload ={ subject : registeredUser._id}
            let token = jwt.sign(payload,'secretKey')
            res.status(200).send({token},)
        }
    })
})


router.post('/adlogin',(req,res)=>{
    let userData = req.body
    Admin.findOne({email : userData.email},(error,admin)=>{ 
        if(error){
            console.log(error)
        }
        else{
            if(!admin){
                res.status(401).send('Invalid email')
            }
            else{
                if(admin.password !== userData.password){
                res.status(401).send('Invalid password')
                }
                else{
                    let payload ={subject:admin._id}
                    let token=jwt.sign(payload,'secretKey')
                    res.status(200).send({token})
                }
            }

        }
    })
})



router.get('/events',(req,res) =>{
    let events = [
        {
         "_id": "01",
        "name" : "List of new price, effective from 01st April 2019, is here",
        "price": "2019"
        },
        // {
        //     "_id": "02",
        //    "name" : "Kawasaki-Ninja",
        //    "price" :"₹ 2.35-lakh"
        //    },
        //    {
        //     "_id": "03",
        //    "name" : "Kawasaki-Vulcan",
        //    "price" :"₹ 2.9-lakh"
        //    },
        //    {
        //     "_id": "04",
        //    "name" : "K-Eliminator",
        //    "price" :"₹ 37-lakhs"
        //    },
        //    {
        //     "_id": "05",
        //    "name" : "Kawasaki-Estrella",
        //    "price" :"₹ 75-lakhs"
        //    },
        //    {
        //    "_id": "06",
        //   "name" : "Kawasaki-VN1600",
        //   "price" :"₹ 2.4-lakh"
        //    }
        //   },
        //   {
        //     "_id": "07",
        //    "name" : "Ninja-X20",
        //    "price" :"₹ 25 lakhs"
        //    },
        //    {
        //     "_id": "08",
        //    "name" : "Kawasaki-1400",
        //    "price" :"₹ 75 lakhs"
        //    },
        //    {
        //     "_id": "09",
        //    "name" : "Kawasaki",
        //    "price" :"₹ 3 lakhs"
        //    }
    ]
    res.json(events)
}) 

// router.get('/special',verifyToken, (req,res) =>{
//     let events = [
//         {
//          "_id": "01",
//         "name" : "Kawasaki-Ducatu",
//         "price" :"₹ 1.5-lakh"
//         },
//         {
//             "_id": "02",
//            "name" : "Kawasaki-Ninja",
//            "price" :"₹ 2.35-lakh"
//            },
//            {
//             "_id": "03",
//            "name" : "Kawasaki-Vulcan",
//            "price" :"₹ 2.9-lakh"
//            },
//            {
//             "_id": "04",
//            "name" : "K-Eliminator",
//            "price" :"₹ 37-lakhs"
//            },
//            {
//             "_id": "05",
//            "name" : "Kawasaki-Estrella",
//            "price" :"₹ 75-lakhs"
//            },
//            {
//            "_id": "06",
//           "name" : "Kawasaki-VN1600",
//           "price" :"₹ 2.4-lakh"
//           },
//           {
//             "_id": "07",
//            "name" : "Ninja-X20",
//            "price" :"₹ 25 lakhs"
//            },
//            {
//             "_id": "08",
//            "name" : "Kawasaki-1400",
//            "price" :"₹ 75 lakhs"
//            },
//            {
//             "_id": "09",
//            "name" : "Kawasaki",
//            "price" :"₹ 3 lakhs"
//            },
//     ]

//     res.json(events)
// }) 


module.exports = router

