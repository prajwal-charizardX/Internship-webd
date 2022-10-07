const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/middleware");
const { body, validationResult } = require("express-validator");
const firebase = require("firebase-admin");
const {
  getFirestore,
  Timestamp,
  FieldValue,
  DocumentReference,
} = require("firebase-admin/firestore");


const alldata=[
  {
    "id": "CRRrz6pPf6Kq5epq1LzI",
    "description": "Providing highly qualified civil and general contractor services and dependability that they put while developing properties",
    "title": "CIVIL AND GENERAL CONTRACTING",
    "image": "https://firebasestorage.googleapis.com/v0/b/panchami-associates.appspot.com/o/Card%2FPic1.webp?alt=media&token=f978e524-8ade-43de-adab-cd6b4113d53f"
  },
  {
    "id": "FiDd75DnByFdZkfyf8lP",
    "image": "https://firebasestorage.googleapis.com/v0/b/panchami-associates.appspot.com/o/Card%2FProject%20Planning.jpg?alt=media&token=2f91d445-3838-466f-841c-7156f67da086",
    "title": "PLANNING 3D ELEVATION & DESIGNS",
    "description": "Get design your House by Experienced Professionals, we will be pleased to design your dream"
  },
  {
    "id": "JqHT50KXd6AO8aHWyVVh",
    "title": "DESIGN AND BUILDING  TURNKEY PROJECTS",
    "description": "We at Panchami manage design-build for office, retail or residential refurbishment, and fit-outs, through a systematic approach.",
    "image": "https://firebasestorage.googleapis.com/v0/b/panchami-associates.appspot.com/o/Card%2FBuilding%20construction.jpg?alt=media&token=d82d0b50-fa4a-49b1-b095-11d1f3c3bbea"
  },
  {
    "id": "XijSsNgpNe8pSVXQ7mZa",
    "title": "Painting and Tiling ",
    "image": "https://firebasestorage.googleapis.com/v0/b/panchami-associates.appspot.com/o/Card%2Fnew%20tilinh.jpg?alt=media&token=194bb5a9-b50d-40f2-9f8b-82396b94442b",
    "description": "we at Panchami do Quality painting and tiling services. we do painting services for both interior and exterior."
  },
  {
    "id": "mfIdZqagkpEA6lp1Jg4o",
    "description": "We at Panchami offer a variety of interior designing solutions as well as Turnkey Interior Design.",
    "title": "Interior Design",
    "image": "https://firebasestorage.googleapis.com/v0/b/panchami-associates.appspot.com/o/Card%2FInterior%20Planning%20.jpg?alt=media&token=7516dd8f-ae6d-414e-bbe8-65fd70a75337"
  },
  {
    "id": "yfV4dWK8AbFUtkJoBgjf",
    "title": "REFURBISHMENTS AND RENOVATION",
    "description": "We provide renovation services for Bedrooms, kitchens, bathrooms and much more.",
    "image": "https://firebasestorage.googleapis.com/v0/b/panchami-associates.appspot.com/o/Card%2Frenovation.jpg?alt=media&token=dd40fcbe-bbe4-43c8-adaa-6c99111ed0ea"
  }
]
 


const db = getFirestore();
router.get(
  "/getalldata",
  

  async (req, res) => {
    try{
      // const citiesRef = db.collection("Cards");
      // const snapshot = await citiesRef.get();
      // const data= snapshot.docs.map((doc)=>({id:doc.id,...doc.data()}))
      // res.json(data)
      res.json(alldata)

    }catch(err){
      res.json(alldata)

    }
    
  }
);

router.post("/addcard", 
// fetchuser, 
async (req, res) => {
  try {
    const { title, description, image } = req.body;
    const Cards = db.collection("Cards");
    const user = await Cards.add({
      title: title,
      description: description,
      image: image,
    });
    
    res.status(200).send({ msg: "sucessfully sent " });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

module.exports = router;


router.put('/updatecard/:id',fetchuser,async(req,res)=>{
  try{
    const Cards = db.collection("Cards");
    const { title, description, image } = req.body;
    const Card={}
    if(title){Card.title=title}
    if(description){Card.description=description}
    if(image){Card.image=image}

    await Cards.doc(req.params.id).update(Card)
    res.send({msg:"done"})
  }catch(e){
    res.status(500).send({ error: e.message });
  }
})

router.delete('/deletecard/:id',async(req,res)=>{
  try{
    const Cards = db.collection("Cards");
    

   const cardcheck= await  Cards.doc(req.params.id).delete();
   if(!cardcheck){
    return res.status(404).send("not found")
   }
  //  if(cardcheck.user.toString() !==req.user.id){
  //   return res.status(401).send("seriously??trying to hack me ")
  //  }
    res.send({msg:"done"})
  }catch(e){
    res.status(500).send({ error: e.message });
  }
})
